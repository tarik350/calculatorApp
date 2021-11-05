const inputValue=document.querySelector('input')
function insert(num)   
{  
    inputValue.value +=num;

    if(num='+'){
        oprand1=inputValue.value
    }
}  

function deleter(){
    let expression=inputValue.value
    inputValue.value=expression.substring(0,expression.length - 1)
    
}

function reset(){
    inputValue.value=null
}

function equal(){
 let exp=inputValue.value;
  if(exp){
    inputValue.value=eval(exp)
  }
}
