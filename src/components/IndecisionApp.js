import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component{

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
