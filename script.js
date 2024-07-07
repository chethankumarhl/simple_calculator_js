let display = document.querySelector("#input")
let but = document.querySelectorAll("button")
console.log(display.value)



function appendToDisplay(value){
   display.value += value;
    
}
function Clear(){
    display.value = ''
}
function calculate(){
    try{
        let result = eval(display.value)
        display.value = result;
    }
    catch(e){
        display.value= `error`
    }
    
}
function preventKeyboardInput(event) {
    event.preventDefault();}

    function back() {
        var value = document.getElementById("input").value;
        document.getElementById("input").value = value.substr(0, value.length - 1);
    }
