function Strength(password){
    let i = 0;
    if(password.length >=3){
        i++;
    }
    if(password.length >=6){
        i++;
    }
    if(password.length >= 10){
        i++;
    }
    if(/[A-Z]/.test(password)){
        i++;
    }
    if(/[0-9]/.test(password)){
        i++;
    }
    if(/[A-Za-z0-9]/.test(password)){
        i++;
    }
    return i;
}

let con = document.querySelector('.container')
document.addEventListener('keyup', function(e){
    let password = document.querySelector('#pass').value;

    let strength = Strength(password);
    if(strength == 0){
        con.classList.remove('poor');
        con.classList.remove('medium');
        con.classList.remove('strong');
    }
    else if(strength <= 3 && strength >0){
        con.classList.add('poor');
        con.classList.remove('medium');
        con.classList.remove('strong');
    }
    else if(strength >= 3 && strength < 5){
        con.classList.remove('poor');
        con.classList.add('medium');
        con.classList.remove('strong');
    }
    else {
        con.classList.remove('poor');
        con.classList.remove('medium')
        con.classList.add('strong')
    }
})


let pw = document.querySelector('#pass');
let show = document.querySelector('.show');
show.onclick = function() {
    if(pw.type == 'password'){
        pw.setAttribute('type', 'text');
        show.classList.add('hide');
    }
    else{
        pw.setAttribute('type','password');
        show.classList.remove('hide');
    }
}