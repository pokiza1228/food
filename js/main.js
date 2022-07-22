const minus=document.querySelector('#minus')
const plus=document.querySelector('#plus')
const textCount=document.querySelector('.count-text')

plus.addEventListener('click',()=>{
    textCount.textContent=Number(textCount.textContent)+1
})
minus.addEventListener('click',()=>{
    if(Number(textCount.textContent)>0) {
        textCount.textContent=Number(textCount.textContent)-1
    }
})