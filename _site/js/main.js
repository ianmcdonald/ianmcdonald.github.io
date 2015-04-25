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
            fH.style.minHeight = vH + 'px';
            fH.style.width     = '100%';
            fH.style.position  = 'absolute';
            fH.style.display   = 'block';
            fH.style.top       = '0';
            fH.style.left      = '0';
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


// Push element down by viewport height
function pushDown(selector, divideBy) {
    var elem, vH, dB;
    // Get the height of the viewport
    function gH() {
        elem = document.querySelector(selector);
        vH = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight;
        // Divide the viewport if specified
        if (divideBy) {
            dB = vH / divideBy;
            vH = dB;
        }
        // Write the styles for the selected element
        function writeTop() {
            elem.style.top = vH + 'px';
            elem.style.position = 'relative';
            elem.style.minHeight = vH + 'px';
        }
        if (elem !== null) {
            writeTop();
        }
            
    };
    // Set height after page load and on resize
    document.addEventListener('DOMContentLoaded', gH);
    window.addEventListener('resize', gH);
}


// Simple dynamic copyright info
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


// Initializations
viewportHeight('.full-height', 1, '.vertical-center');
pushDown('.push-full', 1);

