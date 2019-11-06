
window.addEventListener('load',()=>{
    registerEvent();
});


function registerEvent(){
    var username = document.querySelector('#userid');
    var password = document.querySelector('#pwd');
    var btn = document.querySelector('#login');
    var res  = document.querySelector('#invalid');
    
    btn.addEventListener('click',
    ()=>{
        doLogin(username,password,res);
    });

}

function doLogin(username,password,res){
    var firebasePromise = firebase.database().ref('/crudusers/');
    var isUserFound = false;
    firebasePromise.on('value',(snapshot)=>{
        var users = snapshot.val();
        var obj={};
        // console.log(users);
        for(var key in users){
            obj = users[key];
            if(obj.username == username.value && obj.password == password.value){
                isUserFound=true;
                location.href = "dashboard.html";

            }
        }
        if(isUserFound == false){
            res.innerText = "Invalid Userid and Password";
            res.className = "alert-danger p-5";
        }
    });

}