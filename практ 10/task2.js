function Accumulator(startingValue){
    alert("Начальное значение: "+ startingValue)
    let value=startingValue;
    this.read=function(){
        value+=Number(prompt("Введите число"));
        alert("Сумма: "+value);
    };
}

let ac;
document.getElementById("button").onclick = function accum(){
    if (!ac) ac=new Accumulator(10);
    ac.read();
    
};
