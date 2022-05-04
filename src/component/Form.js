import React,{useState} from 'react'

export default function Form(props) {
   
     const [text,SetText] = useState(" ");
  
    //basically handle on change     
      const handleOnChange = (event)=>{
       let j=event.target.value
        SetText(j);
      }
      
    // to make uppercase
      const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        SetText(newText)
      }
    // to make lowercase
      const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        SetText(newText)
      }
    //To clear the text
      const handleClear = ()=>{
        let newText ='';
        SetText(newText)
      }
    //copy the text to clipboard
    const handleClipboard = () => {
      var text = document.getElementById("formid");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    //remove extra space
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        SetText(newText.join(" "))
    }
    //captilize first letter
    const handleFirstCapital=()=>{
      let newtext=text.split(" ").map((e)=>e[0].toUpperCase()+e.split('').splice(1).join(''));
      SetText(newtext.join(" "));
    }   
     //finding number in the string
     const handleNumber = () => {
      let regx=/[0-9]/g
      const found=text.match(regx)
      SetText( found==null?'':found.join(''))
    }
    //find out non-alphanumeric character
    const handleNonalphanumeric=()=>{
      let regx=/\W/g
      const found=text.match(regx)
      SetText(found==null?'':found.join(''))
    }
    //only alphabet 
    const handlealphabet=()=>{
      let k = text.replace(/[0-9\W]/g, '');
      SetText(k==null?'':k)
    }
    
    //finding gmail in the string
    const handleGmail=()=>{
      var k=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
      SetText(k==null?'':k.join('\n'))
    }
    //finding gmail in the string
    const handlePhone=()=>{
      var k=text.match(/98(\d{8})/ig)
      SetText(k==null?'':k.join('\n'))
    }
    //finding vowel in text
    //finding number in the string
    const handleVowel = () => {
      const found=text.match(/[aeiou|AEIOU]/g)
      SetText( found==null?'':found.join(''))
    }
   // seperate the line with dot and find second word
   const handledotsep=()=>{
    const found=text.split('.')
    const ffound=found.map((a)=>a.match(/((\w| )+.$)+/ig)).flat().map((a)=>a.split(' ').filter((a,b)=>b===1)).flat()
    SetText( ffound==null?'':ffound.join(''))
   }
    return (
       <>
        <div className="container mb-3">
        <h1> {props.label}</h1>
        <textarea className="form-control"  onChange={handleOnChange} value={text} id="formid" rows="8"></textarea>
        <button type="button" className="btn btn-secondary my-2" onClick={handleUpClick}>Upprcase</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleLoClick}>Lowercase</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleFirstCapital}>first-Captilize</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleExtraSpaces}>No-extra-space</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleNumber}>find-number</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handlealphabet}>Alphabet</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleNonalphanumeric}>Nonalphanumeric</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleGmail}>gmailextract</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleVowel}>Vowel</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handlePhone}>phonenumber</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handledotsep}>dotsepsecond</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleClipboard}>Clipboard</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handleClear}>Clear</button>
        <h2>Report</h2>
        </div>
        {/* to present the report of the text */}
        <div className="container">
        <p>Number of word:-<b>{text.split(' ').filter((element)=>element!=="").length}</b>,Number  of character:-<b>{text.split(' ').join('').length}</b><br/>
           Number of  nonalphanumeric character:-<b>{text.match(/\W/g)==null?0:text.match(/\W/g).filter((e)=>e!==' ').join('').length}</b><br/>
           Number of capital letter:-<b>{text.replace(/[0-9\W]/g, '').split('').map((e)=>e.charCodeAt(0)).map((e)=>e>=65&&e<=90?1:0).reduce((a,b)=>a+b,0)}</b><br/>
           Number of vowel letter:-<b>{text.match(/[aeiou|AEIOU]/g)==null?0:text.match(/[aeiou|AEIOU]/g).length}</b></p>
        </div>
       </>
    )
}


