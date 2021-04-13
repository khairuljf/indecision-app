
class IndecisionApp extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleAction = this.handleAction.bind(this)
        this.state ={
            options:[]
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

        if(!option){
            return 'Enter Valid Value item';
        }else if(this.state.options.indexOf(option)>-1){
            return 'This option alreay exits';
        }

        this.setState((prevSate)=>{
            return{
                options:prevSate.options.concat([option])
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
        this.state ={
            error:undefined
        }
    }


    formSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
       const error =  this.props.handleAddOption(option)
       

       this.setState(()=>{
           return{
               error
            //error:error -- Same thing above
           }
       })

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