let mainArr=[];
let mainSum=0;
let sumElem=document.getElementById("sumElem");
var elements = document.querySelectorAll(".element");
let selectItem=null;
for(elem of elements){
    mainSum+=parseFloat(elem.textContent);
    mainArr.push(elem);
    elem.addEventListener("click", function() {
        if(this==selectItem){
            this.style.borderColor="black";
            selectItem=null;
        }
        else if(selectItem!=null){
            selectItem.style.borderColor="black";
            selectItem=this;
            this.style.borderColor="red";
        }
        else{
            selectItem=this;
            this.style.borderColor="red";
        }
    });
}
sumElem.textContent="Сумма: "+mainSum;


let container=document.getElementById('container')
function addAll(){
    let size=mainArr.length;
    for (let i=0;i<size;i++) mainArr[i].remove();
    mainSum=0;
    for (elem of mainArr){
        mainSum+=parseFloat(elem.textContent);
        sumElem.textContent="Сумма: "+mainSum;
        container.append(elem);
    }
}

let from=document.getElementById("from");
from.onchange=function(){
    addAll();
    for (elem of mainArr){
        if ((from.value!=null && parseFloat(elem.textContent.trim())<from.value) || (to.value!="" && parseFloat(elem.textContent.trim())>to.value)){
            mainSum-=parseFloat(elem.textContent);
            sumElem.textContent="Сумма: "+mainSum;
            elem.remove();
        }
    }
}

let to=document.getElementById("to");
to.onchange=function(){
    addAll();
    for (elem of mainArr){
        if ((to.value!="" && parseFloat(elem.textContent.trim())>to.value) || (from.value!=null && parseFloat(elem.textContent.trim())<from.value)){
            mainSum-=parseFloat(elem.textContent);
            sumElem.textContent="Сумма: "+mainSum;
            elem.remove();
        }
    }
}

function compare(a,b){
    return a.textContent-b.textContent;
}

function compare2(a,b){
    return b.textContent-a.textContent;
}

let sort = document.getElementById("sort");
sort.onchange=function(){
    console.log(sort.value);
    if(sort.value=="increse"){
        mainArr.sort(compare);
        addAll();
    }
    else if(sort.value=="decrese"){
        mainArr.sort(compare2);
        addAll();
    }
}


let add=document.getElementById('add');
let price=document.getElementById('price');
add.onclick=function(){
    let inp=price.value;
    if (!isNaN(inp) && inp!=""){
        let elem=document.createElement('div');
        elem.className="element";
        elem.textContent=inp;
        elem.addEventListener("click", function() {
            if(this==selectItem){
                this.style.borderColor="black";
                selectItem=null;
            }
            else if(selectItem!=null){
                selectItem.style.borderColor="black";
                selectItem=this;
                this.style.borderColor="red";
            }
            else{
                selectItem=this;
                this.style.borderColor="red";
            }
        });
        container.append(elem);
        mainArr.push(elem);
        mainSum+=parseFloat(inp);
        sumElem.textContent="Сумма: "+mainSum;
    }
    else{
        alert("Введите число");
    }
}

let del=document.getElementById('del');
del.onclick=function(x){
    if(selectItem!=null){
        for (let i=0; i<mainArr.length;i++){
            if (mainArr[i]==selectItem){
                mainSum-=parseFloat(selectItem.textContent);
                sumElem.textContent="Сумма: "+mainSum;
                mainArr.splice(i,1);
                selectItem.remove();
                break;
            }
        }
    }
}

let clear=document.getElementById('clear');
clear.onclick=function(){
    let size=mainArr.length
    for (let i=0;i<size;i++) mainArr[i].remove();
    mainArr=[];
    mainSum=0;
    sumElem.textContent="Сумма: "+mainSum;
}
