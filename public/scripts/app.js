'use strict';

console.log('App.js is running now!');

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  { id: 'heading' },
  'Indecision App!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
