function three(){
    four();
   var aa;
    console.log(aa);
}
function four(){
   var aa =20;
   console.log(aa);
   console.log(bb);
   cc=90;
}

bb=100;
var aa=10;
three();
console.log(aa);
console.log(cc);