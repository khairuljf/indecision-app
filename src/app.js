
class IndecisionApp extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleAction = this.handleAction.bind(this)
        this.state ={
            options:[]
        }
    }

    componentDidMount(){

        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if(options){
                this.setState(()=>({ options }))
            }

        }catch(e){
            // Do Nothing at all
        }
  
    }

    componentDidUpdate(prevProps, prevState){
        if( prevState.options.length !== this.state.options.length ){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    componentWIllUnmount(){
        console.log("Data Saving")
    }
    handleDeleteOptions(){ 
        this.setState( ()=>({options:[]}) )
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=> optionToRemove !== option )
        }))
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
            <Options 
                options={this.state.options}  
                handleDeleteOptions={this.handleDeleteOptions} 
                deleteItem={this.handleDeleteOption}/>

            <AddOption handleAddOption={this.handleAddOption} />
        </div>
     )
 }


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
               {props.options.length==0 && <p>Please add an option to get started!</p>}
               {
                   props.options.map((option)=>(
                    <Option 
                    key={option}
                    optionText={option}
                    deleteThis={props.deleteItem} />
                   ))
               }
               
           </div>
    )
}

const Option= (props) =>{
    return(
        <div>
            {props.optionText}
            <button onClick={(e)=>{
                props.deleteThis(props.optionText)
            }} >Remove</button>
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

       if(!error){
        e.target.elements.option.value = '';
       }

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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))