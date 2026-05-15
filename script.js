// Initialize Lucide Icons
lucide.createIcons();

const products = [
    { id: 1, name: "MCC (Microcrystalline Cellulose)", cat: "Excipients", price: 450, stock: "1200+ kg", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Sodium Starch Glycolate", cat: "Excipients", price: 380, stock: "800+ kg", img: "https://images.unsplash.com/photo-1576086213369-97a306dca664?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Ethanol 99.9% (Absolute)", cat: "Solvents", price: 2500, stock: "500+ L", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Isopropyl Alcohol (IPA)", cat: "Solvents", price: 1800, stock: "1000+ L", img: "https://images.unsplash.com/photo-1603121586342-e93165902120?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Vitamin C (Ascorbic Acid)", cat: "Vitamins", price: 950, stock: "1200+ kg", img: "https://images.unsplash.com/photo-1616671285410-097561858e98?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Vitamin B12", cat: "Vitamins", price: 4500, stock: "50+ kg", img: "https://images.unsplash.com/photo-1550573105-180a316b142d?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "Aloe Vera Gel Powder", cat: "Specialty", price: 1250, stock: "100+ kg", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "Magnesium Stearate", cat: "Excipients", price: 320, stock: "2000+ kg", img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400" }
];

let cart = [];
let userLocation = "";

// 1. Render Products
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(p => `
        <div class="product-card bg-white rounded-3xl p-4 border border-slate-100 shadow-sm relative overflow-hidden">
            <div class="absolute top-4 left-4 z-10 space-y-1">
                <span class="block bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-tighter">STOCK: ${p.stock}</span>
                <span class="block bg-green-500 text-white px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter">10% OFF</span>
            </div>
            <img src="${p.img}" class="w-full h-48 object-cover rounded-2xl mb-4 bg-slate-50">
            <div class="px-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">${p.cat}</p>
                <h3 class="font-bold text-sm h-10 mb-4">${p.name}</h3>
                <div class="flex justify-between items-center">
                    <div>
                        <span class="text-[10px] text-slate-400 line-through">₹${(p.price * 1.1).toFixed(0)}</span>
                        <p class="font-black text-lg">₹${p.price}</p>
                    </div>
                    <button onclick="addToCart(${p.id})" class="w-10 h-10 bg-[#004b8d] text-white rounded-full flex items-center justify-center hover:scale-110 transition">
                        <i data-lucide="plus" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// 2. Filter Logic
function filterProducts(category) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'All') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.cat === category);
        renderProducts(filtered);
    }
}

// 3. Cart Logic
function addToCart(id) {
    const item = products.find(p => p.id === id);
    const inCart = cart.find(c => c.id === id);
    if (inCart) {
        inCart.qty++;
    } else {
        cart.push({...item, qty: 1});
    }
    updateCartUI();
    // Tiny alert
    const toast = document.createElement('div');
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full z-[100] text-sm font-bold shadow-2xl";
    toast.innerText = `${item.name} added to cart`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function updateCartUI() {
    const list = document.getElementById('cart-items');
    const count = document.getElementById('cart-count');
    const totalEl = document.getElementById('total-price');
    const subEl = document.getElementById('subtotal');

    let total = 0;
    count.innerText = cart.reduce((acc, c) => acc + c.qty, 0);

    list.innerHTML = cart.map(c => {
        total += c.price * c.qty;
        return `
            <div class="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl">
                <img src="${c.img}" class="w-16 h-16 object-cover rounded-xl bg-white">
                <div class="flex-1">
                    <h4 class="text-xs font-bold">${c.name}</h4>
                    <p class="text-xs font-black text-[#004b8d]">₹${c.price} x ${c.qty}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQty(${c.id}, -1)" class="w-6 h-6 border rounded-lg">-</button>
                    <span class="text-xs font-bold">${c.qty}</span>
                    <button onclick="changeQty(${c.id}, 1)" class="w-6 h-6 border rounded-lg">+</button>
                </div>
            </div>
        `;
    }).join('');

    totalEl.innerText = `₹${total}`;
    subEl.innerText = `₹${total}`;
    renderSummary();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    item.qty += delta;
    if (item.qty < 1) cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const content = document.getElementById('cart-content');
    drawer.classList.toggle('invisible');
    content.classList.toggle('translate-x-full');
}

// 4. Geolocation
function getLocation() {
    const btn = document.getElementById('location-btn');
    btn.innerHTML = `<i data-lucide="loader" class="animate-spin w-4 h-4"></i> Accessing Location...`;
    lucide.createIcons();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            userLocation = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
            btn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-green-500"></i> Location Shared ✓`;
            lucide.createIcons();
        }, () => {
            btn.innerText = "Location Denied";
        });
    }
}

// 5. Checkout
function showCheckout() {
    if (cart.length === 0) return alert("Cart is empty!");
    document.getElementById('checkout-modal').classList.remove('hidden');
    renderSummary();
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

function renderSummary() {
    const list = document.getElementById('summary-items');
    let total = 0;
    list.innerHTML = cart.map(c => {
        total += c.price * c.qty;
        return `<div class="flex justify-between text-sm"><span>${c.name} x${c.qty}</span><span class="font-bold">₹${c.price * c.qty}</span></div>`;
    }).join('');
    document.getElementById('summ-subtotal').innerText = `₹${total}`;
    document.getElementById('summ-total').innerText = `₹${total}`;
}

// 6. Submit Order to WhatsApp/Email
function submitOrder(method) {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;
    const city = document.getElementById('cust-city').value;
    const pin = document.getElementById('cust-pin').value;

    if (!name || !phone || !address) return alert("Please fill details");

    let orderText = `*NEW ORDER REQUEST - EXCIPURE PHARMA*\n\n`;
    orderText += `*CUSTOMER DETAILS:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}, ${city} - ${pin}\n`;
    if(userLocation) orderText += `Location: ${userLocation}\n`;
    
    orderText += `\n*ORDER SUMMARY:*\n`;
    cart.forEach(c => {
        orderText += `- ${c.name} (${c.qty} units) @ ₹${c.price}\n`;
    });
    
    const total = cart.reduce((acc, c) => acc + (c.price * c.qty), 0);
    orderText += `\n*TOTAL AMOUNT: ₹${total}*`;

    if (method === 'whatsapp') {
        const url = `https://wa.me/919398453760?text=${encodeURIComponent(orderText)}`;
        window.open(url, '_blank');
    } else {
        const mailUrl = `mailto:excipurepharma@gmail.com?subject=New Order from ${name}&body=${encodeURIComponent(orderText)}`;
        window.location.href = mailUrl;
    }
}

// Initial Run
renderProducts(products);
