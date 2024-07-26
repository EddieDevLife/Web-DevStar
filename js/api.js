async function fetchProducts() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=notebooks');
    const data = await response.json();
    return data.results;
}
