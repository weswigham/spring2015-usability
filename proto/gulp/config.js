module.exports = {
  paths: {
    client_root: './app/',
    js_root: './app/js/',
    js_files: './app/**/*.@(js|jsx)',
    js_entrypoint: './js/main.js',
    other_files: './app/**/*.!(js|jsx|css|less)',
    less_files:'./app/**/*.less',
    build_dir: './dist/',
    test_files: './test/**/*-test.js',
    normalize_css: './node_modules/normalize-css/normalize.css'
  }
};
