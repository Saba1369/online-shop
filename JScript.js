const topSectionContent = [
  {
    text: ".به فروشگاه تیدا خوش آمدید",
    textColor: "rgb(211, 55, 231)",
    imgSrc: "assets/2.png",
    bg:
      "linear-gradient(180deg,rgba(247, 209, 217) 0%,rgb(247, 209, 217) 50%,rgb(202, 247, 244) 50%,rgba(202, 247, 244) 100%)",
  },
  {
    text: "برای تمام سلیقه ها",
    textColor: "rgb(130,171,0)",
    imgSrc: "assets/bag1.png",
    bg:
      "linear-gradient(180deg, rgba(160,252,148,1) 0%, rgba(160,252,148,1) 50%, rgba(249,252,123,1) 50%, rgba(249,252,123,1) 100%)",
  },
  {
    text: ".آسوده خاطر خرید کنید",
    textColor: "blue",
    imgSrc: "assets/3.png",
    bg:
      "linear-gradient(180deg, rgba(204,249,239,1) 0%, rgba(204,249,239,1) 50%, rgba(213,252,161,1) 50%, rgba(213,252,161,1) 100%)",
  },
];

newArrival = [
  {
    title: "شلوار دامنی نخی",
    imgNum: 2,
    rate: 4,
    price: "245,000",
    size: "فری سایز از 38 تا 48",
  },
  {
    title: "ست تیشرت شلوارک",
    imgNum: 5,
    rate: 5,
    price: "445,000",
    size: "فری سایز از 38 تا 46",
  },
  {
    title: "تونیک دو تکه تنسل",
    imgNum: 3,
    rate: 4.5,
    price: "435,000",
    size: "فری سایز از 38 تا 48",
  },
  {
    title: "ست پرنیان",
    imgNum: 7,
    rate: 5,
    price: "525,000",
    size: "فری سایز از 38 تا 48",
  },
  {
    title: "شلوار تیپ لاکرا",
    imgNum: 2,
    rate: 4.5,
    price: "325,000",
    size: "از 38 تا 60",
  },
  {
    title: "ست خاطره",
    imgNum: 2,
    rate: 4.5,
    price: "325,000",
    size: "از 38 تا 60",
  },
  {
    title: "کیف تارا",
    imgNum: 1,
    rate: 4.5,
    price: "325,000",
    size: "از 38 تا 60",
  },
  {
    title: "کمربند بابونه",
    imgNum: 2,
    rate: 4.5,
    price: "325,000",
    size: "فری سایز",
  },
];

const products = [
  {
    title: "پوشاک",
    types: ["ست", "شلوار", "شومیز", "مانتو", "تونیک", "تیشرت"],
  },
  { title: "کیف", types: ["کوله پشتی", "کیف دوشی"] },
  { title: "کمربند", types: ["زنانه", "مردانه"] },
];

let j = 0;
let clickCircle = false;

function showThings(ID1, ID2) {
  if (document.getElementById(ID1).textContent == "do_not_disturb_on") {
    document.getElementById(ID1).textContent = "add_circle";
    document.getElementById(ID2).style.display = "none";
  } else {
    document.getElementById(ID1).textContent = "do_not_disturb_on";
    document.getElementById(ID2).style.display = "block";
  }
}

function addProduct() {
  for (let i = 0; i < products.length; i++) {
    document.getElementById(
      "products-menu"
    ).innerHTML += `<li><span id="pro${i}" class="material-symbols-outlined" onclick="showThings('pro${i}','title${i}')">add_circle</span><div><span>${products[i].title}</span><ul id="title${i}"></ul></div></li>`;
    products[i].types.forEach((item) => {
      document.getElementById(`title${i}`).innerHTML += `<li>${item}</li>`;
    });
  }
}

function goThisCircle(circleNumber) {
  clickCircle = true;
  j = circleNumber;
  createTopSection();
  clickCircle = false;
}

function createTopSection() {
  const topSec = document.getElementById("top-sec");
  topSec.innerHTML = `<img class="wear${j}" src="${topSectionContent[j].imgSrc}" alt="products"/> <h2>${topSectionContent[j].text}</h2>`;
  if (j == 1) {
    topSec.style.flexDirection = "row-reverse";
  } else {
    topSec.style.flexDirection = "row";
  }
  topSec.style.background = `${topSectionContent[j].bg}`;

  for (let k = 0; k < topSectionContent.length; k++) {
    document.getElementById(`circle${k}`).textContent =
      "radio_button_unchecked";
  }
  document.getElementById(`circle${j}`).textContent = "check_circle";
}

function changeTopSection() {
  createTopSection();
  if (!clickCircle) {
    if (j === 2) {
      j = 0;
    } else {
      j++;
    }
  }
  setTimeout(changeTopSection, 4000);
}

function getAnimation(className) {
  let time = 0.5;
  document.querySelectorAll(`.${className}`).forEach((item) => {
    item.classList = "anim-class";
    item.style.animationDuration = time + "s";
    item.style.opacity = 1;
    time += 0.5;
  });
}
let c = 1;
let num = 4;
function showNewProducts() {
  const NewProducts = document.getElementById("new-arrival");
  newArrival.forEach((item) => {
    NewProducts.innerHTML += `<figure class="before-anim${num}"><img src="assets/${c}1.png" alt="Image"><figcaption><a href="#"><h2 class="product-name">${item.title}</h2></a><div id="rate${c}"></div><p> تومان </p><span>${item.price}</span></figcaption><i class="fa fa-shopping-basket basket-on-img"></i></figure>`;
    for (let s = 0; s < 5; s++) {
      document.getElementById(`rate${c}`).innerHTML +=
        '<span class="fa fa-star star" style="-webkit-text-fill-color: #000;"></span>';
    }
    c += 1;
    if (c == 5) {
      num = 5;
    }
  });
}
{
  /* <i class="fa fa-star-half-o" style="color:gold;"></i> */
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    getAnimation("before-anim2");
  }
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    getAnimation("before-anim3");
  }
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    getAnimation("before-anim4");
  }
  if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    getAnimation("before-anim5");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addProduct();
  changeTopSection();
  showNewProducts();
});
