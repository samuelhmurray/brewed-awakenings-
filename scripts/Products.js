import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
    let html = "<ul>";
    
    for (const product of products) {
        html += `<li data-type="product"
        data-name="${product.name}"
        data-price="${product.price}"
        data-id="${product.id}"
        
        >${product.name}</li>`;
    }
    
    html += "</ul>";
    
    return html;
};


document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "product") {
    const productName = itemClicked.dataset.name
    const productPrice = +itemClicked.dataset.price
    
    window.alert(`A ${productName} costs $${productPrice.toFixed(2)}`)
  }
});
