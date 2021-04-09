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

var count = 0;
var addOne = function addOne() {
    count = count + 1;
    console.log(count);
};
var minusOne = function minusOne() {
    count = count - 1;
    console.log(count);
};
var resetCount = function resetCount() {
    count = 0;
    console.log(count);
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count : ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: resetCount },
        'Reset Count'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
