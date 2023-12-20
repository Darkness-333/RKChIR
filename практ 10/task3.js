function truncate(str, maxlength){
    if(str.length>maxlength){
        return str.slice(0,maxlength-3)+'...'
    }
    else{
        return str
    }
}

for(let i=1;i<=3;i++){
    let id="div"+i;
    let elem=document.getElementById(id);
    text=elem.textContent.trim();
    elem.textContent=truncate(text,6)
}