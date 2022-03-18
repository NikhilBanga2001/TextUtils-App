import React,{useState} from "react";
export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick = () =>{
        let upperText = text.toUpperCase();
        setText(upperText)
    }
    const handleLoClick = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText)
    }
    const handleClearClick = ()=>{
        let clear = '';
        setText(clear)
    }
    const handleExtraSpaces = ()=>{
        let spaces = text.split(/[ ]+/);
        setText(spaces.join(" "))
    }
    const handleCopy = ()=>{
        var copy = document.getElementById("textbox");
        copy.select();
        navigator.clipboard.writeText(copy.value);
        // setText(clear)
    }
    // const handleDarkMode = () =>{

    // }
    const handleOnChange = (Event) =>{
        setText(Event.target.value)
    }

  
    return (
    <>
      <div className="container " style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.textarea}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange = {handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'#1f3c48':'white' ,color: props.mode === 'light'?'black':'white'}}
             
            id="textbox"
            rows="8"
            // document.body.style.backgroundColor = "grey";
            // toggleMode
            // style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Change to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Change to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
      </div>
      <div className={`container my-3 `} style={{color: props.mode === 'light'?'black':'white'}}>
          <h3 >Your Text Summary</h3>
          <p> {text.split(" ").length-1} words and {text.length} characters</p>
          <p>Time required to read is {text.split(" ").length * 0.008} minutes</p>
          <h3>Preview</h3>
          <p>{text}</p>
      </div>
    </>
  );
}