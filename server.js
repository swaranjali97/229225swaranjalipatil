var express=require('express')
var app=express()

app.get('/',function(req,res){
    res.sendFile('public/index.html',{root:__dirname})
})

app.listen(4000,function(){
    console.log("server is running on port 4000")
})