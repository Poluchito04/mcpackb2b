const products = [
    // --- VASOS PAPEL ---
    {
        id: 'vaso-4oz',
        category: 'vasos',
        name: 'Vaso Eco Papel Blanco 4oz (150ml)',
        info: 'Ideal para café solo o cortado.',
        price5: 55, 
        price11: 47, 
        clichePrice: 80, 
        moqStandard: { bcn: 1000, rest: 3000 },
        moqPersonalized: 5000
    },
    {
        id: 'vaso-7oz',
        category: 'vasos',
        name: 'Vaso Eco Papel Blanco 7oz',
        info: 'Tamaño intermedio para cortados largos.',
        price5: 65,
        price11: 60,
        clichePrice: 80,
        moqStandard: { bcn: 1000, rest: 3000 },
        moqPersonalized: 5000
    },
    {
        id: 'vaso-8oz',
        category: 'vasos',
        name: 'Vaso Eco Papel Blanco 8oz (240ml)',
        info: 'El estándar para Latte y Capuccino.',
        price5: 79,
        price11: 75,
        clichePrice: 80,
        moqStandard: { bcn: 1000, rest: 3000 },
        moqPersonalized: 5000
    },
    {
        id: 'vaso-14oz',
        category: 'vasos',
        name: 'Vaso Eco Papel 14oz (Boca Ancha)',
        info: 'Para cafés grandes y bebidas frías.',
        price5: 130,
        price11: 123,
        clichePrice: 80,
        moqStandard: { bcn: 1000, rest: 3000 },
        moqPersonalized: 5000
    },
    {
        id: 'vaso-tortuga-4oz',
        category: 'vasos',
        name: 'Vaso Papel con Tortuga 4oz',
        info: 'Diseño Eco Tortuga.',
        price9: 50,
        clichePrice: 50,
        moqStandard: { bcn: 1000, rest: 3000 },
        moqPersonalized: 9000
    },
    {
        id: 'vaso-tortuga-8oz',
        category: 'vasos',
        name: 'Vaso Papel con Tortuga 8oz',
        info: 'Diseño Eco Tortuga.',
        price9: 77,
        clichePrice: 50,
        moqStandard: { bcn: 1000, rest: 3000 },
        moqPersonalized: 9000
    },
    {
        id: 'vaso-tortuga-12oz',
        category: 'vasos',
        name: 'Vaso Papel con Tortuga 12oz',
        info: 'Boca estrecha. Diseño Eco Tortuga.',
        price9: 98,
        clichePrice: 50,
        moqStandard: { bcn: 1000, rest: 3000 },
        moqPersonalized: 9000
    },

    // --- SERVILLETAS ---
    {
        id: 'servilleta-20-blanca',
        category: 'servilletas',
        name: 'Servilleta Blanca 20x20 pp',
        info: 'Punta-Punta. 20 cajas de 4.500 und.',
        price90: 11.62,
        clichePrice: 100,
        moqStandard: { bcn: 5000, rest: 10000 },
        moqPersonalized: 90000
    },
    {
        id: 'servilleta-20-eco',
        category: 'servilletas',
        name: 'Servilleta Eco 20x20 pp',
        info: 'Punta-Punta. Sostenible.',
        price90: 9.94,
        clichePrice: 100,
        moqStandard: { bcn: 5000, rest: 10000 },
        moqPersonalized: 90000
    },
    {
        id: 'servilleta-1-8-blanca',
        category: 'servilletas',
        name: 'Servilleta Blanca 1/8 pp',
        info: 'Punta-Punta. 20 cajas de 1.800 und.',
        price36: 25.05,
        clichePrice: 100,
        moqStandard: { bcn: 2000, rest: 5000 },
        moqPersonalized: 36000
    },
    {
        id: 'servilleta-1-8-eco',
        category: 'servilletas',
        name: 'Servilleta Eco 1/8 pp',
        info: 'Punta-Punta. Sostenible.',
        price36: 24.64,
        clichePrice: 100,
        moqStandard: { bcn: 2000, rest: 5000 },
        moqPersonalized: 36000
    },
    {
        id: 'servilleta-1-6-blanca',
        category: 'servilletas',
        name: 'Servilleta Blanca 1/6 pp',
        info: 'Punta-Punta. 20 cajas de 2.400 und.',
        price48: 19.96,
        clichePrice: 100,
        moqStandard: { bcn: 2400, rest: 4800 },
        moqPersonalized: 48000
    },
    {
        id: 'servilleta-1-6-eco',
        category: 'servilletas',
        name: 'Servilleta Eco 1/6 pp',
        info: 'Punta-Punta. Sostenible.',
        price48: 18.85,
        clichePrice: 100,
        moqStandard: { bcn: 2400, rest: 4800 },
        moqPersonalized: 48000
    },

    // --- BOLSAS (BLANCAS - 6 variantes) ---
    { id: 'bolsa-blanca-21-90', category: 'bolsas', name: 'Bolsas Papel Blanco 21x9x25,50 (90gr)', info: 'Calidad superior. 1 tinta.', price5: 159.00, price10: 144.00, clichePrice: 0, moqStandard: { bcn: 250, rest: 1000 }, moqPersonalized: 5000 },
    { id: 'bolsa-blanca-27-90', category: 'bolsas', name: 'Bolsas Papel Blanco 27x16x28 (90gr)', info: 'Ideal takeaway. 1 tinta.', price5: 231.00, price10: 207.00, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },
    { id: 'bolsa-blanca-34-90', category: 'bolsas', name: 'Bolsas Papel Blanco 34x14x32 (90gr)', info: 'Formato mediano. 1 tinta.', price5: 291.00, price10: 253.50, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },
    { id: 'bolsa-blanca-32-90', category: 'bolsas', name: 'Bolsas Papel Blanco 32x20x31 (90gr)', info: 'Formato ancho. 1 tinta.', price5: 307.50, price10: 276.00, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },
    { id: 'bolsa-blanca-27-100', category: 'bolsas', name: 'Bolsas Papel Blanco 27x16x28 (100gr)', info: 'Resistencia extra. 1 tinta.', price5: 247.50, price10: 220.50, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },
    { id: 'bolsa-blanca-32-100', category: 'bolsas', name: 'Bolsas Papel Blanco 32x20x31 (100gr)', info: 'Gran capacidad extra. 1 tinta.', price5: 315.00, price10: 282.00, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },

    // --- BOLSAS (KRAFT - 6 variantes) ---
    { id: 'bolsa-kraft-21-90', category: 'bolsas', name: 'Bolsas Papel Kraft 21x9x25,50 (90gr)', info: 'Estilo eco. 1 tinta.', price5: 139.50, price10: 118.50, clichePrice: 0, moqStandard: { bcn: 250, rest: 1000 }, moqPersonalized: 5000 },
    { id: 'bolsa-kraft-27-90', category: 'bolsas', name: 'Bolsas Papel Kraft 27x16x28 (90gr)', info: 'Natural y eco. 1 tinta.', price5: 201.00, price10: 175.50, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },
    { id: 'bolsa-kraft-34-90', category: 'bolsas', name: 'Bolsas Papel Kraft 34x14x32 (90gr)', info: 'Mediana natural. 1 tinta.', price5: 238.50, price10: 204.00, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },
    { id: 'bolsa-kraft-32-90', category: 'bolsas', name: 'Bolsas Papel Kraft 32x20x31 (90gr)', info: 'Ancha natural. 1 tinta.', price5: 258.00, price10: 223.50, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },
    { id: 'bolsa-kraft-27-100', category: 'bolsas', name: 'Bolsas Papel Kraft 27x16x28 (100gr)', info: 'Resistente eco. 1 tinta.', price5: 211.50, price10: 187.50, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },
    { id: 'bolsa-kraft-32-100', category: 'bolsas', name: 'Bolsas Papel Kraft 32x20x31 (100gr)', info: 'Gran capacidad eco. 1 tinta.', price5: 271.50, price10: 222.00, clichePrice: 0, moqStandard: { bcn: 250, rest: 500 }, moqPersonalized: 5000 },

    // --- BOLSAS (SOS - 1 variante) ---
    { id: 'bolsa-sos-24-80', category: 'bolsas', name: 'Bolsas SOS Blanca/Kraft 24x14x40 (80gr)', info: 'Sin asa. Alta resistencia. 1 tinta.', price5: 180.90, price10: 152.50, clichePrice: 170, moqStandard: { bcn: 500, rest: 1000 }, moqPersonalized: 5000 },

    // --- COMIDA / TAKEAWAY (Ensaladeras) ---
    { id: 'ensaladera-500', category: 'comida', name: 'Ensaladera Eco Blanca 500ml', info: 'Poke y ensalada.', price5: 220, price11: 205, clichePrice: 80, moqStandard: { bcn: 500, rest: 1000 }, moqPersonalized: 5000 },
    { id: 'ensaladera-750', category: 'comida', name: 'Ensaladera Eco Blanca 750ml', info: 'Formato estándar ración abierta.', price5: 240, price11: 225, clichePrice: 80, moqStandard: { bcn: 500, rest: 1000 }, moqPersonalized: 5000 },
    { id: 'ensaladera-1100', category: 'comida', name: 'Ensaladera Eco Blanca 1100ml', info: 'Ración familiar.', price5: 305, price11: 287, clichePrice: 80, moqStandard: { bcn: 500, rest: 1000 }, moqPersonalized: 5000 },

    // --- SOBRES ---
    { id: 'sobre-blanco-15', category: 'sobres', name: 'Sobre Blanco 15x21+6', info: 'Interior antigrasa (+20%).', price10: 34.00, price25: 28.22, clichePrice: 90, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },
    { id: 'sobre-kraft-15', category: 'sobres', name: 'Sobre Kraft 15x21+6', info: 'Interior antigrasa (+20%). Eco.', price10: 33.49, price25: 27.88, clichePrice: 90, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },
    { id: 'sobre-blanco-9', category: 'sobres', name: 'Sobre Blanco 9x21+6', info: 'Interior antigrasa (+20%). Snacks.', price10: 29.07, price25: 23.63, clichePrice: 79, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },
    { id: 'sobre-kraft-9', category: 'sobres', name: 'Sobre Kraft 9x21+6', info: 'Interior antigrasa (+20%). Snacks eco.', price10: 28.90, price25: 23.46, clichePrice: 79, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },
    { id: 'sobre-blanco-15-15', category: 'sobres', name: 'Sobre Blanco 15x15 (Ab./Cer.)', info: 'Versátil blanco.', price10: 35.19, price25: 29.58, clichePrice: 80, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },
    { id: 'sobre-kraft-15-15', category: 'sobres', name: 'Sobre Kraft 15x15 (Ab./Cer.)', info: 'Versátil kraft.', price10: 32.89, price25: 26.94, clichePrice: 80, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },

    // --- COMIDA / TAKEAWAY (Antigrasa) ---
    { id: 'papel-antigrasa-resma', category: 'comida', name: 'Papel Antigrasa 62x86 (10 Resmas)', info: 'Con corte incluido.', price10r: 120, clichePrice: 150, moqStandard: { bcn: 1, rest: 5 }, moqPersonalized: 10 },
    { id: 'papel-antigrasa-28x31', category: 'comida', name: 'Papel Antigrasa 28x31', info: 'Personalizado pocas unidades.', price10: 61, clichePrice: 150, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },
    { id: 'papel-antigrasa-25x25', category: 'comida', name: 'Papel Antigrasa 25x25', info: 'Personalizado pocas unidades.', price10: 53, clichePrice: 150, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },
    { id: 'papel-antigrasa-31x43', category: 'comida', name: 'Papel Antigrasa 31x43', info: 'Personalizado pocas unidades.', price10: 62, clichePrice: 150, moqStandard: { bcn: 1000, rest: 5000 }, moqPersonalized: 10000 },

    // --- PIZZERÍA ---
    { id: 'caja-pizza-30', category: 'pizza', name: 'Caja Pizza 30x30x4', info: 'Blanca/Kraft.', price3: 355.25, price6: 340.75, clichePrice: 100, moqStandard: { bcn: 500, rest: 1000 }, moqPersonalized: 3000 },
    { id: 'caja-pizza-33', category: 'pizza', name: 'Caja Pizza 33x33x4', info: 'Blanca/Kraft.', price3: 384.25, price6: 369.75, clichePrice: 100, moqStandard: { bcn: 500, rest: 1000 }, moqPersonalized: 3000 },
    { id: 'caja-pizza-36', category: 'pizza', name: 'Caja Pizza 36x36x4', info: 'Blanca/Kraft.', price3: 452.40, price6: 433.55, clichePrice: 100, moqStandard: { bcn: 500, rest: 1000 }, moqPersonalized: 3000 },
    { id: 'caja-pizza-40', category: 'pizza', name: 'Caja Pizza 40x40x4', info: 'Blanca/Kraft.', price3: 514.75, price6: 493.00, clichePrice: 100, moqStandard: { bcn: 500, rest: 1000 }, moqPersonalized: 3000 }
];

let cart = [];
let userZone = 'bcn';

function init() {
    renderProducts('vasos');
    updateOrderSummary();
}

function renderProducts(categoryFilter) {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = categoryFilter === 'all' 
        ? products 
        : products.filter(p => p.category === categoryFilter);

    filtered.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Find a representative price to show "Desde ..."
        const basePrice = product.price90 || product.price48 || product.price36 || product.price25 || product.price11 || product.price10 || product.price9 || product.price6 || product.price5 || product.price3 || product.price10r;
        
        card.innerHTML = `
            ${product.tag ? `<div class="product-tag">${product.tag}</div>` : ''}
            <div class="product-icon">${getIcon(product.category, product.id)}</div>
            <h3>${product.name}</h3>
            <p class="product-info">${product.info}</p>
            <div class="product-price-prev">Desde ${((basePrice || 0) * 0.85).toFixed(2)}€ / millar</div>
            <button class="btn-add" onclick="openConfigurator('${product.id}')">Configurar Pedido</button>
        `;
        grid.appendChild(card);
        
        // Trigger appear animation
        setTimeout(() => card.classList.add('appear'), 50);
    });
}

function updateNav(btn, category) {
    // Legacy support
    const parents = document.querySelectorAll('.category-nav');
    parents.forEach(p => {
        const btns = p.querySelectorAll('.nav-btn');
        btns.forEach(b => b.classList.remove('active'));
    });
    btn.classList.add('active');
    renderProducts(category);
}

function updateNavVisual(card, category) {
    // Support for the new visual category grid
    const cards = document.querySelectorAll('.cat-card');
    cards.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked card if it exists
    if (card) card.classList.add('active');
    
    // Render products
    renderProducts(category);
}

function getIcon(cat, productId = '') {
    const icons = {
        'vasos': 'icons/icon_vaso_mcpack_1773706871413.png',
        'cafeteria': 'icons/icon_pasteleria_mcpack_1773706923614.png',
        'comida': 'icons/icon_comida_mcpack_1773706910837.png',
        'pizza': 'icons/icon_pizza_mcpack_1773706898855.png',
        'bolsas': 'icons/icon_bolsa_mcpack_1773706885239.png',
        'servilletas': 'icons/icon_servilleta_mcpack_1773707518427.png',
        'sobres': 'icons/icon_sobre_mcpack_1773707490670.png'
    };
    
    let path = icons[cat] || 'icons/icon_bolsa_mcpack_1773706885239.png';
    
    // Specific overrides
    if (productId.includes('papel-antigrasa')) {
        path = 'icons/icon_antigrasa_mcpack_1773707503192.png';
    }
    
    return `<img src="${path}" class="product-icon-img" alt="${cat}">`;
}

function openConfigurator(productId) {
    const product = products.find(p => p.id === productId);
    const configHtml = `
        <div id="modal-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(25, 20, 15, 0.85);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:9000;padding:20px;">
            <div class="order-panel" style="max-width:550px;width:100%;position:relative;animation:fadeInUp 0.4s ease; background:white; color:var(--primary);">
                <button onclick="closeModal()" style="position:absolute;top:15px;right:15px;background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--gray-medium);">×</button>
                <h2 style="margin-bottom:25px; color:var(--primary); font-size:1.6rem; letter-spacing:-0.5px;">Configurar <span style="color:var(--accent);">${product.name}</span></h2>
                
                <div class="input-group" style="margin-bottom:20px;">
                    <label style="display:block;margin-bottom:8px;font-weight:700;">Tipo de Producto</label>
                    <select id="config-type" onchange="updateConfigPrice('${productId}')" style="width:100%;">
                        <option value="standard">Estándar (Sin logo)</option>
                        <option value="personalized">Personalizado (Con logo)</option>
                    </select>
                </div>
                
                <div class="input-group" style="margin-bottom:20px;">
                    <label style="display:block;margin-bottom:8px;font-weight:700;">Cantidad (unidades)</label>
                    <input type="number" id="config-qty" value="${userZone === 'bcn' ? product.moqStandard.bcn : product.moqStandard.rest}" step="1000" onchange="updateConfigPrice('${productId}')" style="width:100%;">
                    <small id="moq-warning" style="color:var(--primary); font-weight:700; display:block; margin-top:5px;"></small>
                </div>
                
                <div id="personalized-options" style="display:none;">
                    <div class="input-group" style="margin-bottom:20px;">
                        <label style="display:block;margin-bottom:8px;font-weight:700;">Tintas de impresión</label>
                        <select id="config-inks" onchange="updateConfigPrice('${productId}')" style="width:100%;">
                            <option value="1">1 Tinta (100€ Cliché)</option>
                            <option value="2">2 Tintas (200€ Cliché)</option>
                            <option value="3">3 Tintas (300€ Cliché)</option>
                            <option value="4">4 Tintas (400€ Cliché)</option>
                        </select>
                    </div>
                </div>
                
                <div class="total-section" style="background:var(--eco-light); border-radius:16px; padding:20px; margin:25px 0;">
                    <div class="total-row" style="display:flex; justify-content:space-between; margin-bottom:10px;">
                        <span style="font-weight:600;">Precio Subtotal:</span> 
                        <span id="config-subtotal" style="font-weight:700;">---</span>
                    </div>
                    <div class="total-row" id="cliche-row" style="display:none; justify-content:space-between; margin-bottom:10px;">
                        <span style="font-weight:600;">Cliché (un solo pago):</span> 
                        <span id="config-cliche" style="font-weight:700;">---</span>
                    </div>
                    <div class="total-row grand-total" style="display:flex; justify-content:space-between; border-top:2px solid var(--gray-light); padding-top:15px; margin-top:10px; font-size:1.5rem; font-weight:800; color:var(--primary);">
                        <span>Total Estimado:</span> 
                        <span id="config-total">---</span>
                    </div>
                </div>
                
                <div style="display:flex; gap:15px;">
                    <button class="nav-btn" onclick="closeModal()" style="flex:1; border:2px solid var(--gray-light); background:transparent; color:var(--primary);">Cancelar</button>
                    <button class="btn-add" id="add-to-cart-btn" onclick="addToCart('${productId}')" style="flex:2;">Añadir al Pedido</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', configHtml);
    updateConfigPrice(productId);
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.remove();
}

function updateConfigPrice(productId) {
    const product = products.find(p => p.id === productId);
    const type = document.getElementById('config-type').value;
    const qty = parseInt(document.getElementById('config-qty').value) || 0;
    const inks = parseInt(document.getElementById('config-inks').value);
    const warning = document.getElementById('moq-warning');
    const persOptions = document.getElementById('personalized-options');
    const clicheRow = document.getElementById('cliche-row');
    const addBtn = document.getElementById('add-to-cart-btn');

    let moq = type === 'standard' 
        ? (userZone === 'bcn' ? product.moqStandard.bcn : product.moqStandard.rest)
        : product.moqPersonalized;

    persOptions.style.display = type === 'personalized' ? 'block' : 'none';
    clicheRow.style.display = type === 'personalized' ? 'flex' : 'none';

    if (qty < moq) {
        warning.innerText = `⚠️ Mínimo ${moq} unidades para esta opción.`;
        addBtn.disabled = true;
        addBtn.style.opacity = '0.5';
    } else {
        warning.innerText = '';
        addBtn.disabled = false;
        addBtn.style.opacity = '1';
    }

    // Pricing logic
    let pricePerMillar = 0;
    if (type === 'standard') {
        // Standard products get a 15% discount from the best price tier available
        const basePrice = product.price90 || product.price48 || product.price36 || product.price25 || product.price11 || product.price10 || product.price9 || product.price6 || product.price5 || product.price3 || product.price10r || 0;
        pricePerMillar = basePrice * 0.85;
    } else {
        if (product.id.includes('tortuga')) {
            pricePerMillar = product.price9;
        } else if (product.id.includes('servilleta')) {
            if (product.id.includes('20-')) pricePerMillar = product.price90;
            else if (product.id.includes('1-8-')) pricePerMillar = product.price36;
            else if (product.id.includes('1-6-')) pricePerMillar = product.price48;
        } else if (product.id.includes('vaso')) {
            pricePerMillar = qty >= 11000 ? product.price11 : product.price5;
        } else if (product.id.includes('bolsa')) {
            pricePerMillar = qty >= 10000 ? (product.price10 || product.price5) : product.price5;
        } else if (product.id.includes('sobre')) {
            pricePerMillar = qty >= 25000 ? (product.price25 || product.price10) : product.price10;
        } else if (product.id.includes('pizza')) {
            pricePerMillar = qty >= 6000 ? product.price6 : product.price3;
        } else if (product.id.includes('ensaladera')) {
            pricePerMillar = qty >= 11000 ? product.price11 : product.price5;
        } else if (product.id.includes('resma')) {
            pricePerMillar = product.price10r; // Price per resma
        } else {
            pricePerMillar = product.price10 || product.price5 || 0;
        }
    }

    const multiplier = product.id.includes('resma') ? 1 : 1/1000;
    const subtotal = qty * multiplier * pricePerMillar;
    const cliche = type === 'personalized' ? (inks * product.clichePrice) : 0;
    
    document.getElementById('config-subtotal').innerText = subtotal.toFixed(2) + '€';
    document.getElementById('config-cliche').innerText = cliche + '€';
    document.getElementById('config-total').innerText = (subtotal + cliche).toFixed(2) + '€';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const type = document.getElementById('config-type').value;
    const qty = parseInt(document.getElementById('config-qty').value);
    const inks = parseInt(document.getElementById('config-inks').value);
    
    const item = {
        productId,
        name: product.name + (type === 'personalized' ? ` (${inks} Tintas)` : ' (Estándar)'),
        qty,
        type,
        total: parseFloat(document.getElementById('config-total').innerText)
    };

    cart.push(item);
    updateOrderSummary();
    closeModal();
}

function updateOrderSummary() {
    const container = document.getElementById('order-items');
    const totalEl = document.getElementById('grand-total');
    
    if (!container) return;

    container.innerHTML = cart.length === 0 
        ? '<p style="color:var(--gray-medium); text-align:center;">No hay productos en tu pedido.</p>' 
        : '';

    let subtotal = 0;
    cart.forEach((item, index) => {
        subtotal += item.total;
        const div = document.createElement('div');
        div.className = 'order-item';
        div.innerHTML = `
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <small>${item.qty} unidades</small>
            </div>
            <div style="text-align:right;">
                <div class="order-item-price">${item.total.toFixed(2)}€</div>
                <small style="color:red; cursor:pointer;" onclick="removeFromCart(${index})">Eliminar</small>
            </div>
        `;
        container.appendChild(div);
    });

    const iva = subtotal * 0.21;
    const grandTotal = subtotal + iva;

    totalEl.innerText = subtotal.toFixed(2) + '€';
    document.getElementById('iva-amount').innerText = iva.toFixed(2) + '€';
    document.getElementById('grand-total-display').innerText = grandTotal.toFixed(2) + '€';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateOrderSummary();
}

function setZone(zone) {
    userZone = zone;
    document.getElementById('btn-bcn').className = zone === 'bcn' ? 'nav-btn active' : 'nav-btn';
    document.getElementById('btn-rest').className = zone === 'rest' ? 'nav-btn active' : 'nav-btn';
    updateOrderSummary();
}

// Order Submission Logic
function submitOrder(channel) {
    if (cart.length === 0) {
        alert('El pedido está vacío. Añade algún producto primero.');
        return;
    }

    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const notes = document.getElementById('notes').value;
    
    if (!name || !company || !email || !phone) {
        alert('Por favor, completa tus datos de contacto antes de enviar.');
        return;
    }

    const stockUsage = document.getElementById('stock-usage').value;
    const stockEndDate = document.getElementById('stock-end-date').value;
    const subtotal = document.getElementById('grand-total').innerText;
    const iva = document.getElementById('iva-amount').innerText;
    const total = document.getElementById('grand-total-display').innerText;

    let orderDetails = cart.map(item => `- ${item.name}: ${item.qty} uds (${item.total.toFixed(2)}€)`).join('%0A');
    
    let stockInfo = "";
    if (stockUsage || stockEndDate) {
        stockInfo = `%0A%0A🔄 PREVISIÓN DE STOCK:%0A- Consumo: ${stockUsage || 'No indicado'} uds/semana%0A- Fin stock est.: ${stockEndDate || 'No indicado'}`;
    }

    const message = `SOLICITUD DE PEDIDO B2B - MCPACK%0A----------------------%0AComercial: Alfonso Lacomercial%0A----------------------%0ACliente: ${name}%0AEmpresa: ${company}%0AEmail: ${email}%0ATel: ${phone}%0AZona: ${userZone === 'bcn' ? 'Barcelona' : 'Península'}%0A%0APedido:%0A${orderDetails}${stockInfo}%0A%0ASubtotal (Base): ${subtotal}%0AIVA (21%): ${iva}%0ATOTAL SOLICITUD: ${total}%0A%0ANotas: ${notes}`;

    if (channel === 'whatsapp') {
        const waNumber = "34639647471";
        const waUrl = `https://wa.me/${waNumber}?text=${message}`;
        window.open(waUrl, '_blank');
    } else if (channel === 'email') {
        const mailSubject = `Nuevo Pedido B2B - ${company}`;
        const mailBody = message.replace(/%0A/g, '%0D%0A');
        const mailUrl = `mailto:alfonsolacomercial@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;
        window.location.href = mailUrl;
    }

    // Small log to avoid multiple alerts
    console.log(`Pedido enviado vía ${channel}`);
}

// Window init
window.onload = init;
