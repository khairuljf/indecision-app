
class IndecisionApp extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleAction = this.handleAction.bind(this)
        this.state ={
            options:this.props.options
        }
    }

    handleDeleteOptions(){ 
        this.setState( ()=>({options:[]}) )
    }

    handleAction(){
        const RandomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[RandomNumber]
      console.log(option)
    }

    handleAddOption(option){

        if(!option){
            return 'Enter Valid Value item';
        }else if(this.state.options.indexOf(option)>-1){
            return 'This option alreay exits';
        }

        this.setState((prevSate)=>({options:prevSate.options.concat([option])}))

    }


 render(){
    const title = "Indecesion App";
    const subtitle = "App description from variable";
     return(
        <div>
            <Header  subtitle={subtitle} />
            <Action hasOptions={this.state.options.length>0}  handleAction={this.handleAction}/>
            <Options options={this.state.options}  handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption handleAddOption={this.handleAddOption} />
        </div>
     )
 }
}

IndecisionApp.defaultProps ={
    options:[]
}


const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

Header.defaultProps ={
    title: 'Hello',
}

const Action = (props) =>{
    return (
        <div>
            <button onClick={props.handleAction} disabled={!props.hasOptions}>
                What should I do
                </button>
            
        </div>
    )
}



const Options = (props) =>{
    return(
        <div>
               <button onClick={props.handleDeleteOptions}>Remove All</button>
               {
                   props.options.map((option)=><Option key={option} optionText={option} />)
               }
               
           </div>
    )
}


const Option= (props) =>{
    return(
        <div>
            {props.optionText}
        </div>
    )
}


class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.formSubmit= this.formSubmit.bind(this);
        this.state ={
            error:undefined
        }
    }


    formSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
       const error =  this.props.handleAddOption(option)
       this.setState( ()=>({error}) )
    }


    render(){
        return (
          <div>
              {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.formSubmit}>
                <input type="text" name="option" />
                <button>Submit</button>
            </form>
          </div>
        )
    }
}




ReactDOM.render(<IndecisionApp options={['Hlello', 'World']} />, document.getElementById('app'))