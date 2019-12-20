//NAV STICKY

window.onscroll = function() {myFunction()};

let header = document.getElementsByTagName('header')[0]
let nav = document.getElementsByTagName('nav')[0]
let navInvisible = document.getElementsByClassName('navInvisible')[0]
let divUl = document.getElementById('navbarNav')
let div = document.getElementById('imglogo')
let h2 = document.createElement('h2')
h2.innerText = 'emporium.'
h2.style.fontWeight = 'bold'

function myFunction(){
    if(window.scrollY > 350){
        nav.style.borderBottom = 'solid black 3px'
        nav.classList.add("sticky")
        div.appendChild(h2)
        divUl.style.paddingTop = '2%'
        h2.style.display = 'block'
        divUl.style.transition = '2s ease'
        navInvisible.classList.add('navInvisible2')
    }else{
        nav.classList.remove("sticky")
        h2.style.display = 'none'
        divUl.style.paddingTop = '0'
        nav.style.borderBottom = '0'
        divUl.style.transition = 'none'
        navInvisible.classList.remove('navInvisible2')
    }
}


//CONNECTION

let btnConnect = document.getElementById('btn-connect')
let btnSub = document.getElementById('btn-sub')
let section = document.getElementById('all')
let form1 = document.getElementById('sec-form1')
let form2 = document.getElementById('sec-form2')
form1.getAttribute('id')
form2.getAttribute('id')

 

btnConnect.addEventListener('click', ()=>{
    section.style.display = 'none'
    form2.setAttribute ('id', 'sec-form3')
    modal.style.display = "none";
    btn.style.display = "none"
})

btnSub.addEventListener('click', ()=>{
    section.style.display = 'none'
    form1.setAttribute ('id', 'sec-form3')
    modal.style.display = "none";
    btn.style.display = "none"
})


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//PRODUCT MENU


let product = document.getElementById('product')
let prodJs= document.getElementsByClassName('prod-js')[0]
product.addEventListener('mouseover', ()=>{
    prodJs.setAttribute('class', 'prod-js2')
    prodJs.classList.remove('d-none')
    prodJs.addEventListener('mouseover', ()=>{
        prodJs.setAttribute('class', 'prod-js2')
        prodJs.classList.remove('d-none')
        product.addEventListener('mouseout' , ()=>{
        prodJs.classList.replace('prod-js2', 'prod-js')
        prodJs.classList.add('d-none')
    });prodJs.addEventListener('mouseout' , ()=>{
        prodJs.classList.replace('prod-js2', 'prod-js')
        prodJs.classList.add('d-none')
    });
    })
})


// DARk/LIGHT MODE

let btnLight = document.getElementsByClassName('btn1')[0]
let btnDark = document.getElementsByClassName('btn2')[0]
let body = document.getElementsByClassName('body-light')[0]

btnLight.addEventListener('click', ()=>{
    body.classList.replace('body-dark', 'body-light')
    body.style.transition = '1s ease'
    nav.style.transition = '1s ease'
    nav.style.backgroundColor = 'white'
})

btnDark.addEventListener('click', ()=>{
    body.classList.replace('body-light', 'body-dark')
    nav.style.backgroundColor = 'rgb(41, 41, 41)'
    body.style.transition = '1s ease'
    nav.style.transition = '1s ease'
})


// CAROUSEL



