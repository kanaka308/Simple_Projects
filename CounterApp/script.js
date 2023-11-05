var counterNumber = document.querySelector("#counter");
var btns = document.querySelector(".btns");
console.log(btns.childNodes[3]);
var val = 0;
for (let i = 1; i < 6; i += 2) {
  btns.childNodes[i].addEventListener("click", function (e) {
    var buttonVale = e.target.textContent;
    if (buttonVale === "Reset") {
      val = 0;
    } else if (buttonVale === "Decrement") {
      val -= 1;
    } else {
      val += 1;
    }
    counterNumber.textContent = val;
    if(val < 0){
        counterNumber.style.color = 'red';
    }
    else if(val > 0){
        counterNumber.style.color = 'green';
    }else{
        counterNumber.style.color = 'black';
    }
  }
);

  
}

