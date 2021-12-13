// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `Nulla cupidatat sit ipsum est quis sunt ad officia.Id labore dolor exercitation minim amet ea qui ut eiusmod pariatur et occaecat exercitation adipisicing.`
  }
];

// const btns = document.querySelectorAll(".filter-btn"); // Returns 0 nodes

const sectionCenter = document.querySelector(".section-center");

// My method
// window.addEventListener("DOMContentLoaded", ()=>{
//   sectionCenter.innerHTML = filter(menu, "all");

//   btns.forEach(btn=>{
//     btn.addEventListener("click", ()=>{
//       const category = btn.value;
//       if(category === "all"){
//         sectionCenter.innerHTML = filter(menu, "all");
//       }else if(category === "Breakfast"){
//         sectionCenter.innerHTML = filter(menu,"breakfast");
//       }else if(category === "Lunch"){
//         sectionCenter.innerHTML =  filter(menu,"lunch");
//       }else if(category === "Shakes"){
//         sectionCenter.innerHTML = filter(menu,"shakes");
//       }
//       // if(btn.dataset.type === "all"){
//       //   sectionCenter.innerHTML = filter(menu, "all");
//       // }else if(btn.dataset.type === "breakfast"){
//       //   sectionCenter.innerHTML = filter(menu,"breakfast");
//       // }else if(btn.dataset.type === "lunch"){
//       //   sectionCenter.innerHTML =  filter(menu,"lunch");
//       // }else if(btn.dataset.type === "shakes"){
//       //   sectionCenter.innerHTML = filter(menu,"shakes");
//       // }
//     });
//   });
// });

// function filter(menuItems, type){
//   let displayMenu = menuItems.map(item=>{
//     const category = `${item.category}`;
//     console.log(category);

//     if(category === type){
//       return fetchItem(item);
//     }

//     if(type === "all"){
//       return fetchItem(item);
//     }
//   });

//   displayMenu = displayMenu.join("");
//   return displayMenu;
// }

// function fetchItem(item){
//   return `<article class="menu-item">
//     <img src=${item.img} alt="${item.title}" class="photo">
//     <div class="item-info">
//       <header>
//         <h4>${item.title}</h4>
//         <h4 class="price">${item.price}</h4>
//       </header>
//       <p class="item-text">
//         ${item.desc}
//       </p>
//     </div>
//   </article>`
// }

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuBtns();
});

// function to display all item in DOM
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // console.log(item);
    // return `<h1>${item.title}</h1>`;
    return `<article class="menu-item">
    <img src=${item.img} alt="${item.title}" class="photo">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });

  displayMenu = displayMenu.join(""); // (method) Array<string>.join(separator?: string): string
  // Adds all the elements of an array into a string, separated by the specified separator string.

  // @param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns(){
  const categories = menu.reduce((values, item)=>{
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  }, ["all"]);
  // console.log(categories);

  const displayCategories = categories.map((category)=>{
    return `<button class="filter-btn" type="button" value=${category} data-type=${category}>${category}</button>` 
  }).join("")

  // console.log(displayCategories);

  const btnContainer = document.querySelector(".btn-container");
  btnContainer.innerHTML = displayCategories; 

  const btns = document.querySelectorAll(".filter-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.type;
      const menuCategory = menu.filter((menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
  
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}