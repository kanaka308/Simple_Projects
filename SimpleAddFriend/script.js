// var addBtn = document.getElementById('add')
// console.log(addBtn)
var btn = document.querySelector('#add')

var removeBtn = document.getElementById('remove')
console.log(removeBtn)

var stranger = document.getElementById('stranger')
console.log(stranger)

var check = 0;
btn.addEventListener('click', function(){
    if(check === 0){
        stranger.textContent = 'Friends'
        stranger.style.color = 'green'
        btn.textContent = 'Remove'
        btn.style.backgroundColor = 'lightGrey'
        btn.style.color = 'black';
        stranger.style.marginLeft = '33%'
        check = 1
    }else{
        stranger.textContent = 'Stranger'
        stranger.style.color = 'red'
        btn.textContent = 'Add Friend'
        btn.style.backgroundColor = 'cadetblue'
        btn.style.color = 'white';
        stranger.style.marginLeft = '30%'
        check = 0
    }
})

// addBtn.addEventListener('click', function () {
//     stranger.textContent = "Friend"
//     stranger.style.marginLeft = "35%";
//     stranger.style.color = 'green';
//     removeBtn.style.display = 'inline';
//     addBtn.style.display = 'none';

// })
// removeBtn.addEventListener('click', function () {
//     stranger.textContent = "Stranger"
//     stranger.style.marginLeft = "30%";
//     removeBtn.style.display = 'none'
//     stranger.style.color = 'red';
//     addBtn.style.display = 'inline';
    
// })