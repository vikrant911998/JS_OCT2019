window.addEventListener('load',init);



function init(){
    var userid = document.getElementById('userid');
    var password = document.getElementById('pwd');
    var register = document.getElementById('register');
    register.addEventListener('click',()=>{
        registerUser(userid,password);
    });
}

function registerUser(userid,password){
    var userObject = new User(userid.value,password.value);

    var firebasePromise = firebase.database().ref("/crudusers/"+userid.value).set(userObject);

    firebasePromise.then(data=>{
        alert('Record Saved');
    }).catch(err=>{
        alert('Error while Saving Record');
    });


    console.log(userObject);
}