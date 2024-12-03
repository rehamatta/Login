const inputs = document.querySelectorAll('input');
const SignUp = document.getElementById('SignUp');

let userList = [];

if(localStorage.getItem('userInfo')) {
    userList = JSON.parse(localStorage.getItem('userInfo'));
}


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    getFormData();
})

function getFormData() {
    let count = 0;
    let user = {
        name: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value
    }
    for(var i=0; i<userList.length; i++) {
        if(inputs[1].value === userList[i].email) {
            count++;
        }
    }
    if(count === 0) {
        userList.push(user);
        localStorage.setItem('userInfo' ,JSON.stringify(userList));
        document.getElementById('success').classList.remove('d-none');
        document.getElementById('emailError').classList.add('d-none');
        
    } else {
        document.getElementById('emailError').classList.remove('d-none');
        document.getElementById('success').classList.add('d-none');
        count = 0;
    } 
}