let input = document.querySelector('input')
let btn = document.querySelector('button')
let img = document.querySelector('img')
let err = document.querySelector('.err')

btn.addEventListener('click', () => {
    let qrvalue = input.value;
    if (qrvalue == "") {
        err.innerText = 'Nəsə səhvlik var :(';
        img.src =''
    }
    else {
        err.innerText=''
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
    }
})