const path = require('path');
module.exports = {
    mode: 'development',
    //mode: 'production',
    entry: './script.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname)
    },
    watch: true
};
