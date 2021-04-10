console.log('App.js is running now!');

// JSX - JavaScript XML
const app ={
    title:'Indecisoin App!!',
    details:'App Details',
    options:[]
}

const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option)
        e.target.elements.option.value = '';
        renderApp()
    }
}

const removeOptions = ()=>{
    app.options=[];
    renderApp()
}

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    console.log(randomNum, option)
}
    

const appRoot = document.getElementById('app');

const renderApp = ()=>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.details &&  <p>{app.details}</p>}
            <p>{(app.options && app.options.length > 0)  ? "Option here" : "No Option"}</p>
            <button disabled={ app.options.length == 0 } onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
               {
                   app.options.map((option)=> <li key={option} id={option}>{option}</li> )
               }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"  />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp()