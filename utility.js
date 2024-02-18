let seatButtons = document.getElementsByClassName('btn')

for(let seatButton of seatButtons){
    seatButton.addEventListener('click',function(e){
        seatButton.classList.add('bg-green-400') ; 
    
    let innerText = seatAvailable('availabe-seats') ;
    let newInnerText = innerText - 1 ; 

    setInnerText('availabe-seats' ,newInnerText)
    
    let innerTextSit = seatAvailable('sit') ;
    let newInnerTextSit = innerTextSit + 1 ;
    
    setInnerText('sit',newInnerTextSit)
// showing sit numbers
  let createElement = createElementById('li') 
  createElement.innerText = seatButton.innerText
    
  let innerTextButtons = document.getElementById('sitId').appendChild(createElement)
  
// showing className
let createElementClass = createElementById('li') 
createElementClass.innerText = 'Economy'
  
let innerTextClass = document.getElementById('classId').appendChild(createElementClass)
 
// showing price 
let createElementPrice = createElementById('li') 
createElementPrice.innerText = '550'
  
let innerTextPrice = document.getElementById('priceId').appendChild(createElementPrice)

    })
   
}

// function of getting inner text
function seatAvailable(elementId){
  let innerText = document.getElementById(elementId).innerText 
  return parseInt(innerText)
}

// function of setting innertext
function setInnerText(elementId,value){
let newValue = document.getElementById(elementId).innerText = value
return newValue
} 

function createElementById(elementId){ 
let elementCreated = document.createElement(elementId)
return elementCreated ;
} 

