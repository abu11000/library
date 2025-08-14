document.addEventListener("DOMContentLoaded", () => {


    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('button');
    let div = document.querySelector('div');
    btn.addEventListener('click', () => {
        div.innerHTML = "";
        new QRCode(div, {
            text: inp1.value,
            width: 128,
            height: 128,
            colorDark: inp2.value,

        });
    });
})