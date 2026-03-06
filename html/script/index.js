

const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => displayProducts(json));
};
const displayProducts = (products) => {
  // 1.get the container & empty the container
  const productContainer = document.getElementById("product-container");
  productContainer.textContent = "";
  // 2.get into every products
  for (const product of products) {
    console.log(product);
    // 3.crate Element for every product
    const productElement = document.createElement("div");
    // 4.set the content of the element
    productElement.innerHTML = `
    <div class="w-full md:w-1/2 lg:w-1/3 p-4">
        <h1 class="text-2xl font-bold mb-4">Product ID: ${product.id}</h1>
    </div>
               <div class="  card bg-gray-100 shadow-md rounded-lg p-4">
                    <img class="w-full h-48 object-cover mb-4" src="${product.image}" alt="${product.title}">
                    <div class="flex items-center mb-2">
                    <button class="bg-blue-500 text-white px-3 py-1 rounded mr-2">Category: ${product.category}</button>  
                    <span class="text-yellow-500 mr-2">⭐ ${product.rating.rate}</span>
                      <span class="text-gray-600">(${product.rating.count} reviews)</span>
                    </div>
                    <h2 class="text-lg font-semibold mb-2">${product.title}</h2>
                    <span class="text-gray-700 mb-4">$${product.price.toFixed(2)}</span>
                    
                     
                    </div>
              </div> `;
    // 5.append into container
    productContainer.appendChild(productElement);
  }
}
loadProducts();
