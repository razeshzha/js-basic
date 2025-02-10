// hoisting
// console.log(x);
// var x =1
// console.log(x);
// greet();

// var greet = function(){
//     console.log("hello,World!");
// };
// console.log(greet);

// let hoisting
// let x = 12;

// console.log(x);
 // const let =same

 // closures

//  function outer(){
//     var x = 1;
//     return function inner(){
//         console.log(x);
//     };
//     x = 100
//     inner();
//  }
//  outer();
//  const func = outer();
//  func();

// function outer() {
//     var x = 1;
//     x = 100;  // Update x to 100 before returning inner
//     return function inner() {
//         console.log(x);
//     };
// }

// const func = outer();
// func();  // Output: 100


// 
// function outer(a) {
//     return function inner(b) {
//         console.log(a * b);
//     };
// }

// const multiplyBy5 = outer(5);  
// multiplyBy5(10);  

// const multiplyBy2 = outer(2);  
// multiplyBy2(8); 

// const multiplyBy6 = outer(2);
// multiplyBy2(6);
//   function  counter (){
//     let count = 0;

//     return function incretment(){
//         count++
//         console.log(count);
//     }
//   }
//   const incrementCount =counter();
//   incrementCount();
//   incrementCount();

// increment and decrement

// function counter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         }
//     };
// }

// const myCounter = counter();

// // myCounter.increment(); 
// // myCounter.increment();
 
// myCounter.decrement();
// myCounter.decrement();



// function add (num){
//     let cache = {}
//     return function inner (){
//         if (num in cache){
//             console.log('log from cache',cache[num])
//         }else{
//         console.log('computing')
//         cache[num]=num +10;
//         console.log(cache[num])
//     }
// }
// }

// const func = add();
// func(10);
 //const func2 =add(10)
// func(20)



//task
// withdraw
// deposite
// main balance

function createBankAccount(initialBalance) {
    let balance = initialBalance;  // Private variable (closure)

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: $${amount}`);
            } else {
                console.log("Deposit amount must be positive");
            }
        },

        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}`);
            } else {
                console.log("Insufficient balance or invalid amount");
            }
        },

        getBalance() {
            console.log(`Current balance: $${balance}`);
        }
    };
}

// Create a new bank account with an initial balance of $1000
const myAccount = createBankAccount(1000);

// Perform transactions
myAccount.deposit(500);   // Deposits $500
myAccount.withdraw(200);  // Withdraws $200
myAccount.getBalance();   // Shows current balance
