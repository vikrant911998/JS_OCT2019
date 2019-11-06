window.addEventListener('load',()=>{
    registerEvents();

}); 

function registerEvents(){
    var add = document.querySelector('#add');
    add.addEventListener('click',addQuestion);
}


function addQuestion(){
    console.log('inside add function');
    var questionObject = new Question();

    for(var key in questionObject){
        // console.log(key);
        if(key != 'isMarked'){
            questionObject[key] = document.querySelector('#'+key).value;
        }
    }

    // console.log(questionObject);
    questionoperation.add(questionObject);

    printQuestion(questionObject);
    console.log('printed');
}

function printQuestion(questionObject){
    var tbody = document.querySelector('#questions');
    var row = tbody.insertRow();
    var index = 0;

    for(var key in questionObject){
        if(key != 'isMarked'){
            var cell = row.insertCell(index);
            cell.innerText = questionObject[key];
            index++;
        }
    }
    var operations = row.insertCell(index);
    var img = document.createElement('img');
    img.src = 'https://png.icons8.com/win8/1600/107C10/delete';
    img.className = 'size';
    operations.appendChild(img);
    // operations.innerText = "Hello";



}