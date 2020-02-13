import * as sapper from '@sapper/app';
import '../node_modules/cssgui/dist/css/cssgui-reboot.css';
import '../node_modules/cssgui/dist/css/cssgui-grid.css';
import '../node_modules/cssgui/dist/css/cssgui-utilities.css';
import '../node_modules/highlight.js/styles/solarized-dark.css';




sapper.start({
  target: document.querySelector('#sapper')
});
