
// setTimeout(callback,setInterval,parameter...)

// console.log('start');
// const timeId= setTimeout((age,name)=>{
//     console.log(name,age)
// },2000,"john",20);

// clearTimeout(timeId);
// console.log('end');

// let x =5;
// const timeId1 = setInterval(()=>{
//     x--;
//     console.log(x);
//     if(x=== 0){
//         clearInterval(timeId1);
//     }
// },1000);

// const promise = new Promise((resolve,reject)=>setTimeout(() => {
    

//    console.log('data fetching')
//    resolve('data loaded')
// },2000))

// promise.then((data)=>console.log("Then",data))
// .catch((err)=>console.log('error occurred:',err));

// const fetchData = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id) {
//                 resolve(`Data loaded with id ${id}`);
//             } else {
//                 reject("Id is required");
//             }
//         }, 2000);
//     });
// };

// Example usage:
// fetchData(10)
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

// fetchData().then((data)=>console.log('then,data'))
// .catch((err) => console.log("error",err))
// .finally(()=> console.log("finally"));


//try catch
// const fetchData = (id) => {
//     return new Promise((resolve, reject) => 
//         setTimeout(() => {
//             if (id) {
//                 resolve(`Data loaded with id ${id}`);
//             } else {
//                 reject("Id is required");
//             }
//         }, 2000))
//     }
//        async function  getData (){
//         try{
//             const promise1 = fetchData(1)
//             const promise2 = fetchData(2)
//             console.log(response)
//         } catch (error){
//           console.log("err",error)
//         }finally{
//             console.log('finally')
//         }
//        }
//     getData();



// //try it catch fetch use task post
// const fetchData2 = async (id) => {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/todos/2')
//     return response.json();
// };

// async function getData() {
//     try {
        // Fetching multiple requests simultaneously
//         const promise1 = fetchData2(1);
//         const promise2 = fetchData2(2);

//         const [response1, response2] = await Promise.all([promise1, promise2]);

//         console.log(response1);
//         console.log(response2);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }

// getData(); // Call the function

const postData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result; // Resolves with fetched data
    } catch (error) {
        throw new Error(`Fetch error: ${error.message}`);
    }
};

// Example usage:
postData("https://jsonplaceholder.typicode.com/posts", { title: "Test", body: "Hello World", userId: 1 })
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error.message));
