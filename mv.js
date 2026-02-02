const products = [
  { id: 1, name: "dersses", price: 499, category: "clothing", img: "https://tse2.mm.bing.net/th/id/OIP.cNxVvMBxIKQFhPoMkMBJTQHaEK?pid=Api&P=0&h=180" },
  { id: 2, name: "frock", price: 1999, category: "clothing", img: "https://tse4.mm.bing.net/th/id/OIP.bX0BYeeqBn51QrEnpRUzGQHaHa?pid=Api&P=0&h=180" },
  { id: 3, name: "shirts", price: 1499, category: "clothing", img: "https://tse3.mm.bing.net/th/id/OIP.MunT5-i-ZcS9tZ_T4dKzSgHaFj?pid=Api&P=0&h=180" },
  { id: 4, name: "Jeans", price: 1299, category: "clothing", img: "https://tse2.mm.bing.net/th/id/OIP.BBVRL2eV8i1sXnuOpijWpQHaKX?pid=Api&P=0&w=300&h=300" },
  { id: 5, name: "sweetour", price: 999, category: "clothing", img: "https://tse2.mm.bing.net/th/id/OIF.NZk0QjjtnlnrgzIi2Zs2rQ?pid=Api&P=0&h=180" },
  { id: 6, name: "west-were", price: 499, category: "clothing", img: "https://tse2.mm.bing.net/th/id/OIP.4k53PEBdMBaFdQa2Q1Z4hQHaKL?pid=Api&P=0&h=180" },
  { id: 7, name: "gown", price: 1999, category: "clothing", img: "https://tse1.mm.bing.net/th/id/OIP.krfPJBgGvOrOxDhq_GIeJQHaLH?pid=Api&P=0&h=180" },
  { id: 8, name: "t-shirts", price: 1499, category: "clothing", img: "https://tse2.mm.bing.net/th/id/OIP.O_oWS2rIZUzG0Lejb4FVeAHaE8?pid=Api&P=0&h=180" },
  { id: 9, name: "Jeans", price: 1299, category: "clothing", img: "https://tse2.mm.bing.net/th/id/OIP.I_xxghruXG4eE8NaVtxj6gHaJQ?pid=Api&P=0&h=180" },
  { id: 10, name: "saree", price: 999, category: "clothing", img: "https://tse4.mm.bing.net/th/id/OIP.RQ_GkM6gQczk_urKbqsxSwHaLz?pid=Api&P=0&h=180" },
  { id: 11, name: "saree", price: 499, category: "clothing", img: "https://tse1.mm.bing.net/th/id/OIP.O5GTTflgtVTFm9y1p7wS4AHaJ3?pid=Api&P=0&h=180" },
  { id: 12, name: "Shoes", price: 1999, category: "footwear", img: "https://tse1.mm.bing.net/th/id/OIP.4iPToPbYE_v2PdpIVKznsQHaJ4?pid=Api&P=0&h=180" },
  { id: 13, name: "Watch", price: 1499, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIP.zQlff-hmX9FjYCLBI9fGpgHaE5?pid=Api&P=0&h=180" },
  { id: 14, name: "chunnis", price: 1299, category: "clothing", img: "https://tse4.mm.bing.net/th/id/OIP._GNKunjw1aHrTVScBHZJowHaHa?pid=Api&P=0&h=180" },
  { id: 15, name: "laptop", price: 999, category: "electronics", img: "https://tse2.mm.bing.net/th/id/OIP.DTIRj31fw6nQv6ACqwMjWAHaEK?pid=Api&P=0&h=180" },
  { id: 16, name: "shoes", price: 499, category: "footwear", img: "https://tse1.mm.bing.net/th/id/OIP.iDMkOiYvoFy3jHpSyUzKCQHaE1?pid=Api&P=0&h=180" },
  { id: 17, name: "slippers", price: 1999, category: "footwear", img: "https://tse1.mm.bing.net/th/id/OIP.pO_64tOj21X2_MJ5tzM_nwHaFy?pid=Api&P=0&h=180" },
  { id: 18, name: "earings", price: 1499, category: "accessories", img: "https://tse1.mm.bing.net/th/id/OIP.FOyg-kyaUwaux-NBANqovAHaHW?pid=Api&P=0&h=180" },
  { id: 19, name: "traditionalwear", price: 1299, category: "clothing", img: "https://tse3.mm.bing.net/th/id/OIP.cRsn-ln-P5YjOVnhHQBi7QHaGu?pid=Api&P=0&h=180" },
  { id: 20, name: "phone", price: 999, category: "electronics", img: "https://tse4.mm.bing.net/th/id/OIP.6f_qBGdZ1mStK9idCXRgQQAAAA?pid=Api&P=0&h=180" },
  { id: 21, name: "long-frock", price: 499, category: "clothing", img: "https://tse1.mm.bing.net/th/id/OIP.YNgOzcDWaxmKnqY0PSPQSgHaJQ?pid=Api&P=0&h=180" },
  { id: 22, name: "healls", price: 1999, category: "footwear", img: "https://tse4.mm.bing.net/th/id/OIP.6a6y4R3YYbRetn2S8DPxDQHaEM?pid=Api&P=0&h=180" },
  { id: 23, name: "clips", price: 1499, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIP.cl7DBHh2UtgPhBUTECvhUQHaHa?pid=Api&P=0&h=180" },
  { id: 24, name: "cooler", price: 1299, category: "electronics", img: "https://tse3.mm.bing.net/th/id/OIP.D8_jBo0cMQ-yDMP58lNDLQAAAA?pid=Api&P=0&h=180" },
  { id: 25, name: "frizz", price: 999, category: "electronics", img: "https://tse4.mm.bing.net/th/id/OIP.xRnSTjsgtAHafDm87cDJrQHaDK?pid=Api&P=0&h=180" },
  { id: 26, name: "iron-box", price: 499, category: "electronics", img: "https://tse2.mm.bing.net/th/id/OIP.SppHec-PviEDo5Rs3DwG3gHaHn?pid=Api&P=0&h=180" },
  { id: 27, name: "bet", price: 1999, category: "footwear", img: "https://tse3.mm.bing.net/th/id/OIP.rToDuDf9FGWWNz0b7Iip9AHaGE?pid=Api&P=0&h=180" },
  { id: 28, name: "bangles", price: 1499, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIP.xkfJmB8CJcQ9Ib_GJeXNsQHaEY?pid=Api&P=0&h=180" },
  { id: 29, name: "bulb", price: 1299, category: "electronics", img: "https://tse1.mm.bing.net/th/id/OIP.sguhc_4qvYxLoXyTe0Q3HwHaJ4?pid=Api&P=0&h=180" },
  { id: 30, name: "tv", price: 999, category: "electronics", img: "https://tse1.mm.bing.net/th/id/OIP.Ypo5Gs3LrQaiOiiQDL2F7gHaEK?pid=Api&P=0&h=180" },
  { id: 31, name: "paints", price: 499, category: "clothing", img: "https://tse4.mm.bing.net/th?id=OIF.dhR4%2fZXXuGcnFdM6UjQqdg&pid=Api&P=0&h=180" },
  { id: 32, name: "dailyweare", price: 1999, category: "footwear", img: "https://tse2.mm.bing.net/th/id/OIP.-a3ENdKzxwgVSgwvYui32wHaDY?pid=Api&P=0&h=180" },
  { id: 33, name: "clips", price: 1499, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIF.rLx8ZoIYT2sKjM5Jw3YIiw?pid=Api&P=0&h=180" },
  { id: 34, name: "Jeans", price: 1299, category: "clothing", img: "https://tse4.mm.bing.net/th/id/OIP.iqnb88fWa5sUqDFhz2riNQHaE-?pid=Api&P=0&h=180" },
  { id: 35, name: "headphones", price: 999, category: "electronics", img: "https://tse3.mm.bing.net/th/id/OIP.CAW8bc0B7uf-MXKNP93bmwHaEc?pid=Api&P=0&h=180" },
  { id: 36, name: "buds", price: 499, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIP.iqnb88fWa5sUqDFhz2riNQHaE-?pid=Api&P=0&h=180" },
  { id: 37, name: "Shoes", price: 1999, category: "footwear", img: "https://tse1.mm.bing.net/th/id/OIP.Vc6OmJEtUcd7obIBc8OHhwHaHa?pid=Api&P=0&h=180" },
  { id: 38, name: "hangbag", price: 1499, category: "accessories", img: "https://tse2.mm.bing.net/th/id/OIP.m1jFSvZZEAA3RpUeziwB1QAAAA?pid=Api&P=0&h=180" },
  { id: 39, name: "shirts", price: 1299, category: "clothing", img: "https://tse1.mm.bing.net/th/id/OIP.x79k9B1aNI8J1rXLYxJYowHaJ9?pid=Api&P=0&h=180" },
  { id: 40, name: "watch", price: 999, category: "electronics", img: "https://tse2.mm.bing.net/th/id/OIP.lzFEgfbkx13P7AXacHpCzAHaFA?pid=Api&P=0&h=180" },
  { id: 41, name: "toys", price: 499, category: "electronics", img: "https://tse1.mm.bing.net/th/id/OIF.imaYyPUAN9vo9pInlhhiWg?pid=Api&P=0&h=180" },
  { id: 42, name: "mens wear", price: 1999, category: "footwear", img: "https://tse2.mm.bing.net/th/id/OIP.SFnW_RQIxgSNh2qafIKDowHaFg?pid=Api&P=0&h=180" },
  { id: 43, name: "bag", price: 1499, category: "accessories", img: "https://tse3.mm.bing.net/th/id/OIF.m0WP7zcF9SEATReBnGFnuA?pid=Api&P=0&h=180" },
  { id: 44, name: "kids wear", price: 1299, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIP.Pu4lwRQL5bt0cfNd3fXDXQHaE2?pid=Api&P=0&h=180" },
  { id: 45, name: "Hairdrier", price: 999, category: "electronics", img: "https://tse2.mm.bing.net/th/id/OIP.OFEroLClp85umTosABstlwHaEK?pid=Api&P=0&h=180" },
  { id: 46, name: "flower-wazz", price: 499, category: "clothing", img: "https://tse3.mm.bing.net/th?id=OIF.4rCDUH%2fYfik9TWZeZQqIIQ&pid=Api&P=0&h=180" },
  { id: 47, name: "womens wear", price: 1999, category: "footwear", img: "https://tse1.mm.bing.net/th/id/OIP.Nr7kyHEOwZMXQPWwhoIFNwHaFT?pid=Api&P=0&h=180" },
  { id: 48, name: "bag", price: 1499, category: "accessories", img: "https://tse1.mm.bing.net/th/id/OIF.PSGsRBi0Pq0L8nQMeXj9dA?pid=Api&P=0&h=180" },
  { id: 49, name: "Juice-jar", price: 1299, category: "electronics", img: "https://tse1.mm.bing.net/th/id/OIP.jy-Ec2CHWH4mdZRg7Y-s0gHaFd?pid=Api&P=0&h=180" },
  { id: 50, name: "iphone", price: 999, category: "electronics", img: "https://tse2.mm.bing.net/th/id/OIP.lTcqMGYOev2CC8IPwPZyhAHaE8?pid=Api&P=0&h=180" },
  { id: 51, name: "lights", price: 499, category: "electronics", img: "https://tse3.mm.bing.net/th/id/OIF.dbjptSO496WIVK7BV4eWbQ?pid=Api&P=0&h=180" },
  { id: 52, name: "crocs", price: 1999, category: "footwear", img: "https://tse3.mm.bing.net/th/id/OIP.JgTD9N1ojs66QCVnRNJhSQHaFB?pid=Api&P=0&h=180" },
  { id: 53, name: "fan", price: 1499, category: "accessories", img: "https://tse1.mm.bing.net/th/id/OIP.-q_Ms3uh96K-gvfZ1S_M5wHaF2?pid=Api&P=0&h=180" },
  { id: 54, name: "dress", price: 1299, category: "clothing", img: "https://tse3.mm.bing.net/th?id=OIF.tG%2fEtBRTrcCFUFGbPTVtjw&pid=Api&P=0&h=180" },
  { id: 55, name: "cycle", price: 999, category: "electronics", img: "https://tse1.mm.bing.net/th/id/OIP.dXve-iqH2e8KNm0MmzPyGAHaHa?pid=Api&P=0&h=180" },
  { id: 56, name: "bagyy-jeans", price: 499, category: "clothing", img: "https://tse4.mm.bing.net/th/id/OIP.djj-xTRvEQso7QVYLLdvEAHaLH?pid=Api&P=0&h=180" },
  { id: 57, name: "dailywear", price: 1999, category: "footwear", img: "https://tse1.mm.bing.net/th/id/OIP.MAKDfs-8lI6v96PeO3Od2QHaEj?pid=Api&P=0&h=180" },
  { id: 58, name: "switches", price: 1499, category: "accessories", img: "https://tse3.mm.bing.net/th/id/OIP.oQC4dkUiphzoninOItBjQAHaHa?pid=Api&P=0&h=180" },
  { id: 59, name: "kurtis", price: 1299, category: "clothing", img: "https://tse2.mm.bing.net/th/id/OIP.UWLsC6j1cX94a-fyHlUfHQHaEK?pid=Api&P=0&h=180" },
  { id: 60, name: "camera", price: 999, category: "electronics", img: "https://tse1.mm.bing.net/th/id/OIP.62xuUC2yGymB3iHQTet_oQHaDE?pid=Api&P=0&h=180" },
  { id: 61, name: "gas", price: 499, category: "electronics", img: "https://tse4.mm.bing.net/th/id/OIP.mFVUt8z0ngQOzog9lLQ_yQHaDv?pid=Api&P=0&h=180" },
  { id: 62, name: "Shoes", price: 1999, category: "footwear", img: "https://tse3.mm.bing.net/th/id/OIP.dYADmEKBQKzyRrjes8mmDwHaE_?pid=Api&P=0&h=180" },
  { id: 63, name: "bands", price: 1499, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIP.TgT37LnEJZyGKD4Jt_fzWQHaHZ?pid=Api&P=0&h=180" },
  { id: 64, name: "baby-top", price: 1299, category: "clothing", img: "https://tse1.mm.bing.net/th/id/OIF.pExPAbpx9wsAAd3WFq9S5w?pid=Api&P=0&w=300&h=300" },
  { id: 65, name: "washing machine", price: 999, category: "electronics", img: "https://tse1.mm.bing.net/th/id/OIP.Wr2ekEiKsKGD_kLxRFmcHwHaEh?pid=Api&P=0&h=180" },
  { id: 66, name: "T-Shirt", price: 499, category: "clothing", img: "https://tse1.mm.bing.net/th/id/OIP.0_rVjwH06s1rgwg1RSJ8XgHaJ3?pid=Api&P=0&h=180" },
  { id: 67, name: "slipers", price: 1999, category: "footwear", img: "https://tse4.mm.bing.net/th/id/OIP.LCm56rdYhMZvzfURE-HZ1QHaFt?pid=Api&P=0&h=180" },
  { id: 68, name: "bands", price: 1499, category: "accessories", img: "https://tse4.mm.bing.net/th/id/OIP.dJBjUaMNW_VPn00cxV_dGQHaHa?pid=Api&P=0&h=180" },
  { id: 69, name: "bracelet", price: 1299, category: "accessories", img: "https://tse2.mm.bing.net/th/id/OIP.SqPzTv6ilLp-TLFqKtTPxAHaHa?pid=Api&P=0&h=180" },
  { id: 70, name: "microven", price: 999, category: "electronics", img: "https://tse4.mm.bing.net/th/id/OIP.5pb3PLyHVFxFa5Wh7cEdIAHaGb?pid=Api&P=0&h=180" },
];

const categories = ["clothing", "footwear", "accessories", "electronics"];

// const productNames = [
//   "T-Shirt", "Jeans", "Jacket", "Hoodie", "Kurta",
//   "Sneakers", "Sandals", "Boots", "Slippers", "Sports Shoes",
//   "Watch", "Sunglasses", "Cap", "Backpack", "Wallet",
//   "Headphones", "Smartphone", "Laptop", "Speaker", "Keyboard"
// ];

// const products = [];

// for (let i = 1; i <= 100; i++) {
//   const randomCategory = categories[i % categories.length];
//   const randomName = productNames[i % productNames.length];

//   products.push({
//     id: i,
//     name: randomName + " " + i,
//     price: Math.floor(Math.random() * 2000) + 300, // ₹300–₹2300
//     category: randomCategory,
//     img: `https://picsum.photos/200?random=${i}`
//   });
// }

const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");

let cart = [];
function displayProducts(items) {
  productContainer.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.img}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productContainer.appendChild(card);
  });
}

displayProducts(products);
function addToCart(id) {
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
}
function updateCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <span>${item.name} (x${item.qty})</span>
      <span>₹${item.price * item.qty}</span>
      <button onclick="removeFromCart(${item.id})">❌</button>
    `;

    cartContainer.appendChild(div);
  });

  totalPriceEl.textContent = total;
}
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});
categoryFilter.addEventListener("change", () => {
  const category = categoryFilter.value;

  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
});
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully 🎉");
  cart = [];
  updateCart();
}
