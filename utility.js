let seatButtons = document.getElementsByClassName('btn');
let maxClicks = 4;
let clicksCount = 0;

for(let seatButton of seatButtons){
    seatButton.addEventListener('click',function(e){
      if (clicksCount < maxClicks) {
        seatButton.classList.add('bg-green-400');    
    
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
let convertedInnerTextPrice = parseInt(createElementPrice.innerText)
console.log(convertedInnerTextPrice)

// getting the total cost
let totalCost = seatAvailable('total-price')
 let convertedTotalCost = parseInt(totalCost)
 let finalTotalCost = document.getElementById('total-price').innerText = convertedTotalCost + convertedInnerTextPrice ;
    
  // seatButton.disabled= true;

// getting the grand total
let grandTotalCost = seatAvailable('grand-total')
 let convertedGrandTotalCost = parseInt(grandTotalCost)
 let finalGrandTotalCost = document.getElementById('grand-total').innerText = convertedGrandTotalCost + convertedInnerTextPrice ;

   
 clicksCount++ ; 
 seatButtons.disabled = true ; 
 if(clicksCount===1){
  document.getElementById('next-button').disabled = false ;
 }

}

// coupon discount
let applyButton = document.getElementById('apply-button')
 applyButton.addEventListener('click',function(){
 let inputField = document.getElementById('input-coupon') ;
 if(inputField.value == 'NEW15'){
  let abarInputField = document.getElementById('input-coupon') ;
  abarInputField.classList.add('hidden') ;
  let abarApplyButton = document.getElementById('apply-button');
  abarApplyButton.classList.add('hidden');
  let discountGrandTotal = document.getElementById('grand-total').innerText ; 
  let convertedDiscountGrandTotal = parseInt(discountGrandTotal)
  let totalCost = parseInt(document.getElementById('total-price').innerText)
  let discount = (15*totalCost)/100 ;
  let finalDiscount = totalCost - discount ;
  document.getElementById('grand-total').innerText = Math.round(finalDiscount) ;
 }
 
 
 
 if(inputField.value == 'Couple 20'){
  let abarInputField = document.getElementById('input-coupon') ;
  abarInputField.classList.add('hidden') ;
  let abarApplyButton = document.getElementById('apply-button');
  abarApplyButton.classList.add('hidden')
  let discountGrandTotal = document.getElementById('grand-total').innerText ; 
  let convertedDiscountGrandTotal = parseInt(discountGrandTotal)
  let totalCost = parseInt(document.getElementById('total-price').innerText)
  let discount = (20*totalCost)/100 ;
  let finalDiscount = totalCost - discount ;
  document.getElementById('grand-total').innerText = Math.round(finalDiscount) ;
 }


})

let modal = document.getElementById('next-button') ; 
modal.addEventListener('click', function(){
  console.log('clicked')
})


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

// function for reloading the page
let continueButton = document.getElementById('continueButton')
continueButton.addEventListener('click',function(){
  window.location.reload()
})