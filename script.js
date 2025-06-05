const products = [
  {
    name: "Acoustic Guitar",
    category: "Guitar",
    model: "Yamaha F280",
    price: "₹7,500",
    stock: "12 in stock",
    description: "Great beginner-friendly guitar with a warm tone.",
    image: "https://www.bing.com/images/search?view=detailV2&ccid=nsSMfsQZ&id=9AB60113282412E6FF145CCB9BF3DCE4A2A155AE&thid=OIP.nsSMfsQZddGDVgXgb7xuxQHaLH&mediaurl=https%3a%2f%2fdn9ml16rd2hb8.cloudfront.net%2f2019%2f09%2f187-3972-Fender-Acoustic-Guitar_MG_2913.jpg&exph=4104&expw=2736&q=acoutstic+guitar&simid=608024128753390631&FORM=IRPRST&ck=9C2B4A4A400465DE4C16A8ACDFC81BB1&selectedIndex=0&itb=0"
  },
  {
    name: "Digital Keyboard",
    category: "Keyboard",
    model: "Casio CT-X700",
    price: "₹8,200",
    stock: "5 in stock",
    description: "61-key keyboard with excellent features for learners.",
    image: "https://www.bing.com/images/search?view=detailV2&ccid=Sbmkyt36&id=3901C244C461525B6ABC7BA61F21693712F4771C&thid=OIP.Sbmkyt36aRZ7X1Z_Gqom-wHaHa&mediaurl=https%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0202%2f0250%2fproducts%2fDGX660B-angle-top.jpg%3fv%3d1478633496&exph=2048&expw=2048&q=digital+keyboard&simid=608026800249578034&FORM=IRPRST&ck=73527AB8970B7E4ECF24C11A47D4C8E4&selectedIndex=1&itb=0"
  },
  {
    name: "Electronic Drum Kit",
    category: "Drums",
    model: "Alesis Nitro Mesh",
    price: "₹29,000",
    stock: "3 in stock",
    description: "Compact, mesh-head kit with great sensitivity and feel.",
    image: "https://www.bing.com/images/search?view=detailV2&ccid=fTHt%2bejB&id=4DA192D98DB5A55A8F9146BDFF33C7BA18FB4C5A&thid=OIP.fTHt-ejBdfo1fG-YSZ_E2AHaFw&mediaurl=https%3a%2f%2fmedia.sweetwater.com%2fimages%2fitems%2f1800%2fTD27KVSet-xlarge.jpg%3fv%3de28ee586171fc1d8&exph=1398&expw=1800&q=electronic+drum+kit&simid=607998706844321381&FORM=IRPRST&ck=A7B948AB92AE09D289E66CE370C407AC&selectedIndex=2&itb=0"
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
