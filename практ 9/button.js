button.onclick=function(){
    if (button.style.backgroundColor == 'rgba(255, 255, 255, 0.2)'){
        button.style.backgroundColor="red";

    }
    else{
        button.style.backgroundColor='rgba(255, 255, 255, 0.2)';

    }
}

// var main=document.getElementsByTagName("body");
var main=document.getElementById('main');
// var main=document.body;

let count=0;
button2.onclick=function(){
    console.log(count);
    count++;

    window.addEventListener('mousemove', e => { // при движении курсора        
        if (count%2==1){

        var div = document.createElement('div');
        x = e.clientX;

        y = e.clientY;


        div.style.position = 'absolute';
        div.style.width = '40px';
        div.style.height = '40px';
        div.style.border = '3px solid';
        div.style.borderColor = 'purple';
        div.style.left = x + 'px';   

        div.style.top = y + 'px';    
    

        main.appendChild(div);

        // document.body.appendChild(div);
        }

    })

    

}

// button.onclick = function(){
//     button.style.backgroundColor="red";

//     window.addEventListener('mousemove', e => { // при движении курсора
//         if (button.style.backgroundColor == 'red'){

        
//         var div = document.createElement('div');
//         x = e.clientX;

//         y = e.clientY;

//         div.style.position = 'absolute';
//         div.style.width = '40px';
//         div.style.height = '40px';
//         div.style.borderRadius = '20px';
//         div.style.border = '3px solid';
//         div.style.borderColor = 'black';
//         div.style.left = x + 'px';   // Координаты дива X и Y не забываем указать еденицы измерения,

//         div.style.top = y + 'px';    // например 40px или 20%


//         document.body.appendChild(div);
//         }
//     })
// }


