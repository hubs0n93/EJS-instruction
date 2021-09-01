const express = require('express');
const app = express();

   // ***** -- How works with JS short intro -- ****

// --> https://github.com/mde/ejs/wiki/Using-EJS-with-Express
// 1) npm install EJS
// 2) in __dirname create catalog "views", inside views ejs file
  // file.ejs looks close to html, difference is TAG using -> see: "view/index.ejs"
// ** 3) app.set:
app.set('view engine', 'ejs');

// ** 4) get and render variable to ejs template:
app.get("/", function(req, res){
  var my_number = Math.floor(Math.random() * 10);
  res.render('index', {number: my_number});// (file_name_noExtension, {key: value}):
});


app.listen(3000, function(){
  console.log("Server started at 3000");
});
