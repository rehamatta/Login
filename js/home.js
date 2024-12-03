const userList = JSON.parse(localStorage.getItem('userInfo'));
const myName = localStorage.getItem('myName');
let welcomeName = document.getElementById('welcome-name');

welcomeName.innerHTML = `
      <p class="h1 text-info">Welcome ${myName}
      <i class="fa-solid fa-face-grin-hearts"></i>
      </p>
`