var Vulcanize = require('vulcanize');
var htmlparser = require("htmlparser2");

function Raze(opts){
  console.log('In constructor');


}

Raze.prototype.process = function(rootHTML, cb){
  var js = [], css = [];
  new Vulcanize({}).process(rootHTML, function(err, inlineHTML){
    var parser = new htmlparser.Parser({
      onopentag: function(name, attribs){
        if(name === "script"){
          js.push(attribs.src);
        }
        if(name === "link" && attribs.rel === "stylesheet"){
          css.push(attribs.href);
        }
      }
    });
    parser.write(inlineHTML);
    parser.end();

    cb(js, css);

  })
}


module.exports  = Raze;
