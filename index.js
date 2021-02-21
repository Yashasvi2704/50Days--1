const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');
const progress = document.querySelector('.progress');
const progressCount = document.querySelector('.progress-count-list').childNodes;
let stateOfProgress = 0;
next.addEventListener('click',e=>{
    stateOfProgress+=1;
    progressCount[2*stateOfProgress+1].classList.add("active");
    progress.style.width = `${stateOfProgress*33.33}%`;
    if(stateOfProgress==1){
        
        prev.disabled = false;
        

    }
    else if(stateOfProgress==3){    
        
        next.disabled = true;
        
    }
    
    
    
})
prev.addEventListener('click',e=>{
    progressCount[2*stateOfProgress+1].classList.remove("active");
    stateOfProgress-=1;
    progress.style.width = `${stateOfProgress*33.33}%`;
    if(stateOfProgress==2){
        next.disabled=false;
        
    }
    else if(stateOfProgress==0){    
        
        prev.disabled = true;
        
    }
    
    
    
})