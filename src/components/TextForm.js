import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] =useState('');

    const handleUpClick =() =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");              
    }
    const handleLoClick =() =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClClick =() =>{
        let newText='';
        setText(newText);
        props.showAlert("Cleared Text","success");
    }

    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    
    const handleCopy = () =>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied Text","success");
    }



  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 my-2>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    {/* filter is used for removing space count in array  */}
    <p>{(text.split(" ")).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
    
  )
}
