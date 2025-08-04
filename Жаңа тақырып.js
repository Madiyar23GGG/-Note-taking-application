// let pop = document.getElementById("pop");
// let button = document.getElementById("button");
// let sit = document.getElementById("sit");

// button.addEventListener("click",function(){
//     localStorage.setItem('text', pop.value)
// })

// let name = document.getElementById("name");
// let ege = document.getElementById("ege");
// var sit = document.getElementById("sit");
// let button = document.getElementById("button");
// let button2 = document.getElementById("button2");


// button.addEventListener('click',function(){
//     localStorage.setItem("name", name.value)
//     localStorage.setItem("age", ege.value)


    

// })

// button2.addEventListener('click',function(){
//     sit.textContent = localStorage.getItem("name") + " " + localStorage.getItem("age")
// })


let text = document.getElementById('text');
let button = document.getElementById('button1');
let container  =  document.getElementById('container')
button.addEventListener('click',function(){
    localStorage.setItem("text", text.value)

    let card = document.createElement('div')
    card.id= 'card'
    container.appendChild(card)
    let h1 =  document.createElement('h1')
    h1.textContent= localStorage.getItem('text')
    card.appendChild(h1)
    let btn = document.createElement('button')
    btn.textContent = 'Өшіру'
    card.appendChild(btn)
    btn.addEventListener('click', function(){
        container.removeChild(card)
        localStorage.removeItem('text')
    })
})



