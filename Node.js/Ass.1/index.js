// index.js

//  import the crypto module

const crypto = require("crypto");

//  get a commands using process.argv

const args = process.argv.slice(2);
const operation = args[0];
const number = args.slice(1).map(Number);

// complete the  function

const randomNumber = (length) => {
    const number = crypto.randomBytes(length, (err,buff) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(buff.toString("binary"))
        }
    })
}

switch (operation) {
    case "add":
        console.log(number.reduce((acc,curr) => acc+curr,0 ));
        break;
    
    case "sub":
        console.log(number.reduce((acc,curr) => acc-curr,0 ));
        break;
        
    case "random":
        randomNumber(number[0])
        break;    
    default:
      console.log("Invalid operation");
  }
  