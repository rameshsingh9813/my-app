let text="jgvjkhbjkbkjh"
const found=text.match(/\W/g)==null?0:text.match(/\W/g).filter((e)=>e!=' ').join('').length
console.log(found)