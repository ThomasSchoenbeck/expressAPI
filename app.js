var express = require('express');
var swagger = require('swagger-spec-express');
var packageJson = require('./package.json');
var path = require('path');
var fs = require('fs');

var app = express();
var options = {
    title: packageJson.title,
    version: packageJson.version
};
swagger.initialise(app, options);

//app.get('/swagger.json', function (err, res) {
//    res.status(200).json(swagger.json());
//}).describe({
//    responses: {
//        200: {
//            description: "Returns the swagger.json document"
//        }
//    }
//});

var swaggerFileURL = '/oax/#?url=/swagger.json';

app.get('/swagger.json', function (err, res) {
  fs.readFile('./swagger.json', "utf8", function(err, data){
      if(err) throw err;

      var resultArray = //do operation on data that generates say resultArray;

      res.send(data);
  });
});

app.use('/oax/#?url=\/swagger.json', express.static(path.join(__dirname, 'oax')));


//app.use(express.static('/oax'));

swagger.compile();
var port = 3000;
app.listen(port, appListening);
function appListening() {
    console.info(packageJson.name + ' is listening on port ' + port);
}