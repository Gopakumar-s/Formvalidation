function validateTextbox(){
    var box=document.getElementById("name");
    var box2=document.getElementById("address")
    var box3=document.getElementById("phone")
    var box4=document.getElementById("email")
    

    if (box.value.length <4 || ""){
        alert("This field is mandatory");
        box.focus();
        box.style.border="solid 3px red"
        return false;
    }
    if (box2.value.length <4 || ""){
        alert("This field is mandatory");
        box2.focus();
        box2.style.border="solid 3px red"
        return false;
    }
    if (box3.value.length <4 || ""){
        alert("This field is mandatory");
        box3.focus();
        box3.style.border="solid 3px red"
        return false;
    }
    if (box4.value.length <4 || ""){
        alert("This field is mandatory");
        box4.focus();
        box4.style.border="solid 3px red"
        return false;
    }else{
        alert("Your Form Submitted Successfully");
    }
}