
function decor(func){
    return function(){
        if(!isPaused){
            isPaused = true;
            setTimeout(function(){
                isPaused = false;
            }, 5000);
        }
        func();
    }
}

var isPaused=false;

let notifNumber=0;
countNotif.textContent=0;
let timer=function(){
    if(notifNumber>=15){
        clearInterval(interval);
        return;
    }
    if(!isPaused){
        notifNumber++;
        countNotif.textContent=notifNumber;
        let elem=document.createElement('div');
        elem.className="list";
        elem.textContent="Notification "+notifNumber;
        listDiv.append(elem);
    }


}

var interval=setInterval(timer,1000);


timer=decor(timer);

let counter=0;
notif.onclick=function(){
    if(counter==0){
        timer();
        listDiv.style.display="block"
    }
    else{
        listDiv.style.display="none"

    }
    counter=(counter+1)%2;
}

listDiv.onclick=function(event){
    event.stopPropagation();
}


add.onclick=function(){
    let text=prompt("Введите текст");
    while(text!=null && text!=""){
        let elem=document.createElement('li');
        elem.textContent=text;
        task3_list.append(elem);
        text=prompt("Введите текст");
    }
}


function showNotification(options){
    let elem=document.createElement('div');
    elem.className="task4";
    elem.textContent=options;
    document.body.append(elem);
    setTimeout(function(){elem.remove()},1500)

}

task4.onclick=function(){
    showNotification("Уведомление скоро исчезнет");
}