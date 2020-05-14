'use strict';

const Readline = require('readline');
const rl=Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const matcher=require('./matcher');
rl.setPrompt('> ');
rl.prompt();
rl.on('line',reply=>{
  matcher(reply,data=>{
    switch(data.intent){
      case 'Hello':
      console.log("Hello Human!");
      rl.prompt();
      break;
      case 'Exit':
      console.log("Have a great day! Bye!");
      process.exit(0);
      break;
      default:
      console.log("I don't understand ");
      rl.prompt();
    }
  });
});
