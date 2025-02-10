// for loop;
//for (let x; condition; increment){
// logic
//}

//for (let x=0; x < 5; x++){
   // console.log('Iteration: ', x);
//};

// do  while for in for of 
//do{
   // console.log('Iteration: ',x);
  //  x++;

//}while(x<5);

// for in
//const person = {
  //  name: "john",
  //  age: 30
//};
//for(key in person){
   // console.log(key, person[key]);
//}

//const y = ["ram","shyam","hari","gopal"];
//for(key of y){
   // console.log(key);
//}


// do


//let x =0;
//do{
   // console.log("Iteration: ",x);
   // x++;
//}
//while(x <5);


// condition statements

//const age = 10;
//if(age >= 18){
  //  console.log('Adult');
//};

// if ,else if,else
//const age =18;

//if(age <=18){
  //  console.log("Adult");

//}
//else 
//{
//  console.log('Minor');
//}



//const age =60;

//if(age <=18){
  //  console.log("Adult");

//}
//else 
//{
  //console.log('Minor');
//}


//switch

// const checkRole = (role)=>{
//     switch(role){
//         case "admin":
//             console.log("you are an admin");
//             break;
//             case "editor":
//                 console.log("you are an editor");
//                 break;
//                 case "Viwer":
//                 console.log("you are viwer");
//                 break;
//                 default: 
//                 console.log("you are a default user");

//     }
// };

// checkRole("default");

// control flow

//  console.log(1);
//  console.log(2);
//  console.log(2);
//  console.log(2);
//  console.log(2);
//  console.log(2);
//  console.log(2);
//  console.log(2);

// break= return same 
//continue

 //for (let x=0; x<5; x++){
   // if (x ===5) ;
    //console.log(x);
 //}
 
 //loops types are:for loop ,while loop ,do-while, forEach,nastedloops,infinite loop
 // for
//  for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//while
// let x = 0;
// while (x < 5) {
//     console.log(x);
//     x++;
// }
// do-while
// let x = 0;
// do {
//     console.log(x);
//     x++;
// } while (x < 5);

// forEach
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(num => console.log(num));
// Nested loops
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`(${i}, ${j})`);
//     }
// }
// infinite loops
// while (true) {
//     console.log("This will run forever");
// }

//Loop Control Statements
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
