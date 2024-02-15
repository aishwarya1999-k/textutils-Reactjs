import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked: " + test);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        //console.log("clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    //text = "new text"; //wrong way to change the state
    //setText("new text"); // correct way to change the state
    
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        
    </div>
  )
}
