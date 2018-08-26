function fiveSecWait(){
    var waitTime = 5000 + new Date().getTime();
    while(new Date() < waitTime){
        
    }
    console.log('five sec function finished');
}
function clickHandler(){
    console.log("somebody has clicked the screen");
}

document.addEventListener("click",clickHandler);
fiveSecWait();
console.log('Everything Finished');