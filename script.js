// // for(var i=5; i<10; i++){
// //     console.log("hey");
// // }

// // start;
// // while(end){
// //     change;
// // }

// // array.forEach(element => {
    
// // });

// // prep for interview
// // function abcd(){
// //     // function statement
// // }

// // var abcd = function(){
// //     // function expression
// // }

// // function(){
// //     // anonymous function
// // }

// // fat arrow
// // ()=>{

// // };

// // var q=()=>{

// // }
// // fat arrow with 1 parameter
// // var  g=(ab)=>{}

// // g(12)

// // single arrow
// // var  g= ab =>{}

// // g(12)

// // return
// // function abcd(){
// //     return 0;
// // }

// // console.log(abcd());


// // Arrays
// // var arr=[1,10,3,4,7,6];
// // // loop array
// // arr.forEach(function(val){
// //     console.log("hey", val +1 );
// // })


// // Objects
// // var obj = {
// //     name: "virus",
// //     age: 20,
// //     mail:"123@gmail.com"
// // };

// // synchronous code always run line by line
// // asynchronous code run which task completed first

// // async code can't get to main stack until sync code completes task into main stack


// // global - window
// console.log(this);

// // function - window
// function abcd(){
//     console.log(this);
// }
// abcd();

// // method - object 
// var obj = {
//     name: function(){
//         console.log(this);
//     },
//     age: 25,
//     email: "123@gmail.com"
// }
// obj.name();

// // fnc inside method (es5) - window
// var obj2 = {
//     sayName: function(){
//         console.log(this);
//         function childFunc(){
//             console.log(this);
//         }

//         childFunc();
//     },
//     age: 25
// }
// obj2.sayName();

// // fnc inside method (es6) - object
// var obj3 = {
//     sayName: function(){
//         console.log(this);
//     }
// }
// obj3.sayName();

// // constructor fnc mein this ki value - new blank object
// function add(){
//     console.log(this);
// }
// const ans = new add();

// // event listener mein this ki value - that element where event listener is used
// document.querySelector("button")
// .addEventListener("click", function(){
//     console.log(this);
// })

// // call, apply, bind
// // call
// const obj = {name: "virus"}

// function abcd(){
//     console.log(this);
// }
// abcd.call(obj)

// // apply
// const obj = {name: "virus"}

// function abcd(a,b,c){
//     console.log(this);
// }
// abcd.apply(obj,1,2,3)

// // bind
// const obj = {name: "virus"}

// function abcd(){
//     console.log(this);
// }
// abcd.bind(obj)

// // Prototypal Inheritance
// function makeHuman(name, age){
//     this.name = name;
//     this.age = age;
// }
// const human1 = new makeHuman("virus", 22);

// // Closures
// function counter (){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// var fnc = counter();
// fnc();


// // higher order function
// function abcd(){
//     return function(){

//     }
// }

// var arr = [1,2,3,4,5,6]

// // error handling
// function divide (a,b){
//     try{
//         if(b==0){
//             new Error("wrong");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// divide (12,0)

// const yourEvent = new Event("virus");

// document.querySelector("button").addEventListener("kahao", function(){
//     alert("gharpe");
// })

// document.querySelector("button").dispatchEvent(yourEvent);

// var btn= document.querySelectorAll('button');
// var p = document.querySelector("p");
// var img1 = document.querySelector("#img1");
// var img2 = document.querySelector("#img2");
// var form= document.querySelector("form");
// var inp= document.querySelectorAll('input[type="text"]');
// var h4 = document.querySelector("h4");


// 5th problem
// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var ul =document.querySelector("ul");

// var li;

// add.addEventListener("click", function(){
//     if(inp.value.trim() === ''){}
//     else{
//         li = document.createElement('li');
//         li.textContent= inp.value;
//         ul.appendChild(li);
//         inp.value ="";
//     }
// })

// remove.addEventListener("click", function(){
//         ul.removeChild(li);
// })


// 1st question
// btn.addEventListener("click", function(){
//     document.querySelector('p').textContent="Hello";
// });

// 2nd question
// btn.addEventListener("click", function(){
//     var src1= img1.src;
//     var src2= img2.src;

//     img1.src = src2;
//     img2.src =src1; 
// });

// 3rd question
// form.addEventListener("submit", function(evt) {
//     evt.preventDefault();
//     for (var i = 0; i < inp.length; i++){
//         if(inp[i].value.trim() === '' ){
//             h4.textContent="Error, some fields are empty";
//             h4.style.color="red";
//             h4.style.display = "block";
//             break;
//         }
//     }
// });


// 4th problem
// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var h3 = document.querySelector("h3");

// var int;

// start.addEventListener("click", function () {
//     var count = 0;
//     int = setInterval(function(){
//         h3.textContent = count;
//         count++;
//     }, 1000);
// })

// stop.addEventListener("click", function () {
//     clearInterval(int);
// })


// 6th problem
// var home = document.querySelector('#home');
// var about = document.querySelector('#about');
// var contact = document.querySelector('#contact');

// var homeText = document.querySelector('#home-text');
// var aboutText = document.querySelector('#about-text');
// var contactText = document.querySelector('#contact-text');
// var h3 = document.querySelectorAll('h3');

// homeText.style.display= "block";
// homeText.style.width= "50%";

// home.addEventListener("click", function(){
//     removetext()
//     homeText.style.display= "block";
//     homeText.style.width= "50%";
// })

// contact.addEventListener("click", function(){
//     removetext()
//     contactText.style.display= "block";
//     contactText.style.width= "50%";
// })

// about.addEventListener("click", function(){
//     removetext()
//     aboutText.style.display= "block";
//     aboutText.style.width= "50%";
// })

// function removetext(){
//     h3.forEach(function(h3){
//         h3.style.display="none";
//     })
// }

// 7th problem
// var prg = document.querySelector("#progress");
// var h3= document.querySelector("h3")
// var count = 0;

// setInterval(function(){
//     if(count===100){
//         h3.style.opacity = 1;
//         clearInterval(int);
//     }
//     count++;
//     prg.style.width= count + '%' ;
// }, 100);

// 8th problem
var inp= document.querySelector("input");

var data = [
    {name:" Harsh", src: "https://images.unsplash.com/photo-1752041295563-8320edcc0025?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D "},
    {name:" Hami", src: " https://images.unsplash.com/photo-1752665696094-b733943393d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"},
    {name:" Hema", src: " https://images.unsplash.com/photo-1752312641088-3c7425261a5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:" Yu", src: " https://images.unsplash.com/photo-1752147535869-b6988d3efa11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:" Cutie", src: " https://images.unsplash.com/photo-1752384876833-b725ae16bfa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: " Shraddu", src: "https://images.unsplash.com/photo-1748443157965-e504a6532648?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8 "},
    {name:" Virus", src: " https://images.unsplash.com/photo-1752041284232-f92842174668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:" Ashrad", src: " https://images.unsplash.com/photo-1732167372202-30be36e1168e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name:" Cane", src: " https://images.unsplash.com/photo-1752046462544-9454fa2a13b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"}
];

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                        
                    </div>
                    <h4>${elem.name}</h4>
                </div> `;
})

document.querySelector(".people").innerHTML=pers;

inp.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.trim().toLowerCase().startsWith(inp.value.trim().toLowerCase());
    });
    var newusers = "";
    matching.forEach(function(elem){
        newusers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src.trim()}" alt="">
                        </div>
                        <h4>${elem.name.trim()}</h4>
                    </div>`;
    });
    document.querySelector(".people").innerHTML = newusers;
});