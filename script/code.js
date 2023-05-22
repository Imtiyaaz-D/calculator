let firstOp = 0;
let operator = "";
let results = document.querySelector('#output')
//display
function display(value) {
    results.value += value;
}
//backspace
document.querySelector('#delete').addEventListener('click',()=>{
    let output = results.value;
    results.value = output.slice(0 , -1);
})
//Clear buttton
document.querySelector('#allclear').addEventListener('click',()=>{
    let output = results.value;
    results.value = output.slice(output.length);
})
// Operators

// document.querySelector('#division').addEventListener('click', ()=>{
//     firstOp = results.value;
//     operator = "/";
//     clear();
// })
// document.querySelector('#addition').addEventListener('click', ()=>{
//     firstOp = results.value;
//     operator = "+";
//     clear();
// })
// document.querySelector('#subtraction').addEventListener('click', ()=>{
//     firstOp = results.value;
//     operator = "-";
//     clear();
// })
// document.querySelector('#mutiply').addEventListener('click', ()=>{
//     firstOp = results.value;
//     operator = "*";
//     clear();
// })
document.querySelectorAll('.operator').forEach((ops)=>{
    ops.addEventListener('click',(e)=>{
        results.value += e.target.innerText
    })
})
// equal

// document.querySelector('#equals').addEventListener('click',()=>{
//     let secondOp = results.value;
//     switch(operator){
//         case '/':
//             results.value =
//             eval(`${firstOp}/${secondOp}`).toFixed(2)
//             break; 

//     }
// })
document.querySelector('#equals').addEventListener('click',()=>{
    results.value = eval(results.value).toFixed(2)
})

function clear() {
    results.value = "";

}
