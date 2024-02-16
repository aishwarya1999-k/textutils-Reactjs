import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked: " + test);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","success");
    }
    const handleOnChange = (event) => {
        //console.log("clicked")
        setText(event.target.value)
    }
    const handleCopy = () => {
        //console.log("i am copy")
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const [text, setText] = useState('');
    //text = "new text"; //wrong way to change the state
    //setText("new text"); // correct way to change the state
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor:props.mode==='dark'? '#13466e':'white',color:props.mode==='dark'? 'white':'#042743'}} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} charaters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
    </>
  )
}
