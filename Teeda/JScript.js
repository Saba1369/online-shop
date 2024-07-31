// const belts =["زنانه","مردانه"]
const products = [
  { title: "پوشاک", types: ["ست", "شلوار", "شومیز", "مانتو"] },
  { title: "کیف", types: ["کوله پشتی", "کیف دوشی"] },
  { title: "کمربند", types: ["زنانه", "مردانه"] },
];

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
    products[i].types.forEach(item => {
      document.getElementById(
        `title${i}`
      ).innerHTML += `<li>${item}</li>`;
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addProduct();
});
