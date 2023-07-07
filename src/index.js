module.exports = function check(str, bracketsConfig) {
  let stack=[]
  let objBracket={}
  bracketsConfig.forEach((item)=>{
    objBracket[item[0]]=item[1]
  })
  for(let i=0; i<str.length; i++){
    if(str[i]==objBracket[stack[stack.length-1]]){
      stack.pop()
    }
    else{
      stack.push(str[i])
    }
  }
  if(stack.length==0){
    return true
  }
  else{
    return false
  }
}
