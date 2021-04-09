console.log('App.js is running now!');

// JSX - JavaScript XML

var app ={
    title:'Indecisoin App',
    details:'Chapainaabgonj'
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.details}</p>
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

function userLocation(location){
    if(location){
        return <p>Location : {location}</p>;
    }
}


var templateTwp = (
    <div>
        <h1>Name : {user.name ? user.name : 'Anonomous'}</h1>
        <p>Age : {user.age}</p>
        {userLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwp, appRoot);
