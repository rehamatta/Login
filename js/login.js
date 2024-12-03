const userList = JSON.parse(localStorage.getItem('userInfo'));
let myName;

console.log(userList);

let checkValues = document.querySelectorAll('input');
console.log(checkValues)

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    checkData();
})

function checkData() {
    let count = 0;
    for(let i=0; i<userList.length; i++) {
        if(checkValues[0].value === userList[i].email && checkValues[1].value  === userList[i].password) {
            count++;
            myName = userList[i].name;
            localStorage.setItem('myName', myName);
        } 
    }
    if(count) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('emailOrPassword').classList.remove('d-none');
    }
    console.log(myName);
}

localStorage.setItem('myName', JSON.stringify(myName));
