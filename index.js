let h1 = document.querySelector('h1');
let calc = ()=>{
    let inputVal = document.getElementById("discount").value;
    let tenPer = (inputVal*10)/100;
    let result = inputVal - tenPer;
    h1.textContent = `Result: ${result}`;
}