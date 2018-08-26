var firstObject={
    
    firstName: 'elanche',
    lastName: 'chezhiyan',
    age: 22,
    address : {
    door: 12,
    street:'first street'
},
    hobby:['cycling','jogging'],
    
 calculateYearOfBirth : function(){
    console.log(2018 - this.age);
}
};
firstObject.calculateYearOfBirth();


console.log(firstObject);

/*firstObject.age = 22;
firstObject['firstName']='ELANCHEZHIYAN';
var lastName = 'lastName';
firstObject[lastName]='Poosamani';

console.log(firstObject);

var secObject = new Object();

secObject.firstName = 'Elanchezhiyan';
secObject.lastName = 'Poosamani';

console.log(secObject);*/