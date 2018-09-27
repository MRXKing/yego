const promisify = require('util').promisify;
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const tplPath = path.join(__dirname,'../views/dir.tpl');
const source =fs.readFileSync(tplPath);
const template = handlebars.compile(source.toString());
const mime = require('./mime');
const mime_icon  = require('./mime_icon');
const compress = require('./compress');
const range = require('./range');
const isFresh = require('./cache');
module.exports = async function(req,res,filePath,config){
      try {
              const stats = await stat(filePath);
              if (stats.isFile()) {
                  const contentType = mime(filePath);
                  res.setHeader('Content-Type',contentType);
                  let rs;
                  const {code,start,end} = range(stats.size,req,res);
                  if (isFresh(stats,req,res)) {
                    res.statusCode = 304;
                    res.end();
                    return;
                  }
                  if (code == 200) {
                    res.statusCode = code;
                     rs = fs.createReadStream(filePath);
                  }else {
                    res.statusCode = code;
                     rs = fs.createReadStream(filePath,{start,end})
                  }

                 if (filePath.match(config.compress)) {
                    rs = compress(rs,req,res)
                 }
                 rs.pipe(res)
              }
              else if (stats.isDirectory()) {
                  res.setHeader('Content-Type','text/html;charset=utf8');
                  res.statusCode = 200;
                  const files = await readdir(filePath);
                  const extarr =new Array();
                  for (let [index,value] of files.entries()) {
                      extarr[index] = mime_icon(value);
                  }
                  const dir =path.relative(config.root,filePath);
                  const data = {
                     files:files.map((item,index) => {
                         return {
                            file:item,
                            icon:extarr[index] || 'wenjian'
                         }
                     }),
                     title:path.basename(filePath),
                     dir:dir?`/${dir}`:'',
                     config:{hostname:config.hostname,
                     port:config.port}
                  }
                  res.end(template(data));
              }
      } catch (e) {
        console.log(e);
        res.setHeader('Content-Type','text/plain;charset=utf8');
            res.statusCode = 404;
            res.end(`${filePath} is not a directory or file ${e}`);
      }
}
