'use strict';

console.log('App.js is running now!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello Khairul'
    ),
    React.createElement(
        'p',
        null,
        'App Description will be here'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'List item 1'
        ),
        React.createElement(
            'li',
            null,
            'List item 2'
        )
    )
);

var user = {
    name: 'Khairul Islam',
    age: 25,
    location: 'Chapainaabgonj'
};

var templateTwp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name : ',
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwp, appRoot);
