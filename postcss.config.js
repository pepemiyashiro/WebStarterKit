module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({
        browsers: ['last 6 versions']
    }),
    require('postcss-nested'),
    require('postcss-reporter'),
    require('postcss-remove-root'),
    require('postcss-responsive-type'),
    require('css-mqpacker')({
        sort: true
    }),
    require('cssnano')({
        autoprefixer: false,
        safe: true
    })
  ]
}
