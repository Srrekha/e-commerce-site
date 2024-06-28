const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",

      // },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = translateX(${-100 * index}vw);

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
const themeSelect = document.getElementById('themeSelect');
const body = document.body;

themeSelect.addEventListener('change', function() {
  const selectedTheme = this.value;
  if (selectedTheme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
const form = document.getElementById('product-form');
const productList = document.getElementById('product-list');

// Load products from local storage
let products = JSON.parse(localStorage.getItem('products')) || [];
displayProducts();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const productType = document.getElementById('product-type').value;
  const productCategory = document.getElementById('product-category').value;

  if (productType && productCategory) {
    const product = { type: productType, category: productCategory };
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
    form.reset();
  }
});

function displayProducts() {
  productList.innerHTML = '';

  products.forEach((product, index) => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const typeElement = document.createElement('p');
    typeElement.textContent = Product Type: ${product.type};

    const categoryElement = document.createElement('p');
    categoryElement.textContent = Product Category: ${product.category};

    productItem.appendChild(typeElement);
    productItem.appendChild(categoryElement);

    productList.appendChild(productItem);
  });
}
// Product data
const productData = {
  name: "Product Name",
  description: "This is a description of the product.",
  imageUrl: "https://via.placeholder.com/300x200"
};

// Get the necessary elements
const productImage = document.getElementById("product-image");
const productName = document.getElementById("product-name");
const productDescription = document.getElementById("product-description");

// Display the product data
productImage.src = productData.imageUrl;
productName.textContent = productData.name;
productDescription.textContent = productData.description;
// Add event listener to the checkbox
const checkbox = document.getElementById('my-checkbox');
checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log('Checkbox is checked!');
  } else {
    console.log('Checkbox is unchecked.');
  }
});
