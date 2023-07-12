let arr1 = [1,2,3];
console.log(arr1);
let arr2 = arr1;
console.log("arr2" + arr2);
// arr2 = [6,7,8];
arr2.push(4);
console.log("arr2" + arr2);
console.log("arr1" + arr1);
let arr3=[4,5];
let arr4 = arr3.concat(arr1);
console.log(arr4)

let arr5 = [11,12,...arr1];
console.log(arr5);


function sum(...arrP){
    let SUM = 0;
    for(let a = 0 ;a < arrP.length ; a++ ){
        SUM = SUM + arrP[a];
    }
    console.log(arrP[0]);
    console.log(SUM);

}
let newArr1 = arr1.map((arr)=> arr + 1) ;
console.log("newArr1:" + newArr1); 
arr2.forEach((arr) => {
    console.log(arr);
});


function Person( name , age) {
    this.test =()=>{
        console.log(this);
    };
    this.name = name ;
    this.age = age ;
    this.sayHi = () => {
        console.log(this.name + "HI");
    }
}

let angus = new Person("angus",20);
let mike = new Person("mike",25);
console.log(angus);
mike.sayHi();
// mike.test();


//////////////////////////////////////////////////////////////

// function Person2( name , age){
//     this.name = name ;
//     this.age = age ; 
// }
// Person2.prototype.hello=function(){
//     console.log(this.name+"說你好");
// }

// function Student(name , age , major){
//     Person2.call(this,name,age);
//     this.major = major;
// }
// Student.prototype = Object.create(Person2.prototype);
// Student.prototype.study = () =>{
//     console.log(this.name + "正在讀" + this.major);
// }

// let kit =new Person2("kit",18);
// let cat = new Student("cat",20,"math");
// console.log(cat);
// console.log(kit);
// kit.hello();
// cat.hello();
/////////////////////////////////////////////////////////


class Person2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    hello(){
        console.log(this.name+"說你好");
    }
    static person2=10;
    static personF(){
        console.log("testFunction");
    }
}

class Student extends Person2{
    constructor(name, age ,major){
        super(name,age);
        this.major = major;
    }
    study(){
        console.log(this.name + "正在讀" + this.major);
    }
    
}

let kit =new Person2("kit",18);
let cat = new Student("cat",20,"math");
console.log(cat);
console.log(kit);
kit.hello();
cat.hello();
Person2.personF();

let test = document.querySelector(".test");
let test2 = document.getElementsByClassName("test");
let text = document.querySelectorAll(".text");
let text2 = document.getElementsByClassName("text");

console.log(test.childNodes);
console.log(test2[0].childNodes);