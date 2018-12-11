console.log(document);
//alert('Hellooooo');

window.addEventListener('load', function() {
    console.log('All assets are loaded');


    // var helloDiv = document.getElementById('helloDiv');
    var helloDiv = document.querySelector('#helloDiv');
    console.log(helloDiv.innerHTML);
    helloDiv.innerHTML = 'Bye Bye';
    helloDiv.style.backgroundColor = 'pink';

    var pEls = document.getElementsByTagName('p');
    console.log(pEls[0].innerHTML);
    console.log(pEls[0].style.marginTop);
    pEls[1].style.border = '2px dotted red';

    // var bolds = document.getElementsByClassName('boldAndItalic');
    // console.log(bolds);
    // for(e of bolds) {
    //     e.style.color = 'red';
    // }

    var bolds = document.querySelectorAll('.boldAndItalic');
    bolds.forEach(e => e.style.color = 'red');
    // for(e of bolds) {
    //     e.style.color = 'red';
    // }
    

});

console.log('Here');

