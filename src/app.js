var React = require('react');
var ReactDOM = require('react-dom');
// var MainView = require('./views/Main');

require('./main.scss');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    React.createElement('MainView'),
    document.querySelector('#root')
  );
});
