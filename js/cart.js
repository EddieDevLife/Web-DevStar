// Adiciona um produto ao carrinho no localStorage
function addToCart(product) {
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	cart.push(product);
	localStorage.setItem('cart', JSON.stringify(cart));
	displayCartItems(); // Atualiza a exibição do carrinho
}

// Remove um produto do carrinho no localStorage
function removeFromCart(index) {
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	cart.splice(index, 1);
	localStorage.setItem('cart', JSON.stringify(cart));
	displayCartItems();
}

// Executa quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
	displayCartItems();

	document.getElementById('checkout').addEventListener('click', () => {
		localStorage.removeItem('cart');
		alert('Compra encerrada com sucesso!');
		displayCartItems();
	});
});

// Função para exibir os itens do carrinho
function displayCartItems() {
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	const cartItems = document.getElementById('cart-items');
	const emptyMessage = document.getElementById('empty-message');
	
	cartItems.innerHTML = '';

	if (cart.length === 0) {
		emptyMessage.style.display = 'block';
	} else {
		emptyMessage.style.display = 'none';
		cart.forEach((item, index) => {
			const cartItem = document.createElement('div');
			cartItem.className = 'cart-item';
			cartItem.innerHTML = `
				<h2>${item.title}</h2>
				<p>R$ ${item.price}</p>
				<button onclick="removeFromCart(${index})">Remover</button>
			`;
			cartItems.appendChild(cartItem);
		});

		const total = cart.reduce((sum, item) => sum + item.price, 0);
		const totalElement = document.createElement('div');
		totalElement.innerHTML = `<h3>Total: R$ ${total}</h3>`;
		cartItems.appendChild(totalElement);
	}
}