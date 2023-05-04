document.addEventListener('DOMContentLoaded',()=>{
    //contact form
    document.querySelector('#contact').onclick = ()=>{
        var name = document.querySelector('#name').value;
        var address = document.querySelector('#address').value;
        var email = document.querySelector('#email').value;
        var comment = document.querySelector('#comment').value;

        //store in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('address',address);
        localStorage.setItem('email',email);
        localStorage.setItem('comment',comment);
        alert(`Thanks for your time`)
    }

});

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#login').onclick= ()=>{
        console.log('hiii');
        var lname =document.querySelector('#username').value;
        var lemail = document.querySelector('#useremail').value;
        var name = localStorage.getItem(name);
        var email = localStorage.getItem(email)
        if((lname===name) &&(lemail===email)){
            var nam = localStorage.getItem(name);
            var add = localStorage.getItem(address);
            var em = localStorage.getItem(email);
            var com = localStorage.getItem(comment)

            document.querySelector('#nam').innerHTML=localStorage.getItem(name);
            document.querySelector('#addre').innerHTML=localStorage.getItem(address);
            document.querySelector('#ema').innerHTML=localStorage.getItem(email);
            document.querySelector('#comm').innerHTML=localStorage.getItem(comment);
        }else{
            alert(`Wrong name or email`);
        }
    }
})