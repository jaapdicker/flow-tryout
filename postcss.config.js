module.exports = {
    plugins: [
        require('postcss-cssnext')({ // eslint-disable-line
            browsers: ['last 2 versions', '> 5%'],
        }),
    ],
};