---
layout: post
title:  "Simple copyright information"
date:   2015-04-24
---
{% highlight javascript %}
// Truncate text
function truncate(selector, length) {
    var l = length,
        e = document.querySelectorAll(selector);
    if (e) {
        for (var i = 0; i < e.length; i++) {
            var trunc = e[i].innerHTML;
            if (trunc.length > l) {
                trunc = trunc.substring(0, l);
                trunc = trunc.replace(/\w+$/, '');
                e[i].innerHTML = trunc + '...';
            }
        }
    }
}
{% endhighlight %}

Easily truncate passages of text on the word. Just declare a selector and a character count.

{% highlight javascript %}
truncate('a.link', 40);
{% endhighlight %}

</script>
