
import React from 'react';


// We can do by many type of export 

//export default Option= (props) =>{

//export default  (props) =>{

const Option= (props) =>(
    <div>
        {props.optionText}
        <button onClick={(e)=>{
            props.deleteThis(props.optionText)
        }} >Remove</button>
    </div>
)

export default Option; // Export for show in debuging mood in React Extension



