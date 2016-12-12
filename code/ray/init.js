// console.log(process.versions);
// console.log("process.title " + process.title);
// var process.title = myApp;
var prompt = require('prompt');
var fs = require('fs');
var pathconf = {
    src : 'src/**/',
    img : 'src/**/*.{png,jpg,gif,svg}',
    dest: 'dev/'
};
var attrib = ['date', 'projectname'];
// Start the prompt
prompt.start();
// Get two properties from the user: username and email
prompt.get(attrib, function(err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  date: ' + result.date);
    console.log('  projectname: ' + result.projectname);

    var output = './config.json'

    // fs.writeFile("./config.json", JSON.stringify([result,pathconf], null, 2), function(err) {        
    fs.writeFile(output, JSON.stringify(result, null, 2), function(err) {        
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved in: " + output +"!");
    });
    /*
    fs.appendFile(output, JSON.stringify(pathconf, null, 2), function (err) {

    });*/

  // ecriture de config base
  // fs.writeFile("./config.json", JSON.stringify(pathconf, null, 2), function (err) {
  // fs.appendFile("./config.json", JSON.stringify(pathconf, null, 2), function (err) {
  //   if (err) {
  //     return console.log('error base conf')
  //   }
  //   console.log('ok base conf')
  // });
});
