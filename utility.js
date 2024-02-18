let seatButtons = document.getElementsByClassName('btn')

for(let seatButton of seatButtons){
    seatButton.addEventListener('click',function(){
        seatButton.classList.add('bg-green-400') ; 
    let innerText = seatAvailable('availabe-seats') ;
    let newInnerText = innerText - 1 ; 

    setInnerText('availabe-seats' ,newInnerText)
    

    })
   
}

function seatAvailable(elementId){
  let innerText = document.getElementById(elementId).innerText 
  return parseInt(innerText)
}


function setInnerText(elementId,value){
let newValue = document.getElementById(elementId).innerText = value
return newValue
}