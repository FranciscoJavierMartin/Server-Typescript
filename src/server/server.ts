import express = require('express');

export default class Server{
  public app: any;


  constructor(private port:number){
    this.app=express();
  }

  start(callback?:Function){

    if(callback===undefined){
      callback=()=>{
        console.log(`\x1b[32mExpress server running on ${this.port}\x1b[0m`)
      }
    }

    this.app.listen(this.port,callback)
  }

  static init(port:number):Server{
    return new Server(port);
  }
}