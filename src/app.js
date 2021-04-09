console.log('App.js is running now!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Hello Khairul</h1>
        <p>App Description will be here</p>
        <ol>
            <li>List item 1</li>
            <li>List item 2</li>
        </ol>
    </div>
);

var user ={
    name:'Khairul Islam',
    age:25,
    location:'Chapainaabgonj'
}

var templateTwp = (
    <div>
        <h1>Name : {user.name}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwp, appRoot);
