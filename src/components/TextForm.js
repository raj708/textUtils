import React, {useState} from 'react'


export default function TextForm(props) {
   const [text, setText] = useState('');

   const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
   }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
   }
   const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared!","success");
   }
   const copyText = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copy to clipboard!","success");
   }
   const handleCapClick=()=>{
      let arr=text.split(" ");
      let n=arr.length;
      let temp="";
      while(n!==0){
        temp=arr[n-1].charAt(0).toUpperCase()+arr[n-1].substring(1).toLowerCase()+" "+temp;
        n--;
      }
      setText(temp)
      props.showAlert("Converted to Capitalized!","success");
   }
   const handleReverseCharacterClick=()=>{
      let revStr="";
      for(let i=0;i<text.length;i++){
        revStr+=text.charAt(text.length-1-i);
      }
      setText(revStr);
      props.showAlert("Character is reversed!","success");
   }
   const handleReverseWordClick=()=>{
     let revStr=text.split(" ").reverse().join(" ");
     setText(revStr);
     props.showAlert("Word is reversed!","success");
    
   }
   const handleRemoveExtraSpaceClick=()=>{
       let freshText=text.replace(/\s+/g, ' ').trim();
       setText(freshText);
       props.showAlert("Removed extra space","success");
   }
   const speak=()=>{
    let msg=new SpeechSynthesisUtterance(text);
    const toggle=document.getElementById('toggle');
    if (toggle.textContent === 'Speak') {
        window.speechSynthesis.speak(msg);
        toggle.textContent = 'Stop';
        props.showAlert("Speak on","success");
    } else {
        toggle.textContent = 'Speak';
        window.speechSynthesis.cancel();
        props.showAlert("Speak off","success");
    }

}
   const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
   }
   
  return (
    <>
    <div className='container' >
        <h1 className='mb-4' style={{color:props.mode==='light'? 'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='light'? 'white':'#3a3b3b',color:props.mode==='light'? 'black':'white'}} onChange={handleOnChange} rows="8" value={text} placeholder='Enter the text'></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>convert to Loerercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleCapClick}>Capitalize</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleReverseCharacterClick}>Reverse character</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleReverseWordClick}>Reverse sword</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleRemoveExtraSpaceClick}>Remove extra space</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" id='toggle' onClick={speak}>Speak</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={copyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'? 'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{
          return element.length !==0}).length} words and {text.length} characters</p>
        <p>{0.008* text.split(/\s+/).filter((element)=>{
          return element.length !==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
