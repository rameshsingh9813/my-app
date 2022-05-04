const handleFirstCapital=(text)=>{
    let spt=text.split(" ");
    let newtext=spt.map((e)=>e[0].toUpperCase()+e.split('').splice(1).join(''));
    return(newtext.join(" "));
  } 
  console.log(handleFirstCapital("jhb897 89 778"))