//take input and pass it to math.eval()
var numbers = "";
var buttons = document.querySelectorAll("button")

for(var i = 0; i < buttons.length - 2; i++){
  buttons[i].addEventListener("click", function(){
    numbers += this.value
    document.querySelector("h1").textContent = numbers
  })
}

buttons[buttons.length - 2].addEventListener("click", function(){
  if (numbers !== ""){
    document.querySelector("h1").textContent = math.eval(numbers);
    numbers = math.eval(numbers);
  }
})

buttons[buttons.length - 1].addEventListener("click", function(){
  document.querySelector("h1").textContent = "0";
  numbers = "";
})
