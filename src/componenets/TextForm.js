import React ,{ useState } from 'react'

export default function TextForm(props) {

    const HandleOnClick1 = () =>{
      console.log("Uppercase is clicked");
      let newText = Text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase" , "success");
    }
    const HandleOnClick2 = () =>{
        console.log("Lowercase is clicked");
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase" , "success");
      }
    const HandleClearClick = ()=>{
      let newText = ""; 
      setText(newText); 
      props.showAlert("Text is Cleared" , "success");
    }
    const HandleCopyClick = ()=>{
      var text  = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Coppied to ClipBoard" , "success");
    }
    const HandleExtraSpaces = () =>{
      var newText = Text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces removed" , "success");
    }
   const HandleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value)
   }
   
    const [Text, setText] = useState("Enter Text here");
    // to update the Text
    //text = "new text";//wrong way
    //setText("new text");// right way
    return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
    <h1>{props.Heading}</h1>
    <div className ="mb-3">
     <label htmlFor="myBox" className="form-label"></label>
     <textarea className="form-control"  value = {Text}  onChange={HandleOnChange}  style={{backgroundColor:props.mode === 'dark'?'#123b76':'white',color:props.mode === 'dark'?'white':'black'}}id="myBox" rows="8"></textarea>
    </div>
    <button disabled={Text.length===0} className='btn btn-primary' onClick={HandleOnClick1}>Covert to Uppercase</button>
    <button disabled={Text.length===0} className='btn btn-primary mx-3 my-3' onClick={HandleOnClick2}>Covert to Lowercase</button>
    <button disabled={Text.length===0} className='btn btn-primary mx-3 my-3' onClick={HandleClearClick}>Clear Text</button>
    <button disabled={Text.length===0} className='btn btn-primary mx-3 my-3' onClick={HandleCopyClick}>Copy Text</button>
    <button disabled={Text.length===0} className='btn btn-primary mx-3 my-3' onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='conatiner my-3' style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} Words And {Text.length}  Characters</p>
        <p>{0.08 * Text.split(" ").filter((element)=>{return element.length!==0}).length} seconds</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Nothing to Preview !"}</p>
    </div>
   
    </>
  )
}
