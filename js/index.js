const slider=document.querySelector('.popular__list')
const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const btn3=document.querySelector('.btn3')
const btn4=document.querySelector('.btn4')
const item=document.querySelectorAll('.popular__list li')

console.log(item);
// let index=0;
// function change() {
//     slider.style.transform=`translateX(-50%)`
// }
// btn2.addEventListener('click',change)
btn1.addEventListener('click',()=>{
    slider.style.transform="translateX(0)"
    btn1.classList.add('btn-active')
    btn3.className="btn-corusel btn3"
    btn4.className="btn-corusel btn4"
    btn2.className='btn-corusel btn2'
    
})
btn2.addEventListener('click',()=>{
    slider.style.transform="translateX(-453px)"
    btn2.classList.add('btn-active')
    btn3.className="btn-corusel btn3"
    btn4.className="btn-corusel btn4"
    btn1.className='btn-corusel btn1'
    
})
btn3.addEventListener('click',()=>{
    slider.style.transform="translateX(-901px)"
    btn3.classList.add('btn-active')
    btn4.className="btn-corusel btn4"
    btn2.className="btn-corusel btn2"
    btn1.className='btn-corusel btn1'
})
btn4.addEventListener('click',()=>{
    slider.style.transform="translateX(-1359px)"
    btn4.classList.add('btn-active')
    btn2.className="btn-corusel btn2"
    btn3.className="btn-corusel btn3"
    btn1.className='btn-corusel btn1'
})