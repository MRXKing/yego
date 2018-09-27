const http = require('http');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
// const config = require('./defaultConfig.js');
const route = require('./route');
const openUrl = require('./openurl');

class Server{
  constructor(config){
    this.conf = Object.assign({},this.conf,config)
  }
  start(){
    const server = http.createServer((req,res) => {
         const url = req.url
         const filePath = path.join(this.conf.root,url);
         route(req,res,filePath,this.conf);
    }).listen(this.conf.port,this.conf.hostname,() => {
          const addr = `http://${this.conf.hostname}:${this.conf.port}`;
          console.log(`Server is run at ${chalk.green(addr)}`);
          openUrl(addr)
    })
  }
}

module.exports = Server
// module.exports = function(){
//   http.createServer((req,res) => {
//        const url = req.url
//        const filePath = path.join(config.root,url);
//        route(req,res,filePath);
//   }).listen(config.port,config.hostname,() => {
//         console.log(`Server is run at ${chalk.green(`${config.hostname}:${config.port}`)}`);
//   })
// }
