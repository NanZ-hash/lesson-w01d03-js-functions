
// first lap < You Rock > 
const youRock = function (name) { 
    const print='You rock '+name+'!';
    return print; 
}


// < square >
const square = function (n){
    return n*n;
}

// < Cube >
const cube = function (n){
    return n*n*n;
}

// < toTheFourth >

const toTheFourth = function (n){ 
    return n*n*n*n;
}

// EXTRA.. 

const cal =function (a,b,op){ 
    switch(op) {
        case '+': 
        return a+b; 
        break;
        case '-': 
        return a-b; 
        break; 
        case '/': 
        return a/b; 
        break; 
        case '*':
        return a*b; 
        break;
        
    };
};

// FizzBuzz function 

const FizzBuzz=function (i)
{
if (i%3 === 0 && i%5 === 0)
     
         console.log("\n FuzzBuzz");
         else if ( i%3 === 0 ) 
         console.log("\n Fuzz");
         else if ( i%5 === 0)
         console.log("\n Buzz");
     
     
     else 
     console.log("\n "+i); 
};

// RainDrop function 
const RainDrop = function (n) { 

    if (n%3===0)
    console.log("Pling");
    if (n%5===0)
	console.log("Plong");
	if (n%3 !=0 && n%5 !=0 && n%7 !=0)
    return n;

}; 


// 