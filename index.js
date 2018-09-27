
const yargs = require('yargs');
const Server = require('./config/http');
const config = require('./config/defaultConfig');
const argv = yargs
.usage('anydoor [options]')
.option('p',{
  alias:'port',
  describe:'端口号',
  default:config.port
})
.option('h',{
  alias:'hostname',
  describe:'host',
  default:config.hostname
})
.option('d',{
  alias:'root',
  describe:'root path',
  default:config.root
})
.version()
.alias('v','version')
.help()
.argv;
// console.log(argv);
const server = new Server(argv);
server.start();
