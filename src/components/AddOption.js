import React from 'react';

export default class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.formSubmit= this.formSubmit.bind(this);
        this.state ={
            error:undefined
        }
    }

    formSubmit(e){
        console.log(khairul)
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