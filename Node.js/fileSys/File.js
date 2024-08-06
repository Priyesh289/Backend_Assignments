const path  = require("path");
const fs = require("fs");
const { log } = require("console");

const operaton = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

const readTheFile = (file) =>{
    fs.readFile(file,"utf-8",(err,data) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
}

const deleteFile = (path) =>{
    fs.unlink(path,(err) => {
        if(err){
            console.log(err);
        }
    })

}

const appendTheFile = (file) =>{
    fs.appendFile(file,"Appended",(err)=>{
        if(err){
            console.log(err)
        }
    })
}


switch(operaton){
    case "read":
        if(file){
            readTheFile(file);
        }
        break;
    
    case "delete":
        if(file){
            deleteFile(file)
        }
        break;

    case "append":
        if(file){
            appendTheFile(file)
        }
}