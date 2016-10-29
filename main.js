var ___ = (function() {

  function shape() {
    document.querySelector('svg')
      .innerHTML = '<polygon style="stroke-width:0"/>'
  }

  function size() {
    var svgs = [].slice.apply(document.querySelectorAll('svg'));
    svgs.map(function(svg) {
      svg.setAttribute('width', innerWidth);
      svg.setAttribute('height', innerHeight);
      svg.style.position = 'absolute';      
    });
  }

  shape();
  size();  
  
  var svg  = document.querySelector('svg'),
      poly = document.querySelector('polygon');
  
  function draw() {   
    var _a = Math.random() * (innerWidth + (innerWidth * 2)),
        _b = Math.random() * innerHeight,
        _c = Math.random() * (innerWidth + (innerWidth * 1.5)),
        _d = Math.random() * innerHeight,
        _e = Math.random() * (innerWidth + (innerWidth * 2.25)),
        _f = Math.random() * innerHeight * 1.25,
        _g = Math.random() * (innerWidth + (innerWidth * 1.05)),
        _h = Math.random() * innerHeight * 0.75;
        _c1 = Math.floor(Math.random() * 255),
        _c2 = Math.floor(Math.random() * 255),
        _c3 = Math.floor(Math.random() * 255);
            
    poly.setAttribute(
      'points',
      _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ',' + _g + ',' + _h
    )
    poly.setAttribute(
      'fill',
      "rgb(" + _c3 + "," + _c1 + "," + _c2 + ")");
    svg.style.background = "rgb(" + _c1 + "," + _c2 + "," + _c3 + ")";

    setTimeout(draw, 1000);
    
  }

  draw();  

})();
