var Raze = require('../lib/raze');

var raze = new Raze();

raze.process('index.html', function(js, css){
  console.log(js);
  console.log(css);
})
