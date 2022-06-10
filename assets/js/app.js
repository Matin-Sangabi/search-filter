const searchFilter = document.querySelector(".search-filter");
const parentProduct = document.querySelector(".grid-products");
const filterBtns = document.querySelectorAll(".btn");


let allProducts = [];

const filter = {
  searchITem: "",
};

document.addEventListener("DOMContentLoaded", () => {
    searchFilter.value = "";
  axios
    .get("http://localhost:3000/items")
    .then((res) => {
      allProducts = res.data;
      // render products on Dom
      renderProducts(allProducts, filter);
    })
    .catch((err) => console.log(err));
});

function renderProducts(products, filter) {
  const productsFilter = products.filter((p) => {
    return p.title.toLowerCase().includes(filter.searchITem.toLowerCase());
  });
  parentProduct.innerHTML = "";

  productsFilter.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <div class="product-img">
        <img src="${product.image}" alt="p-${product.class}-${product.id}">
    </div>
    <div class="product-content">
        <span class="price">${product.price} $</span>
        <span class="title">${product.title}</span>
    </div>
    <div class="product-btn">
        <button type="button" class="product-btn">
            <span>Add to cart</span>
        </button>
    </div>`;
    parentProduct.appendChild(productDiv);
  });
}

searchFilter.addEventListener("input", (e) => {
  filter.searchITem = e.target.value;
  renderProducts(allProducts, filter);
});

filterBtns.forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
        filter.searchITem =  e.target.dataset.filter;
        renderProducts(allProducts , filter);
    });
});