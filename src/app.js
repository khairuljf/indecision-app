
class IndecisionApp extends React.Component{
 render(){

    const title = "Indecesion App";
    const subtitle = "App description from variable";
    const options = ['One', 'two', 'three'];

     return(
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options} />
            <AddOption />
        </div>
     )
 }
}

class Header extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do</button>
                <button>Remove All</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){

        console.log(this.props.options)

        return (
           <div>
              {(this.props.options && this.props.options.length>0) ? <p>{this.props.options.length} Option Here</p>: <p>No Option</p>}
               {
                   this.props.options.map((option)=><Option key={option} optionText={option} />)
               }
               
           </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <form>
                <input type="text" name="option" />
                <button>Submit</button>
            </form>
        )
    }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))