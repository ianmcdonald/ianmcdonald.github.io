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
  };

  var req;

  function draw() {

    cancelAnimationFrame(req);
    
    var _a = Math.random() * (innerWidth + (innerWidth * 2)),
        _b = Math.random() * innerHeight,
        _c = Math.random() * (innerWidth + (innerWidth * 1.5)),
        _d = Math.random() * innerHeight,
        _e = Math.random() * (innerWidth + (innerWidth * 2.25)),
        _f = Math.random() * innerHeight * 1.25,
        _g = Math.random() * (innerWidth + (innerWidth * 1.05)),
        _h = Math.random() * innerHeight * 0.75,
        _i = Math.random() * innerHeight * 1.25,
        _j = Math.random() * (innerWidth + (innerWidth * 1.05)),
        _k = Math.random() * innerHeight * 0.75;

    var _c1 = Math.floor(Math.random() * 255),
        _c2 = Math.floor(Math.random() * 255),
        _c3 = Math.floor(Math.random() * 255);

    document.querySelector('polygon').setAttribute('points', _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ',' + _g + ',' + _h+ ',' + _i+ ',' + _j+ ',' + _k)
    document.querySelector('polygon').setAttribute('fill', "rgb(" + _c3 + "," + _c1 + "," + _c2 + ")");
    document.querySelector('svg').style.background = "rgb(" + _c1 + "," + _c2 + "," + _c3 + ")";

    function animate() {
      var shapes = [].slice.apply(document.querySelectorAll('polygon')),
          init   = 0,
          time   = 20,
          poly   = document.querySelector('polygon'),
          svg    = document.querySelector('svg');
      function animateSvg() {
        if (init % time === 0) {
          
          function changeVal(val) {
            switch(Math.floor(Math.random() * 8) + 1) {
            case 1:
              val += 0.5;
              break;
            case 2:
              val -= 0.5;
              break;
            case 3:
              val += 1;
              break;
            case 4:
              val -= 1;
              break;
            case 5:
              val += 10;
              break;
            case 6:
              val -= 10;
              break;
            case 7:
              val += 25;
              break;
            case 8:
              val -= 25;
              break;
            default:
              val = val;
            }       
            return val;
          }
          
          
          _a = changeVal(_a);
          _b = changeVal(_b);
          _c = changeVal(_c);
          _d = changeVal(_d);
          _e = changeVal(_e);
          _f = changeVal(_f);
          _g = changeVal(_g);
          _h = changeVal(_h);

          
          // _bg1 = Math.round(changeVal(_bg1));
          // _bg2 = Math.round(changeVal(_bg2));
          // _bg3 = Math.round(changeVal(_bg3));
          // _fg1 = Math.round(changeVal(_fg1));
          // _fg2 = Math.round(changeVal(_fg2));
          // _fg3 = Math.round(changeVal(_fg3));

          
          shapes.map(function(shape) {
            shape.setAttribute('points', _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ',' + _g + ',' + _h)
            shape.setAttribute('fill', "rgb(" + _c3 + "," + _c1 + "," + _c2 + ")");
          });
          
          svg.style.background = "rgb(" + _c1 + "," + _c2 + "," + _c3 + ")";
          
        }
        init++
        req = requestAnimationFrame(animateSvg);
      }
      animateSvg();
    };

    //  animate();
  }

  shape();
  size();

  draw();
  window.addEventListener('resize', draw);
  document.body.addEventListener('click', draw);

})();
