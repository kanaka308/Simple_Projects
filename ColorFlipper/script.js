var body = document.querySelector('body');
var btn = document.querySelector('button');
var txt = document.querySelector('#color-text')

btn.addEventListener('click', function(){
    var i = Math.random()*255-0;
    var j = Math.random()*255-0;
    var k = Math.random()*255 -0;
    var a = Math.random()
    body.style.backgroundColor = `rgba(${i},${j}, ${k}, ${a})`
    txt.innerHTML = body.style.backgroundColor;
})

