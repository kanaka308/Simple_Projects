var con = document.querySelector("#container");
var love = document.querySelector("#heart");

con.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%, -50%) scale(1.5)';
    love.style.opacity = '1';

    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0.5)';
        love.style.opacity = '0.7';
    },500)

    
setTimeout(function(){
    love.style.transform = 'translate(-50%, -50%) scale(0)';
    love.style.opacity = '0.3';
},600)
})
