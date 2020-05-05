const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
};
//day 1
const buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.querySelector('#logInForm'),
  loginImput = document.querySelector('#login'),
  userName = document.querySelector('.user-name'),
  buttonOut = document.querySelector('.button-out');
// мы получаем с браузера тот логин в котором находится пользователь
let login = localStorage.getItem('gloDelivery');


function toogleModalAuth() {
  //toggle это метод в котором добавляет класс если его нет и уберает если есть
  modalAuth.classList.toggle('is-open')
}


function authorized() {
  function logOut() {
    login = '';
    localStorage.removeItem('gloDelivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  userName.textContent = login;
  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
  buttonOut.addEventListener('click', logOut);
}

function notauthorized() {
  console.log('не авторизован');

  function logIn(event) {
    event.preventDefault(); // не понимаю
    //в let логин будет присваиваться то что будет введено в строке логин 
    login = loginImput.value;
    // для того что бы сохранитть логин и находиться на странице до выхода нужно логин добавит в локалсторэдж
    // она находится в консоле в вкладке аппликайшен
    // после мы ее ставим в переменную локал
    localStorage.setItem('gloDelivery', login)
    toogleModalAuth();
    //обработка событий
    buttonAuth.removeEventListener('click', toogleModalAuth);
    closeAuth.removeEventListener('click', toogleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    //сбрасывает в логине имя
    logInForm.reset();
    checkAuth();
  }
  //обработка событий
  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);

}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notauthorized();
  }
}
checkAuth();