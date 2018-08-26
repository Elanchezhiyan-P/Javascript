var nameFunction = function(name){
    name = name || "John";
    console.log('the name is ' + name);
};

nameFunction("Elanchezhiyan");
nameFunction();

(function(name){
    name = name || "Sathish";
    console.log('the name is ' + name);
})();
