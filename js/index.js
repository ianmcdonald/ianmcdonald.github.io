(function() {

  var inverter = document.querySelector('.inverter')
  var magicks = document.querySelectorAll('.magick svg')
  var hours = new Date().getHours()

  if (hours && (hours > 12))
    document.body.className = 'invert';
  
  function magick(x) {
    for (var i = 0; i < magicks.length; i++) {
      magicks[i].id = ''
    }
    magicks[x].id = 'opaque';
    x < magicks.length - 1 ? x += 1 : x = 0;
    return setTimeout(function() { magick(x) }, 1200)
  }
  
  inverter.addEventListener('click', function() {
    document.body.className !== 'invert' ?
      document.body.className = 'invert' :
      document.body.className = ''
  });
  
  magick(0)
  
})();
