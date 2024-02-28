import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = ()=>{
      
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase" , "success");
    }

    const handleLpClick = ()=>{
      
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase" , "success");

    }

    const handleClearText = ()=>{
      
      let newText='';
      setText(newText);
      props.showAlert("text cleared" , "success");

    }

    const handleCopy =()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copy to clipboard" , "success");


    }

    const handleExtraSpaces= ()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces" , "success");

    }

    const handleOnChange = ( event)=>{
      setText(event.target.value);
    }



  return (
          <div>
            
          <div className="container my-5 " style={{color:props.mode === 'dark'? 'white' : 'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3" >
        <textarea className="form-control" placeholder='Enter text here' value={text} style={{backgroundColor:props.mode === 'dark'? 'gray' : 'white' , color:props.mode === 'dark'? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="6"></textarea>
      </div>
         
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLpClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>

          <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text </button>
     
             

          </div>
          <div className="container my-4" style={{color:props.mode === 'dark'? 'white' : 'black'}}>
            <h1>Your text Summary </h1>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter something in the textbox to preview here it"}</p>

          </div>

          </div>
  )
}
