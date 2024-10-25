const signup=()=>{
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    fetch('http://localhost:4000/user/signup', {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify({
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "password":password
        }),
        redirect: "follow"
    }).then((response) => response.json())
    .then((result)=>{
        if(result.sucess){
            let a=document.createElement('a');
            a.href="http://localhost:4000/ui/signin"
            a.click();
        }else{
            let errmsg=document.createElement('div');
            errmsg.id="err-msg";
            result.message.forEach((error)=>{
                let p=document.createElement('p')
                p.innerText=error
                errmsg.appendChild(p)
            });
            let errmagchild=document.getElementById("err-msg");
            if(errmagchild)document.body.removeChild(errmagchild)
            document.body.appendChild(errmsg);
        }
    });
}
document.getElementById("signup").addEventListener("click",signup);
console.log("signup script connected")