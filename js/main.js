// const cartButton = document.querySelector("#cart-button");
// const modal = document.querySelector(".modal");
// const close = document.querySelector(".close");

// cartButton.addEventListener("click", toggleModal);
// close.addEventListener("click", toggleModal);

// function toggleModal() {
//   modal.classList.toggle("is-open");
// }

//day 1

const buttonAuth = document.querySelector(".button-auth"),
  modalAuth = document.querySelector(".modal-auth"),
  closeAuth = document.querySelector(".close-auth"),
  logInForm = document.querySelector("#logInForm"),
  loginImput = document.querySelector("#login"),
  userName = document.querySelector(".user-name"),
  buttonOut = document.querySelector(".button-out"),
  cardsRestaurants = document.querySelector(".cards-restaurants"),
  containerPromo = document.querySelector(".container-promo"),
  restaurants = document.querySelector(".restaurants"),
  menu = document.querySelector(".menu"),
  logo = document.querySelector(".logo"),
  cardsMenu = document.querySelector(".cards-menu");
// мы получаем с браузера тот логин в котором находится пользователь
let login = localStorage.getItem("gloDelivery");

function toogleModalAuth() {
  //toggle это метод в котором добавляет класс если его нет и уберает если есть
  modalAuth.classList.toggle("is-open");
}

function authorized() {
  function logOut() {
    login = null;
    localStorage.removeItem("gloDelivery");
    buttonAuth.style.display = "";
    userName.style.display = "";
    buttonOut.style.display = "";
    buttonOut.removeEventListener("click", logOut);
    checkAuth();
  }
  console.log("Авторизован");

  userName.textContent = login;
  buttonAuth.style.display = "none";
  userName.style.display = "inline";
  buttonOut.style.display = "block";
  buttonOut.addEventListener("click", logOut);
}

function notauthorized() {
  console.log("не авторизован");

  function logIn(event) {
    event.preventDefault(); // не понимаю
    if (loginImput.value) {
      //в let логин будет присваиваться то что будет введено в строке логин
      login = loginImput.value;
      // для того что бы сохранитть логин и находиться на странице до выхода нужно логин добавит в локалсторэдж
      // она находится в консоле в вкладке аппликайшен
      // после мы ее ставим в переменную локал
      localStorage.setItem("gloDelivery", login);
      toogleModalAuth();
      //обработка событий
      buttonAuth.removeEventListener("click", toogleModalAuth);
      closeAuth.removeEventListener("click", toogleModalAuth);
      logInForm.removeEventListener("submit", logIn);
      //сбрасывает в логине имя
      logInForm.reset();
      checkAuth();
    } else {
      alert("Введите пароль ");
    }
  }
  //обработка событий
  buttonAuth.addEventListener("click", toogleModalAuth);
  closeAuth.addEventListener("click", toogleModalAuth);
  logInForm.addEventListener("submit", logIn);
}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notauthorized();
  }
}
checkAuth();

function createCardRectaurant() {
  //в косых ковычках ставим верстку ресторана
  const card = `				
  <a href="restaurant.html" class="card card-restaurant">
  <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
  <div class="card-text">
    <div class="card-heading">
      <h3 class="card-title">Пицца плюс</h3>
      <span class="card-tag tag">50 мин</span>
    </div>
    <!-- /.card-heading -->
    <div class="card-info">
      <div class="rating">
        4.5
      </div>
      <div class="price">От 900 ₽</div>
      <div class="category">Пицца</div>
    </div>
    <!-- /.card-info -->
  </div>
  <!-- /.card-text -->
</a>
<!-- /.card -->
`;
  //метод вставки версти на сайт
  cardsRestaurants.insertAdjacentHTML("beforeend", card);
}
createCardRectaurant();
createCardRectaurant();
createCardRectaurant();

function createCardGood() {
  const card = document.createElement("div");
  card.classname = "card";
  card.insertAdjacentHTML(
    "beforeend",
    `
						<img src="img/pizza-plus/pizza-oleole.jpg" alt="image" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">Пицца Оле-Оле</h3>
							</div>
							<!-- /.card-heading -->
							<div class="card-info">
								<div class="ingredients">Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">440 ₽</strong>
							</div>
						</div>
  `
  );
  cardsMenu.insertAdjacentElement("beforeend", card);
}

function openGoods(event) {
  const target = event.target;
  //Обращение к родителю тыкнутого элемента до заданного класса
  const restaurant = target.closest("card-restaurant");
  if (restaurant) {
    containerPromo.classList.add("hide");
    restaurants.classList.add("hide");
    menu.classList.remove("hide");
  }
}
createCardGood();
createCardGood();
createCardGood();

cardsRestaurants.addEventListener("click", openGoods);
logo.addEventListener("click", function () {
  containerPromo.classList.remove("hide");
  restaurants.classList.remove("hide");
  menu.classList.add("hide");
});
