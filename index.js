var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use("/public",express.static(__dirname + "/public"));



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//main page
app.get('/', function(req, res){
    console.log('hello world');
    res.render('main')
});

//get api by gyul year
app.get('/johe_g', function(req, res){
    
    var johe_gyul_year = req.query.gyul_year;
    var orgin_gyul_year = req.query.gyul_year;
    console.log(johe_gyul_year);

    if(johe_gyul_year != 2018 &&
        johe_gyul_year != 2019 &&
        johe_gyul_year != 2037 &&
        johe_gyul_year != 2043){
        
        johe_gyul_year = 9999;

    }

  
    res.render('johe', {
        johe_year: johe_gyul_year ,
        orgin_gyul_year: orgin_gyul_year
    })
});

var server = app.listen(1337,function(){
    console.log('express success')
});