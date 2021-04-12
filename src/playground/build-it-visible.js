
class VisiblilityApp extends React.Component {

  constructor(props){
    super(props)
    this.handleHideShow = this.handleHideShow.bind(this)
    this.state = {
       check :true
    }
  }

  handleHideShow(){
    this.setState((prevState)=>{
      return{
        check:!prevState.check
      }
    })
  }
    
  render(){
   return(
    <div>
        <h1>Visibility Toggle</h1>   
        <button onClick={this.handleHideShow}>
           {this.state.check ? 'Hide Content' : 'Show Content'}
        </button>
        {this.state.check  && (
          <div>Test the Test</div>
        )}
    </div>
   )    
  }
}



ReactDOM.render(<VisiblilityApp />, document.getElementById('app'));






// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
