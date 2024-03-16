

name();
doSomething();

fullName = "Harshit" ;
console.log(fullName);




const user = {
    name : "Prince" ,
    age : 25
} 

console.log(user);
console.log(typeof user);


function name() {
    console.log("Prince Saluja");
}

var fullName = "Garv";


function doSomething() {
    // x=30;
    console.log(x) ;
    var x = 25 ;

}

// call , apply , bind

function greet(hobby) {
    console.log(`Hello Mr. ${this.name} and his hobby is ${hobby}`);
}

const user1 = {
    name : "Prince",
    age : 26
}

const user2 = {
    name : "Harshit",
    age : 30
}

greet.call(user2 , "Singing");

greet.apply(user1 , ["Dancing"]);

const bind = greet.bind(user1 , "Smoking");
bind();