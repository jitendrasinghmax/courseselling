const signin=()=>{
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    fetch('http://localhost:4000/user/signin', {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify({
            "email":email,
            "password":password
        }),
        redirect: "follow"
    }).then((response) => response.json())
    .then((result)=>{
        if(result.sucess){
           localStorage.setItem("cs",result.token);
           let a=document.createElement('a');
           a.href="http://localhost:4000/ui"
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
document.getElementById("signin").addEventListener("click",signin);
console.log("signup script connected")