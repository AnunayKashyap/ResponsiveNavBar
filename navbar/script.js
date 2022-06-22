// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.classname === "topnav"){
        x.classname += "responsive";
        }
        else{
            x.className = "topnav";
        }
}