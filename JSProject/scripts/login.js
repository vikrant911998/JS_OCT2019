
window.addEventListener('load',()=>{
    registerEvent();
});
var username,password,btn,res;

function registerEvent(){
    username = document.querySelector('#userid');
    password = document.querySelector('#pwd');
    btn = document.querySelector('#login');
    res  = document.querySelector('#invalid');
    
    btn.addEventListener('click',doLogin);

}

function doLogin(){
    console.log('inside do login');
    if(username.value == password.value){
        location.href = "dashboard.html";
    }
    else{

    }
}