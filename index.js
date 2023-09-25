import http from "http";
import gfname from "./features.js";

console.log(gfname);

const server = http.createServer((req,res)=>{
    if(req.url==="/about"){
        res.end("About page")
    } 
    else if(req.url==="/"){
        res.end("Home Page")
    } 
    else if(req.url==="/contact"){
        res.end("Contact page")
    } 
    else{
        res.end("invalid");
    }
    

});

server.listen(5000,()=>{
    console.log("server is working");


})