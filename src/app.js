
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
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        )
    }
}

class Action extends React.Component{
    
    handlePick(){
        alert('handlePick')
    }
  


    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do</button>
                
            </div>
        )
    }
}

class Options extends React.Component{

    constructor (props){
        super(props)
        this.handleAllRemove = this.handleAllRemove.bind(this);
    }

    handleAllRemove(){
        console.log(this.props.options)
    }

    render(){
        return (
           <div>
               <button onClick={this.handleAllRemove}>Remove All</button>
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

    submitForm(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option)
        }
    }


    render(){
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" name="option" />
                <button>Submit</button>
            </form>
        )
    }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))