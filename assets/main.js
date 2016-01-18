// ianmcdonald.ca

(function() {

    // Random shape on page load
    window.addEventListener('load', function() {
        (function shape() {
            var num = Math.random(),
                shp = document.querySelector('.shape img');
            if (num < 0.333333) {
                shp.src = '/assets/circle.svg';
            } else if (num < 0.666667) {
                shp.src = '/assets/square.svg';
            } else {
                shp.src = '/assets/triangle.svg';
            }
        })();
    });

    // Cycle shapes on click
    document.querySelector('.shape img').addEventListener('click', function() {
        var shape = this.src;
        if (shape.search('circle') !== -1) this.src = '/assets/square.svg';
        if (shape.search('square') !== -1) this.src = '/assets/triangle.svg';
        if (shape.search('triangle') !== -1) this.src = '/assets/circle.svg';
    });

    // Toggle fade class on body
    function fader() {
        var el  = document.body;
        if (el.className !== 'fade') {
            el.className = 'fade';
        } else {
            el.className = '';
        }
    }

    // Invoke timed fader cycle
    setInterval(function() {
        fader();
    }, 5000);

    // Show and hide info
    document.querySelector('.show-info').addEventListener('click', function(e) {
        e.preventDefault();
        var info = document.querySelector('.info');
        if (info.style.display !== 'inline-block') {
            info.style.display = 'inline-block';
        } else {
            info.style.display = 'none';
        }
    });

    // Run fader once on load
    window.addEventListener('load', fader);   
    
    // Fade in shape on load
    window.addEventListener('load', function() {
        document.querySelector('.shape').style.opacity = '1';
    });
    
})();
