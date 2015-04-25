---
layout: post
title:  "Simple copyright information"
date:   2015-04-24
---

Just a fun little script to declare current copyright information wherever
you desire.

{% highlight javascript %}
// Simple copyright information
function copyrightInfo(selector, name, startDate) {
    var elem, currentYear, date;
    elem = document.querySelector(selector);
    currentYear = new Date().getFullYear();
    date = currentYear;;
    if (!name) {
        name = "";
    }
    if (startDate) {
        date = startDate + "\u2014" + currentYear;
    }
    function writeCopywriteInfo() {
        elem.innerHTML = "&copy; " + date + " " + name;
    }
    document.addEventListener('DOMContentLoaded', writeCopywriteInfo);
}
{% endhighlight %}

To invoke it, pass in the selector that you want to write the copyright info
into, optionally including a name and a start date. For example:

{% highlight javascript %}
copyrightInfo('.copyright', 'Ian Mcdonald', '1986');
{% endhighlight %}

The invocation above would write:
<br><em class="copyright"></em>

<script>
function copyrightInfo(selector, name, startDate) {
    var elem, currentYear, date;
    elem = document.querySelector(selector);
    currentYear = new Date().getFullYear();
    date = currentYear;;
    if (!name) {
        name = "";
    }
    if (startDate) {
        date = startDate + "\u2014" + currentYear;
    }
    function writeCopywriteInfo() {
        elem.innerHTML = "&copy; " + date + " " + name;
    }
    document.addEventListener('DOMContentLoaded', writeCopywriteInfo);
}
copyrightInfo('.copyright', 'Ian Mcdonald', '1986');
</script>
