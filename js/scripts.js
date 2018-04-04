let Job = "Multimediedesigner";
let where = "Copenhagen";
let partner = "Me";
let future="I will be a " + Job + " in " + where + ". I will marry " + partner;

let headLevel1 = document.querySelector("#myHeader");

headLevel1.addEventListener("click", changeTextContent);

console.log(headLevel1.textContent);

//headLevel1.textContent = future;

function changeTextContent(){
    headLevel1.textContent = future;
}
