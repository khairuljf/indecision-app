console.log("Helllo world");

//var template = <p>This is JSX from app.js</p>;
var template = /*#__PURE__*/React.createElement("h1", null, "Welcome to React ");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot)