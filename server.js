var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles = {
'article-one' :{
    title: 'Article One | Gautam Aggarwal',
    heading:'Article One',
    date: 'March 23,2017',
    content:`
    <p>
            
            This is my first article and i blah blah lbah, i dont lopw what to write.
    </p>
    <p>
            
            Blah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.e
    </p>
    <p>
            
            Blah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.eBlah Blh Bllah, This is my first articl.e
     </p>
     `
    },
'article-two': {
    title: 'Article Two | Gautam Aggarwal',
    heading:'Article Two',
    date: 'March 24,2017',
    content:`
    <p>
            
            This is my second article and i blah blah lbah, i dont lopw what to write.
    </p>
     `
},
'article-three': {
    title: 'Article Three | Gautam Aggarwal',
    heading:'Article Three',
    date: 'March 25,2017',
    content:`
    <p>
            
            This is my third article and i blah blah lbah, i dont lopw what to write.
    </p>
     `
}
};

    
    function createTemplate (data) {
        var title=data.title;
        var date=data.date;
        var heading=data.heading;
        var content=data.content;
        
            var htmlTemplate = `
            <html>
             <head>
                <title>
                  ${title}
                </title>
                 <meta name='viewport' content='width=device-width, initial-scale=1'/>
                 <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class='container'>
                  <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h3>
                ${heading}
                </h3>
                <div>
                 ${date}
                </div>
                <div>
                ${content}
                </div>
                </div>
                
            </body>
            </html>   
         `;
         return htmlTemplate;
    }



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/test-db', function(req,res){
    //make a select request 
    //return a response
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter + 1;
    res.send(counter.toString());
    
});

app.get('/:articleName', function(req,res){
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
