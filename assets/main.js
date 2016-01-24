// Todo
var todo = {};

// Style vars
var bgColor = ['floralwhite', 'lavender', 'lightpink', 'palevioletred', 'palegreen', 'lightblue', 'goldenrod'];
var bgCount = 0;

function bgChange() {
    bgCount < bgColor.length - 1 ? bgCount++ : bgCount = 0;
    document.body.style.backgroundColor = bgColor[bgCount];
}

//setInterval( () => { bgChange(); }, 5000);

// Base styles
todo.baseStyles = `
body {
    background: ${bgColor[0]};
    max-width: 35em;
    margin: 0 auto;
    padding: 5em 1em;
    font-family: sans-serif;
    transition: background  5s linear
}
.field {
    border: 2px solid rgb(35,35,35);
    height: 3.45em;
    width: 20em;
    padding-left: 1em;
}
.btn {
    text-transform: uppercase;
    background: rgb(35,35,35);
    color: white;
    border: none;
    height: 4em;
    padding: 0 3em;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 2em auto;
    font-size: 1.5em;
}
li {
    margin-bottom: 1em;
}
.fade-in {
    opacity: 1;
    transition: all 0.5s ease 1s;
}
.checkbox {
    display: inline-block;
}
.checkbox input {
    vertical-align: middle;
}
.task {
    display: inline-block;
    margin-left: 0.5em;
    position: relative;
    opacity: 0;
    padding: 0 0.25em;
}
.task:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 0;
    height: 3px;
    background-color: rgb(35,35,35);
}
.task.done:before {
    width: 100%;
    transition: width 0.5s ease;
}
`;

// Todo properties
todo.Todo = function(data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
    this.created = m.prop(false);
};

// Todo list
todo.TodoList = Array;

// View model
todo.model = (function() {
    var model = {};
    model.init = (function() {
        model.list = new todo.TodoList();
        // Store new todo name
        model.description = m.prop('');
        // Add todo to list
        model.add = function(e) {
            e.preventDefault();
            if (model.description()) {
                model.list.unshift(new todo.Todo({
                    description: model.description()
                }));
                model.description('');
            }
        };
    })();
    return model;
}());

// View
todo.view = function() {
    return m('html', [
        m('style', todo.baseStyles),
        m('title', 'ToDo'),
        m('body', [
            m('form', {
                onsubmit: todo.model.add
            },[
                m('input[class=field]', {
                    onchange: m.withAttr('value', todo.model.description),
                    value: todo.model.description(),
                    placeholder: 'Add a task'
                }),
                m('button[class=btn]', {
                    type: 'submit'
                }, 'Add'),
            ]),
            m('ul', [
                todo.model.list.map(function(task, index) {
                    return m('li', { class: 'fade-in', onchange: task.created(true)}, [
                        m('label', [
                            m('.checkbox', [
                                m('input[type=checkbox]', {
                                    onclick: m.withAttr('checked', task.done),
                                    checked: task.done()
                                })
                            ]),
                            m('.task', {
                                class: !task.done() ? '' : 'done',
                                style: task.created() ? 'opacity: 1' : 'opacity: 0'
                            },
                              task.description()),
                        ])
                    ]);
                })
            ])
        ])
    ]);
};


// Initialize
m.mount(document, todo);
