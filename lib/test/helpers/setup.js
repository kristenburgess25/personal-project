require('babel-register')({
  presets: ['react', 'es2015']
});

require('babel-polyfill');

global.document = require('jsdom').jsdom(`
  <head>
    <meta charset='UTF-8'>
    <title>Barrel Bash</title>
  </head>
  <body>
    <div id='root'></div>
  </body>
`);

global.window = document.defaultView;
global.navigator = window.navigator;
