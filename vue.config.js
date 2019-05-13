const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
const config = {
    configureWebpack: config => {
        config.resolve.alias = Object.assign(config.resolve.alias, {
            '@': resolve('src'),
            'assets': resolve('src/assets'),
            'style': resolve('src/style'),
            'tools': resolve('src/tools'),
            'components': resolve('src/components'),
        });
    }
};

module.exports = config;
