const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const galleryRoute = require('./router/gallery.router')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/gallery', galleryRoute);


app.listen(port, function (){
    console.log('Server is up on', port);
    
})