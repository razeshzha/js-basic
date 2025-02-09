//const person = {
 //name: 'john',
 //age: 30,
//};
//console.log(person.name);
//console.log(person.age);
//console.log(person["age"]);


//const person ={
 //

 const product = {
    name: "apple",
    price: 20,
    quantity: 10,
    color: "red",
 }
 console.log([product.name, product.price, product.quantity]);
 Object.seal(product);
 product.price = 30;
 product.quantity = 20;
 product.color = "green";
 console.log(product);

 console.log(Object.keys(product));
 console.log(Object.values(product));
 console.log(Object.entries(product));
