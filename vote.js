function vote()
{
    var name = document.getElementById("name").value;

    var age = document.getElementById("age").value;

    var country = document.getElementById("country").value;

    var Answer = document.getElementById("Answer");


    if(age>=18 && country=="India"){
        Answer.innerHTML = name + " is eligible👍👍"
        Answer.style.color = "green";
        Answer.style.fontSize = "25px";
        Answer.style.fontWeight = "bold";
    }
    else if(age>=18 && country!="India"){
        Answer.innerHTML = name + " is not Indian"
        Answer.style.color = "red";
        Answer.style.fontSize = "25px";
        Answer.style.fontWeight = "bold";
    }
    else{
        Answer.innerHTML = name + "  is not eligible you are just a child 👼👶"
        Answer.style.color = "red";
        Answer.style.fontSize = "25px";
        Answer.style.fontWeight = "bold";
    
     }
}











































// function vote()
// {
//     var name=document.getElementById("name").value;
//     var age=document.getElementById("age").value;
//     var country=document.getElementById("country").value;
//     var Answer=document.getElementById("Answer");
//     if(age>=18 && country=="India"){
//         Answer.innerHTML = name + " is eligible👍👍"
//         Answer.style.color = "green";
//         Answer.style.fontSize = "25px";
//         Answer.style.fontWeight = "bold";
//     }
//     else if(age>=18 && country!="India"){
//         Answer.innerHTML = name + " is not Indian"
//         Answer.style.color = "red";
//         Answer.style.fontSize = "25px";
//         Answer.style.fontWeight = "bold";
//     }
//     else{
//         Answer.innerHTML = name + "  is not eligible you are just a child 👼👶"
//         Answer.style.color = "red";
//         Answer.style.fontSize = "25px";
//         Answer.style.fontWeight = "bold";
    
//     }
// }