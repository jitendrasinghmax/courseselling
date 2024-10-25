let container=document.getElementById('container');
fetch('http://localhost:4000/landing', {
    method: "GET",
    redirect: "follow"
}).then((response) => response.json())
    .then((result) =>{
        result.courses.forEach((course)=>{
            let card=document.createElement('div');
            card.id="card";
            card.innerHTML=course.title;
            container.appendChild(card);
        })
    })
    .catch((error) => console.error(error));
document.getElementById('signup').addEventListener('click',()=>{
    let redir=document.createElement('a');
    redir.href='http://localhost:4000/ui/signup';
    redir.click();
})
document.getElementById('signin').addEventListener('click',()=>{
    let redir=document.createElement('a');
    redir.href='http://localhost:4000/ui/signin';
    redir.click();
})
if(localStorage.getItem("cs")){
    var myHeaders = new Headers();
    myHeaders.append("token", localStorage.getItem("cs"));
    fetch('http://localhost:4000/user/details', {
        method: "GET",
        headers:myHeaders,
        redirect: "follow"
    }).then((response) => response.json())
    .then((result)=>console.log(result))
}
