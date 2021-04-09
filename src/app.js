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


let count = 0;
const addOne = ()=>{
    count = count+1
    console.log(count)
}
const minusOne= ()=>{
    count = count-1
    console.log(count)
}
const resetCount = () =>{
    count = 0;
    console.log(count)
}

const templateTwo =(
    <div>
        <h1>Count : {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetCount}>Reset Count</button>
    </div>
)



const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
