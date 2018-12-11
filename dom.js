console.log(document);
//alert('Hellooooo');

window.addEventListener('load', function() {
    console.log('All assets are loaded');


    var helloDiv = document.getElementById('helloDiv');
    console.log(helloDiv.innerHTML);
    helloDiv.innerHTML = 'Bye Bye';
    helloDiv.style.backgroundColor = 'pink';

    var pEls = document.getElementsByTagName('p');
    console.log(pEls[0].innerHTML);
    console.log(pEls[0].style.marginTop);
    pEls[1].style.border = '2px dotted red';
    
});

console.log('Here');

