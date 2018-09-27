const path = require('path');


const mimeTypes = {
    'css':'css',
    'html':'html',
    'js':'js',
    'zip':'zip',
    'json':'json',
    'text':'text',
    'rar':'rar',
    '':'wenjian'
}

module.exports = (value) => {
    let ext = path.extname(value).split('.').pop().toLowerCase();
    if (!mimeTypes[ext]) {
      ext = 'text'
    }
    return mimeTypes[ext]
}
