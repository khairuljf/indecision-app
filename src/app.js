console.log('App.js is running now!');

// JSX - JavaScript XML
const app ={
    title:'Indecisoin App!',
    details:'App Details',
    options:[]
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.details &&  <p>{app.details}</p>}
        <p>{(app.options && app.options.length > 0)  ? "Option here" : "No Option"}</p>
        <ol>
            <li>List item 1</li>
            <li>List item 2</li>
        </ol>
    </div>
);

const user ={
    name:'Khairul Islam',
    age:25,
    location:'Chapainaabgonj'
}

function userLocation(location){
    if(location){
        return <p>Location : {location}</p>;
    }
}


const templateTwo = ( 
    <div>
        <h1>Name : {user.name ? user.name : 'Anonomous'}</h1>
        {(user.age && user.age>=18 ) && <p>Age : {user.age}</p>}
        {userLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
