function a(){
    b();
}

function b(){
    console.log(one);
}

var one = 10;
a();