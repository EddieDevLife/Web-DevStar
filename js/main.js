

document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>R$ ${product.price}</p>
        `;
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.addEventListener('click', () => addToCart(product.id, product.title, product.price));
        productElement.appendChild(buyButton);

        productList.appendChild(productElement);
    });
});

function addToCart(id, title, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, title, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produto adicionado ao carrinho!');
}
