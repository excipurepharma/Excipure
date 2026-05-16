// 1. INITIALIZE ICONS
lucide.createIcons();

// 2. PRODUCT DATABASE
const products = [
    { id: 1, name: "Calcium Carbonate", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent", apps: "Supplement, Diluent, Antacid", grade: "IP/BP/USP", mol: "CaCO₃", purity: ">99%", desc: "Fine white powder used as a diluent and calcium supplement.", img: "images/products/excipients/calcium-carbonate.jpg" },
    { id: 2, name: "Carbomer (Carbopol)", cat: "Excipients", stock: "Custom", func: "Gelling agent", apps: "Gels, Cosmetics", grade: "IP/USP/BP", mol: "Polyacrylic Acid", purity: "90–100%", desc: "Fluffy powder forming clear gels for topical use.", img: "images/products/excipients/carbomer.jpg" },
    { id: 3, name: "Propylene Glycol", cat: "Excipients", stock: "215 Kg Drum", func: "Solvent", apps: "Syrups, Oral Liquids", grade: "USP/IP", mol: "C₃H₈O₂", purity: ">99%", desc: "Clear viscous liquid used as a solvent and humectant.", img: "images/products/excipients/propylene-glycol.jpg" },
    { id: 4, name: "Calcium Stearate", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant", apps: "Tablets, Capsules", grade: "USP", mol: "C₃₆H₇₀CaO₄", purity: ">98%", desc: "Fine white greasy powder used as a tablet lubricant.", img: "images/products/excipients/calcium-stearate.jpg" },
    { id: 5, name: "Chitosan", cat: "Excipients", stock: "Custom", func: "Binder", apps: "Biomedical, Film coatings", grade: "USP/BP", mol: "Polymer", purity: "≥ 85%", desc: "Natural polymer known for bioadhesive properties.", img: "images/products/excipients/chitosan.jpg" },
    { id: 6, name: "Citric Acid", cat: "Excipients", stock: "25 Kg Bag", func: "Acidulant", apps: "Effervescent tabs, Syrups", grade: "IP/USP/BP", mol: "C₆H₈O₇", purity: "Pharma Std", desc: "White crystalline powder used for pH adjustment.", img: "images/products/excipients/citric-acid.jpg" },
    { id: 7, name: "CMC (Carboxy Methyl Cellulose)", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener", apps: "Suspensions, Tablets", grade: "USP/IP", mol: "C₈H₁₅NaO₈", purity: ">99%", desc: "Water-soluble thickener and binder.", img: "images/products/excipients/cmc.jpg" },
    { id: 8, name: "Croscarmellose Sodium", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Tablets", grade: "USP/IP", mol: "Polymer", purity: ">99%", desc: "Ensures rapid drug release from tablets.", img: "images/products/excipients/croscarmellose.jpg" },
    { id: 9, name: "Crospovidone", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Rapid release tabs", grade: "USP/IP", mol: "(C₆H₉NO)n", purity: ">98%", desc: "Ensures quick tablet disintegration.", img: "images/products/excipients/crospovidone.jpg" },
    { id: 10, name: "Dicalcium Phosphate (DCP)", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent", apps: "Tablets, Capsules", grade: "USP/IP", mol: "CaHPO₄", purity: ">98%", desc: "Provides bulk and enhances tablet hardness.", img: "images/products/excipients/dcp.jpg" },
    { id: 11, name: "Gelatin", cat: "Excipients", stock: "25 Kg Bag", func: "Gelling agent", apps: "Capsule shells", grade: "USP/IP", mol: "Protein", purity: ">98%", desc: "The primary material for hard/soft capsules.", img: "images/products/excipients/gelatin.jpg" },
    { id: 12, name: "Glycerin", cat: "Excipients", stock: "250 Kg Drum", func: "Humectant", apps: "Syrups, Topicals", grade: "USP/IP", mol: "C₃H₈O₃", purity: ">99%", desc: "Clear viscous solvent and sweetener.", img: "images/products/excipients/glycerin.jpg" },
    { id: 13, name: "HPMC", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Coating Agent", apps: "Film Coating, Controlled Release", grade: "IP/USP", mol: "Cellulose", purity: ">98%", desc: "Standard for tablet coating and controlled release.", img: "images/products/excipients/hpmc.jpg" },
    { id: 14, name: "Lactose", cat: "Excipients", stock: "25 Kg Bag", func: "Diluent", apps: "Tablets, Capsules", grade: "USP/IP", mol: "Sugar", purity: ">99%", desc: "High-purity filler for solid dosage forms.", img: "images/products/excipients/lactose.jpg" },
    { id: 15, name: "Magnesium Stearate", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant", apps: "Tableting", grade: "IP/USP", mol: "Salt", purity: ">98%", desc: "Prevents powder sticking during tableting.", img: "images/products/excipients/magnesium-stearate.jpg" },
    { id: 16, name: "MCC", cat: "Excipients", stock: "25 Kg Bag", func: "Binder / Diluent", apps: "Direct Compression", grade: "USP/IP", mol: "Cellulose", purity: ">98%", desc: "Highly compressible binder for tablets.", img: "images/products/excipients/mcc.jpg" },
    { id: 17, name: "Poloxamer", cat: "Excipients", stock: "25 Kg Bag", func: "Surfactant", apps: "Emulsions, Gels", grade: "USP", mol: "Copolymer", purity: ">98%", desc: "Improves drug solubility and stability.", img: "images/products/excipients/poloxamer.jpg" },
    { id: 18, name: "Polyethylene Glycol (PEG)", cat: "Excipients", stock: "25 Kg Bag", func: "Solvent / Plasticizer", apps: "Ointments, Coating", grade: "USP", mol: "Polymer", purity: ">99%", desc: "Versatile solvent and coating plasticizer.", img: "images/products/excipients/peg.jpg" },
    { id: 19, name: "PVP K30", cat: "Excipients", stock: "25 Kg Bag", func: "Binder", apps: "Wet Granulation", grade: "USP", mol: "Polymer", purity: ">99%", desc: "Strong binder for granulation process.", img: "images/products/excipients/pvp-k30.jpg" },
    { id: 20, name: "Sodium Lauryl Sulfate (SLS)", cat: "Excipients", stock: "25 Kg Bag", func: "Surfactant", apps: "Capsules, Topicals", grade: "IP/USP", mol: "Salt", purity: ">95%", desc: "Improves drug dissolution in water.", img: "images/products/excipients/sls.jpg" },
    { id: 21, name: "SSG (Sodium Starch Glycolate)", cat: "Excipients", stock: "25 Kg Bag", func: "Super Disintegrant", apps: "Tablets", grade: "USP/IP", mol: "Starch", purity: ">95%", desc: "Derived from starch, ensures rapid disintegration.", img: "images/products/excipients/ssg.jpg" },
    { id: 22, name: "Sorbitol", cat: "Excipients", stock: "25Kg Bag / Drum", func: "Sweetener", apps: "Syrups, Chewables", grade: "USP/IP", mol: "C₆H₁₄O₆", purity: ">98%", desc: "Non-sugar sweetener and humectant.", img: "images/products/excipients/sorbitol.jpg" },
    { id: 23, name: "Starch (Maize/Corn)", cat: "Excipients", stock: "25 Kg Bag", func: "Binder", apps: "Tablets", grade: "IP/USP", mol: "Natural", purity: ">98%", desc: "Universal binder and disintegrant.", img: "images/products/excipients/starch.jpg" },
    { id: 24, name: "Stearic Acid", cat: "Excipients", stock: "25 Kg Bag", func: "Lubricant", apps: "Tablets, Creams", grade: "USP", mol: "C₁₈H₃₆O₂", purity: ">98%", desc: "Waxy solid used as lubricant and binder.", img: "images/products/excipients/stearic-acid.jpg" },
    { id: 25, name: "Sucrose", cat: "Excipients", stock: "25 Kg Bag", func: "Sweetener", apps: "Syrups, Tabs", grade: "IP/USP", mol: "Sugar", purity: ">99%", desc: "Standard pharma-grade sugar.", img: "images/products/excipients/sucrose.jpg" },
    { id: 26, name: "Talc", cat: "Excipients", stock: "25 Kg Bag", func: "Glidant", apps: "Tablets, Powders", grade: "IP/USP", mol: "Mineral", purity: ">98%", desc: "Enhances flow and reduces sticking.", img: "images/products/excipients/talc.jpg" },
    { id: 27, name: "Titanium Dioxide", cat: "Excipients", stock: "25 Kg Bag", func: "Opacifier", apps: "Coating", grade: "USP/IP", mol: "TiO₂", purity: ">99%", desc: "Provides high opacity and whiteness.", img: "images/products/excipients/titanium-dioxide.jpg" },
    { id: 28, name: "Xanthan Gum", cat: "Excipients", stock: "25 Kg Bag", func: "Thickener", apps: "Suspensions", grade: "USP", mol: "Gum", purity: ">98%", desc: "Natural stabilizer for oral liquids.", img: "images/products/excipients/xanthan-gum.jpg" },
    { id: 29, name: "Colloidal Silicon Dioxide", cat: "Excipients", stock: "25 Kg Bag", func: "Glidant", apps: "Flow Enhancer", grade: "USP/IP", mol: "SiO₂", purity: ">99%", desc: "Improves powder flow significantly.", img: "images/products/excipients/colloidal-silicon-dioxide.jpg" },
    { id: 30, name: "Ethanol (99.9%)", cat: "Excipients", stock: "50/200 L Drum", func: "Solvent", apps: "Liquids, Sanitizers", grade: "IP/USP", mol: "C₂H₆O", purity: ">99%", desc: "High-purity volatile solvent.", img: "images/products/excipients/ethanol.jpg" },
    { id: 31, name: "Ethyl Cellulose", cat: "Excipients", stock: "25 Kg Bag", func: "Release Agent", apps: "SR Tablets", grade: "IP/USP", mol: "Polymer", purity: ">98%", desc: "Used for barrier coating and SR.", img: "images/products/excipients/ethyl-cellulose.jpg" },
    { id: 32, name: "Mannitol", cat: "Excipients", stock: "25 Kg Bag", func: "Sweetener", apps: "Chewables", grade: "USP/IP", mol: "C₆H₁₄O₆", purity: ">98%", desc: "Cooling effect and non-hygroscopic.", img: "images/products/excipients/mannitol.jpg" },
    { id: 33, name: "Parabens", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", apps: "Liquids, Topicals", grade: "USP", mol: "Preservative", purity: ">99%", desc: "Antimicrobial preservative.", img: "images/products/excipients/parabens.jpg" },
    { id: 34, name: "Sodium Benzoate", cat: "Excipients", stock: "25 Kg Bag", func: "Preservative", apps: "Syrups", grade: "USP/IP", mol: "C₇H₅NaO₂", purity: ">99%", desc: "Effective antimicrobial for liquids.", img: "images/products/excipients/sodium-benzoate.jpg" }
];

let cart = [];
let userLocation = "";

// 3. RENDERING LOGIC
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => {
        // Cache Buster to force refresh
        const finalImgPath = `${p.img}?v=${Date.now()}`;
        
        return `
        <div class="product-card bg-white rounded-3xl p-4 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div class="absolute top-4 left-4 z-10">
                <span class="block bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-tighter">${p.stock}</span>
            </div>
            <img src="${finalImgPath}" 
                 onerror="handleImageError(this, '${p.name}')" 
                 class="w-full h-48 object-cover rounded-2xl mb-4 bg-slate-50">
            <div class="px-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">${p.cat}</p>
                <h3 class="font-bold text-sm h-10 mb-2 uppercase">${p.name}</h3>
                <p class="text-[11px] text-slate-500 line-clamp-2 mb-4 italic">${p.func}</p>
                <div class="flex justify-between items-center">
                    <button onclick="viewDetails(${p.id})" class="text-[11px] font-bold text-[#004b8d] underline uppercase tracking-widest">Specs</button>
                    <button onclick="addToCart(${p.id})" class="w-10 h-10 bg-[#004b8d] text-white rounded-full flex items-center justify-center hover:bg-[#1a7139] transition">
                        <i data-lucide="plus" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `}).join('');
    lucide.createIcons();
}

// Global Image Error Handler for better debugging
function handleImageError(imgElement, productName) {
    console.error(`FAILED TO LOAD: ${productName}. Tried path: ${imgElement.src.split('?')[0]}`);
    imgElement.src = `https://placehold.co/400x300?text=${productName.split(' ')[0]}`;
}

// 4. FILTER LOGIC
function filterProducts(category) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    const clickedBtn = Array.from(btns).find(btn => btn.innerText.trim() === category);
    if (clickedBtn) clickedBtn.classList.add('active');

    if (category === 'All') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.cat === category);
        renderProducts(filtered);
    }
}

// 5. MODAL & DETAILS LOGIC
function viewDetails(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-desc').innerText = p.desc;
    document.getElementById('modal-func').innerText = p.func;
    document.getElementById('modal-grade').innerText = p.grade;
    document.getElementById('modal-mol').innerText = p.mol;
    document.getElementById('modal-purity').innerText = p.purity;
    
    const appContainer = document.getElementById('modal-apps');
    appContainer.innerHTML = p.apps.split(',').map(app => 
        `<span class="px-3 py-1 bg-blue-50 text-[#004b8d] text-[10px] font-bold rounded-full uppercase border border-blue-100">${app.trim()}</span>`
    ).join('');

    document.getElementById('modal-add-btn').onclick = () => { addToCart(p.id); closeDetails(); };
    document.getElementById('details-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closeDetails() {
    document.getElementById('details-modal').classList.add('hidden');
}

// 6. CART & CHECKOUT LOGIC
function addToCart(id) {
    const item = products.find(p => p.id === id);
    const inCart = cart.find(c => c.id === id);
    if (inCart) { inCart.qty++; } else { cart.push({...item, qty: 1}); }
    updateCartUI();
    
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

    count.innerText = cart.reduce((acc, c) => acc + c.qty, 0);

    list.innerHTML = cart.map(c => {
        return `
            <div class="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl">
                <img src="${c.img}" onerror="this.src='https://placehold.co/100x100?text=Product'" class="w-16 h-16 object-cover rounded-xl bg-white">
                <div class="flex-1">
                    <h4 class="text-xs font-bold">${c.name}</h4>
                    <p class="text-xs text-slate-500">${c.stock}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQty(${c.id}, -1)" class="w-6 h-6 border rounded-lg">-</button>
                    <span class="text-xs font-bold">${c.qty}</span>
                    <button onclick="changeQty(${c.id}, 1)" class="w-6 h-6 border rounded-lg">+</button>
                </div>
            </div>
        `;
    }).join('');

    totalEl.innerText = `Quote Request`;
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

// 7. CHECKOUT & WHATSAPP
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
    list.innerHTML = cart.map(c => `
        <div class="flex justify-between text-sm">
            <span>${c.name} x${c.qty}</span>
            <span class="font-bold text-slate-400">${c.stock}</span>
        </div>
    `).join('');
}

function getLocation() {
    const btn = document.getElementById('location-btn');
    btn.innerHTML = `Accessing...`;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            userLocation = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
            btn.innerHTML = `Location Linked ✓`;
        }, () => { btn.innerText = "Location Denied"; });
    }
}

function submitOrder(method) {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    if (!name || !phone) return alert("Please enter Name and Phone");

    let orderText = `*NEW INQUIRY - EXCIPURE PHARMA*\n\n`;
    orderText += `*Customer:* ${name}\n*Phone:* ${phone}\n`;
    if(userLocation) orderText += `*Location:* ${userLocation}\n`;
    orderText += `\n*ITEMS REQUESTED:*\n`;
    cart.forEach(c => { orderText += `- ${c.name} (Qty: ${c.qty}) [${c.stock}]\n`; });

    if (method === 'whatsapp') {
        window.open(`https://wa.me/919398453760?text=${encodeURIComponent(orderText)}`, '_blank');
    } else {
        window.location.href = `mailto:excipurepharma@gmail.com?subject=Inquiry from ${name}&body=${encodeURIComponent(orderText)}`;
    }
}

// 8. STARTUP
renderProducts(products);
