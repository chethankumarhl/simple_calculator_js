// using jquery
function appendToDisplay(value){
    $("#input").val(function(i, oldValue) {
        return oldValue + value;

})
}
function Clear(){
    $("#input").val('')
}
function calculate(){
    try{
        let result = eval($("#input").val())
        $("#input").val(result)
    }
    catch(e){
        $("#input").val(`error`)
    }
    
}
function preventKeyboardInput(event) {
    event.preventDefault();}

    function back() {
        var value =  $("#input").val();
        $("#input").val(value.substr(0, value.length - 1))
    }
