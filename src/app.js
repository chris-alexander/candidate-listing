var React = require('react');
var ReactDOM = require('react-dom');
/* Import <details> <summary> shim*/
require('details-polyfill');

var MainView = require('./components/Main');

require('./main.scss');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <MainView/>,
    document.querySelector('#root')
  );
});
