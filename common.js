const navbar = document.querySelector('.head');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('head-active');
    } 
    else {
        navbar.classList.remove('head-active');
    }
};


function vote(){
    var a = document.getElementById("name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("Message").value;
    if(a == null || a == "")
    {
        alert("Enter Name")
    }
    else if(b == null || b == "")
    {
        alert("Enter E-Mail")
    }
    else if(c == null || c == "")
    {
        alert("Enter Feedback")
    }
    else{
        var newLine = "\r\n"
        var msg = "Thank You!!";
            msg += newLine;
            msg += "Feedback has been submitted sucessfully" ;
        alert(msg)
    }
}

function f1(){
    var a = document.getElementById("name").value;
    if(a == null || a == "")
    {
        alert("Enter Name")
    }
}
function f2(){
    var b = document.getElementById("email").value;
    if(b == null || b == "")
    {
        alert("Enter E-Mail")
    }
}
function f3(){
    var c = document.getElementById("Message").value;
    if(c == null || c == "")
    {
        alert("Enter Feedback")
    }
}

function submit(){
    var news = document.getElementById("news").value;
    
    if(news == "" || news == null){
      alert("Enter your E-Mail.")

    }

    else{
      alert("You are now Subscribed to Newsletter.")
    }
}