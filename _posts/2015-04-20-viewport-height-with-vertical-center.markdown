---
layout: post
title:  "Viewport height with vertical center"
date:   2015-04-20
---
Quite often I find myself needing to responsively size a section to be 100% of the
viewport height. This is really easy with CSS:

{% highlight css %}
.full-height {
    height: 100vh;
}
{% endhighlight %}

Simple.

This works great in most situations, but things can get ugly in older
mobile browsers. While usage of mobile browsers that don't fully support viewport units
is quite low at the time of this writing, it is by no means non-existent. Here
is an easy vanilla JavaScript solution for creating a full height, full width
element (with some optional features we'll talk about afterwards):

{% highlight javascript %}
'use strict';

// Viewport height with optional vertical center
function viewportHeight(selector, divideBy, alignElem) {

    var fH, vH, dB, vA;
    
    // Get the height of the viewport
    function gH() {
        fH = document.querySelector(selector);
        vH = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight;
         
        // Divide the viewport if specified
        if (divideBy) {
            dB = vH / divideBy;
            vH = dB;
        }

        // Write the styles for the selected element
        function writeHeight() {
            fH.style.height   = vH + 'px';
            fH.style.position = 'absolute';
            fH.style.top      = '0';
            fH.style.left     = '0';
            fH.style.width    = '100%';
        }

        if (fH !== null) {
            writeHeight();
        
            // Vertically center inner element if specified
            if (alignElem) {
                vA = document.querySelector(alignElem);
                vA.style.position        = 'relative';
                vA.style.top             = '50%';
                vA.style.webkitTransform = 'translateY(-50%)';
                vA.style.mozTransform    = 'translateY(-50%)';
                vA.style.msTransform     = 'translateY(-50%)';
                vA.style.oTransform      = 'translateY(-50%)';
                vA.style.transform       = 'translateY(-50%)';
            }
        }
    };

    // Set height after page load and on resize
    document.addEventListener('DOMContentLoaded', gH);
    window.addEventListener('resize', gH);
}

// Initialize fullHeight
viewportHeight('.full-height', 1, '.vertical-center');
{% endhighlight %}

The first parameter requires you to pass in your selector when you initialize
the function. The _optional_ second and third parameters allow you to divide the viewport (creating
a half or quarter height element for example), and pass in a nested element to be
vertical centered within the section. If you don't declare an argument for
<code>divideBy</code>, it defaults to full height (1). Note that if
you want to pass an argument to <code>alignElem</code> you need to declare a number first.

In the snippet above, I set an element with a class of <code>full-height</code> to be 100% of the
viewport height (divided by 1), with a nested element that has a class of
<code>vertical-center</code> to be vertically aligned relative to <code>.full-height</code>.

This script is set up to define a full height header that appears at the top of
a page. That can be changed by adjusting the style values within <code>writeHeight()</code>.
