console.log("this is client side code!");

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })

const inputForm = document.querySelector("form");
const input = document.querySelector("input");

inputForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = input.value;
    console.log(value);
})