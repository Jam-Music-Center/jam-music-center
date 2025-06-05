const products = [
  {
    name: "Acoustic Guitar",
    category: "Guitar",
    model: "Yamaha F280",
    price: "₹7,500",
    stock: "12 in stock",
    description: "Great beginner-friendly guitar with a warm tone.",
    image: "https://images.unsplash.com/photo-1587731347763-d8fdd7d8b6b6"
  },
  {
    name: "Digital Keyboard",
    category: "Keyboard",
    model: "Casio CT-X700",
    price: "₹8,200",
    stock: "5 in stock",
    description: "61-key keyboard with excellent features for learners.",
    image: "https://images.unsplash.com/photo-1618238881252-5ceccf3c81e7"
  },
  {
    name: "Electronic Drum Kit",
    category: "Drums",
    model: "Alesis Nitro Mesh",
    price: "₹29,000",
    stock: "3 in stock",
    description: "Compact, mesh-head kit with great sensitivity and feel.",
    image: "https://images.unsplash.com/photo-1597939495576-f71ee1d338d2"
  }
];

const catalog = document.getElementById("catalog");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = `card ${index % 2 === 0 ? 'white' : 'grey'}`;
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p><strong>Model:</strong> ${product.model}</p>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Price:</strong> ${product.price}</p>
    <p><strong>Stock:</strong> ${product.stock}</p>
    <p>${product.description}</p>
  `;
  catalog.appendChild(card);
});
