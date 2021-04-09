'use strict';

console.log('App.js is running now!');

// JSX - JavaScript XML
var app = {
    title: 'Indecisoin App!',
    details: 'App Details',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeOptions = function removeOptions() {
    console.log("Remove Button working");
    app.options = [];
    renderApp();
    console.log("Option data removed");
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {

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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderApp();
