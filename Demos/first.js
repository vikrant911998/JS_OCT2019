window.addEventListener('load',()=>{
    register();
});
function register(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var button = document.getElementById('calc');
    button.addEventListener('click',calculate);
    var result = document.getElementById('result');

}

function calculate(){
    console.log('inside calc function');
    var rs = parseInt(num1.value)+parseInt(num2.value);
    console.log(rs);
    result.innerText = rs;
}