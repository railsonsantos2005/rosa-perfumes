// Sample products data
const products = [
    {
        id: 1,
        name: "Eau de Parfum Floral",
        price: 299.90,
        image: "https://via.placeholder.com/300",
        description: "Perfume floral com notas de jasmim e gardênia"
    },
    {
        id: 2,
        name: "Eau de Toilette Cítrico",
        price: 199.90,
        image: "https://via.placeholder.com/300",
        description: "Aroma fresco com notas cítricas"
    },
    {
        id: 3,
        name: "Eau de Parfum Oriental",
        price: 399.90,
        image: "https://via.placeholder.com/300",
        description: "Fragrância oriental com notas de âmbar e baunilha"
    }
];

// Shopping cart functionality
let cart = [];

// DOM Elements
const productGrid = document.querySelector('.product-grid');
const cartCount = document.querySelector('.cart-count');
const contactForm = document.getElementById('contact-form');

// Initialize products
function initializeProducts() {
    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>R$ ${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        <p class="description">${product.description}</p>
    `;
    return card;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`Produto adicionado ao carrinho: ${product.name}`);
    }
}

// Update cart count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    contactForm.reset();
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
});
