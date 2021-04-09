'use strict';

console.log('App.js is running now!');

// JSX - JavaScript XML
var app = {
    title: 'Indecisoin App!',
    details: 'App Details',
    options: []
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.details && React.createElement(
        'p',
        null,
        app.details
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? "Option here" : "No Option"
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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name : ',
        user.name ? user.name : 'Anonomous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    userLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
