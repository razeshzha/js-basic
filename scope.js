// scope

// var let const
// function scope
// const helloWorld = () =>{
//     var x = 1
//     let y = 2
//     const z = 3
//     console.log(x, y, z);
    
    
// }
// console.log('function scope var', y);

// lexical scope

const lexicalscope = () => {
    const x = "outer";

    const inner = ()=>{
        const y = "inner"
        console.log(x, y);
    }
    inner();


}
lexicalscope();