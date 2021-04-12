
class IndecisionApp extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleAction = this.handleAction.bind(this)
        this.state ={
            options:['One', 'two', 'three']
        }
    }

    handleDeleteOptions(){
      
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }

    handleAction(){
        const RandomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[RandomNumber]
      console.log(option)
    }

    handleAddOption(option){
    
       console.log(option)
        this.setState((prevSate)=>{
            return{
                
            }
        })
    }


 render(){
    const title = "Indecesion App";
    const subtitle = "App description from variable";
     return(
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action hasOptions={this.state.options.length>0}  handleAction={this.handleAction}/>
            <Options options={this.state.options}  handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption handleAddOption={this.handleAddOption} />
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
    
  
  
    render(){
        return (
            <div>
                <button onClick={this.props.handleAction} disabled={!this.props.hasOptions}>
                    What should I do
                    </button>
                
            </div>
        )
    }
}

class Options extends React.Component{



    render(){
        return (
           <div>
               <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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

    constructor(props){
        super(props);
        this.formSubmit= this.formSubmit.bind(this);
    }


    formSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            this.props.handleAddOption(option)
        }
    }


    render(){
        return (
            <form onSubmit={this.formSubmit}>
                <input type="text" name="option" />
                <button>Submit</button>
            </form>
        )
    }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))