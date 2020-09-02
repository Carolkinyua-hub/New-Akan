//back end logic//









//front-end logic//


window.addEventListener("DOMcontentLoaded"), (event) => {
    console.log("DOM fully loaded and parsed");
}
//create variable for form element=document.querySelector("elementid")
function submit(event) {
    let myForm = document.querySelector("#form");
    myForm.addEventListener("submit");
    event.preventDefault();
    var d = document.querySelector("#birthdate").value
    console.log("dob");
};











































// function akanName(){
//     let bday=document.getElementById("dob");
//     console.log(bday) 
//     // let mm=parseInt(d.getMonth());
//     // let yy=parseInt(d.getFullYear());
//     // let cc=parseInt(yy.slice(0,1));
//     // let dd =parseInt(bday.getDate());
//     // let db=Math.round((((cc/4) -2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7);

// }









// document.getElementById("check").innerHTML="Your Akan name is" +AkanName() +".";