function generator(){
    var alphanumric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
    var password='';
    var pwd_length=16;
    for(var i=1;i<pwd_length;i++){
        var random = Math.floor(Math.random()*alphanumric.length+1);
        password += alphanumric.charAt(random);
    }
    document.getElementById("password").innerText=password;
}