import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    
    const handleUpCase=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper case","success");
    }

    const handleLwCase=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower case","success");
    }

    const clearText=()=>{
        setText("");
    }

    const copyText=()=>{
        let newText = document.getElementById("textbox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard successfully","success");
    }

    // const handleTcCase=()=>{
    //     let arr=text.split("");
    //     arr.forEach(element => {
    //         element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    //     });
    //     let arr=arr.join("");

    //     let newText = arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase();
    //     setText(newText);
    // }

    const handleOnChange=(event)=>{
        setText(event.target.value);
        
    }



  return (
    <div className="container">
        <div className="my-3">
            <h3>Enter Text to Manipulate :</h3>
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} onChange={handleOnChange} id="textbox" rows="10" value={text}></textarea>
        </div>
        <div className="my-2">
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>To Upper Case</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLwCase}>To Lower Case</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
        </div>
        {/* Displaying Words & Character count */}
        <p>{text.split(" ").filter((x)=>{return x.length!==0;}).length} words, {text.length} characters</p>

        <h3>Preview</h3>
        <p>{text.length===0?'Write something in the box to preview here':text}</p>
    </div>
  )
}