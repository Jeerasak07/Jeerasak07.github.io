//<h1 id="title" class="display-1" style="color:brown">Hello World</h1>
//<h1 id="title2" class="display-2" style="color:brown">I are developer</h1>

let h1 = document.getElementById('title');
let h2 = document.getElementsByTagName('h1');
let h3 = document.getElementsByClassName('display-3');

//h1.innerText = "Computer and Information Science";
//console.log(h2);
//h2[0].innerHTML = "<b>CIS</b>";

function changetext(id){
    console.log(id);
    id.innerHTML = "This text change from JS";
}

function tempCalculator(){
    var c = document.getElementById('inputCelsius').value
    var f = document.getElementById('inputFahrenheit').value
    console.log(c, f);
}
document.getElementById('calbtn').addEventListener("click", tempCalculator);

function addTodo(){
    let input = document.getElementById('inputtodo').value;
    let newli = document.createElement('li');
    let node = document.createTextNode(input);
    
    newli.className = "list-group-item";
    newli.appendChild(node);

    let elist = document.getElementById('todolist');
    elist.appendChild(newli);
}