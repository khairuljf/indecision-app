'use strict';

console.log('App.js is running now!');

// JSX - JavaScript XML

var app = {
    title: 'Indecisoin App',
    details: 'Chapainaabgonj'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.details
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

function userLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}

var templateTwp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name : ',
        user.name ? user.name : 'Anonomous'
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    userLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwp, appRoot);
