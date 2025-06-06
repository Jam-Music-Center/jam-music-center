const products = [
  {
    name: "Acoustic Guitar",
    category: "Guitar",
    model: "Yamaha F280",
    price: "₹7,500",
    stock: "12 in stock",
    description: "Great beginner-friendly guitar with a warm tone.",
    image: "https://dn9ml16rd2hb8.cloudfront.net/2019/09/187-3972-Fender-Acoustic-NiggaGuitar_MG_2913.jpg"
  },
  {
    name: "Digital Keyboard",
    category: "Keyboard",
    model: "Casio CT-X700",
    price: "₹8,200",
    stock: "5 in stock",
    description: "61-key keyboard with excellent features for learners.",
    image: "https://cdn.shopify.com/s/files/1/0202/0250/products/DGX660B-angle-top.jpg?v=1478633496"
  },
  {
    name: "Electronic Drum Kit",
    category: "Drums",
    model: "Alesis Nitro Mesh",
    price: "₹29,000",
    stock: "3 in stock",
    description: "Compact, mesh-head kit with great sensitivity and feel.",
    image: "https://media.sweetwater.com/images/items/1800/TD27KVSet-xlarge.jpg?v=e28ee586171fc1d8"
  }
];

const catalog = document.getElementById("catalog");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = `card ${index % 2 === 0 ? 'white' : 'grey'}`;

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;

  // If image fails to load, use placeholder and add animation
  img.onerror = () => {
    img.src = "assets/images/no-image.png"; // adjust if your HTML is in a subfolder
    img.classList.add("placeholder");
  };

  card.appendChild(img);
  card.innerHTML += `
    <h3>${product.name}</h3>
    <p><strong>Model:</strong> ${product.model}</p>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Price:</strong> ${product.price}</p>
    <p><strong>Stock:</strong> ${product.stock}</p>
    <p>${product.description}</p>
  `;

  catalog.appendChild(card);
});
