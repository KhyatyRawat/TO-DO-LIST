const express = require("express");
const bodyParser=require("body-parser");

const app=express();
let items =["buy food","cook food","eat food"];
let workitems=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
var today = new Date();

var options ={
    weekday:"long",
    day:"numeric",
    month:"long"
};

var day=today.toLocaleDateString("en-US",options);




res.render("list",{ ListTitle:day , newlistitems:items});       

});
app.post("/",function(req,res){
    var item = req.body.newitem;
    if(req.body.List=="Work"){
        workitems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
  
  
});
app.get("/work",function(req,res){
   res.render("List",{ListTitle:"Work List",newlistitems:workitems}); 
});


app.get("/about",function(req,res){
    res.render("about");
});
app.post("/work",function(req,res){
    let item=req.body.newitem;
    workitems.push(item);
    res.redirect("/work");
})
app.listen(3000,function(){
    console.log("server started on port 3000");
});
//sample comment for git