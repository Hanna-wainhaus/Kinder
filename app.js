/* =====================================================
   DATOS: PRODUCTOS
===================================================== */
const PRODUCTS = [
  {
    id: "p1",
    character: "Alicia",
    name: "La curiosa",
    sizes: ["2", "4", "6", "8", "10"],
    price: 18500,
    bg: "var(--celeste)",
    icon: iconAlicia()
  },
  {
    id: "p2",
    character: "Conejo Blanco",
    name: "El apurado",
    sizes: ["2", "4", "6", "8", "10"],
    price: 18500,
    bg: "var(--crema-2)",
    icon: iconConejo()
  },
  {
    id: "p3",
    character: "Gato Risón",
    name: "El misterioso",
    sizes: ["2", "4", "6", "8", "10"],
    price: 19500,
    bg: "var(--lavanda)",
    icon: iconGato()
  },
  {
    id: "p4",
    character: "Sombrerero",
    name: "El de la fiesta",
    sizes: ["2", "4", "6", "8", "10"],
    price: 19500,
    bg: "var(--manteca)",
    icon: iconSombrerero()
  },
  {
    id: "p5",
    character: "Reina de Corazones",
    name: "La que manda",
    sizes: ["2", "4", "6", "8", "10"],
    price: 20500,
    bg: "var(--rosa)",
    icon: iconReina()
  },
  {
    id: "p6",
    character: "Oruga Azul",
    name: "La sabia",
    sizes: ["2", "4", "6", "8", "10"],
    price: 18500,
    bg: "var(--menta)",
    icon: iconOruga()
  }
];

/* =====================================================
   DATOS: PAQUETES ("Armá tu mundo")
===================================================== */
const BUNDLES = [
  {
    id: "b1",
    eyebrow: "Para empezar",
    name: "Té de las 5",
    remeras: 1,
    eggs: 3,
    price: 32000,
    oldPrice: 37000
  },
  {
    id: "b2",
    eyebrow: "El más elegido",
    name: "Madriguera completa",
    remeras: 2,
    eggs: 6,
    price: 58000,
    oldPrice: 68500
  },
  {
    id: "b3",
    eyebrow: "Para regalar en grande",
    name: "El país entero",
    remeras: 3,
    eggs: 10,
    price: 85000,
    oldPrice: 100500
  }
];

/* =====================================================
   ILUSTRACIONES SVG ORIGINALES (siluetas delicadas)
===================================================== */
function iconAlicia(){
  return `<svg viewBox="0 0 100 100" width="72%" height="72%">
    <path d="M50 30c6 0 10 5 10 11 0 4-2 8-5 10 9 3 15 11 16 21l3 22c1 4-2 8-6 8H32c-4 0-7-4-6-8l3-22c1-10 7-18 16-21-3-2-5-6-5-10 0-6 4-11 10-11z" fill="#3E2E4A"/>
    <path d="M32 46c5-4 26-4 31 0" stroke="#C9E4F0" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function iconConejo(){
  return `<svg viewBox="0 0 100 100" width="70%" height="70%">
    <ellipse cx="50" cy="58" rx="22" ry="18" fill="#3E2E4A"/>
    <ellipse cx="38" cy="30" rx="6" ry="18" fill="#3E2E4A"/>
    <ellipse cx="58" cy="30" rx="6" ry="18" fill="#3E2E4A"/>
    <circle cx="42" cy="54" r="2.2" fill="#FDFBF6"/>
    <circle cx="56" cy="54" r="2.2" fill="#FDFBF6"/>
    <path d="M46 63c2 2 6 2 8 0" stroke="#FDFBF6" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function iconGato(){
  return `<svg viewBox="0 0 100 100" width="72%" height="72%">
    <path d="M30 40l8-16 6 14c4-1 8-1 12 0l6-14 8 16c2 8 0 18-7 24-4 3-9 5-13 5s-9-2-13-5c-7-6-9-16-7-24z" fill="#3E2E4A"/>
    <path d="M40 52c3 3 3 7 0 10M60 52c-3 3-3 7 0 10" stroke="#F5E6A8" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M44 60c3 2 9 2 12 0" stroke="#F5E6A8" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function iconSombrerero(){
  return `<svg viewBox="0 0 100 100" width="72%" height="72%">
    <ellipse cx="50" cy="62" rx="30" ry="6" fill="#3E2E4A"/>
    <rect x="34" y="26" width="32" height="34" rx="3" fill="#3E2E4A"/>
    <rect x="34" y="42" width="32" height="7" fill="#F3D1D9"/>
    <rect x="30" y="55" width="40" height="7" rx="3" fill="#3E2E4A"/>
  </svg>`;
}
function iconReina(){
  return `<svg viewBox="0 0 100 100" width="70%" height="70%">
    <path d="M32 46l6-16 6 10 6-14 6 14 6-10 6 16v6H32z" fill="#3E2E4A"/>
    <rect x="32" y="52" width="36" height="8" fill="#3E2E4A"/>
    <path d="M50 40l4 6-4 4-4-4z" fill="#F3D1D9"/>
  </svg>`;
}
function iconOruga(){
  return `<svg viewBox="0 0 100 100" width="72%" height="72%">
    <circle cx="30" cy="60" r="9" fill="#3E2E4A"/>
    <circle cx="46" cy="58" r="10" fill="#3E2E4A"/>
    <circle cx="63" cy="55" r="11" fill="#3E2E4A"/>
    <circle cx="70" cy="45" r="3" fill="#FDFBF6"/>
    <path d="M63 40c2-4 6-6 10-5" stroke="#3E2E4A" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`;
}

/* =====================================================
   ESTADO DEL CARRITO
===================================================== */
const STORAGE_KEY = "mimoKinderCart";
let cart = loadCart();

/* talle seleccionado por producto (memoria en UI, no persistente) */
const selectedSizes = {};
PRODUCTS.forEach(p => selectedSizes[p.id] = p.sizes[Math.floor(p.sizes.length / 2)]);

function loadCart(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    console.error("No se pudo leer el carrito guardado", e);
    return [];
  }
}

function saveCart(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }catch(e){
    console.error("No se pudo guardar el carrito", e);
  }
}

/* =====================================================
   RENDER: PRODUCTOS
===================================================== */
const productGrid = document.getElementById("productGrid");

function renderProducts(){
  productGrid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-image" style="background:${p.bg}">${p.icon}</div>
      <p class="product-character">${p.character}</p>
      <h3 class="product-name">${p.name}</h3>
      <div class="product-sizes" data-product="${p.id}">
        ${p.sizes.map(s => `
          <button type="button"
            class="size-pill ${selectedSizes[p.id] === s ? "selected" : ""}"
            data-size="${s}">${s}</button>
        `).join("")}
      </div>
      <div class="product-footer">
        <span class="product-price">${formatPrice(p.price)}</span>
        <button type="button" class="add-btn" data-add-product="${p.id}">Agregar al carrito</button>
      </div>
    </article>
  `).join("");
}

productGrid.addEventListener("click", (e) => {
  const sizeBtn = e.target.closest(".size-pill");
  if(sizeBtn){
    const wrapper = sizeBtn.closest(".product-sizes");
    const productId = wrapper.dataset.product;
    selectedSizes[productId] = sizeBtn.dataset.size;
    wrapper.querySelectorAll(".size-pill").forEach(b => b.classList.remove("selected"));
    sizeBtn.classList.add("selected");
    return;
  }
  const addBtn = e.target.closest("[data-add-product]");
  if(addBtn){
    addProductToCart(addBtn.dataset.addProduct);
  }
});

function addProductToCart(productId){
  const product = PRODUCTS.find(p => p.id === productId);
  const size = selectedSizes[productId];
  const lineId = `${productId}-${size}`;
  const existing = cart.find(item => item.lineId === lineId);

  if(existing){
    existing.qty += 1;
  }else{
    cart.push({
      lineId,
      type: "product",
      refId: productId,
      name: product.name,
      character: product.character,
      size,
      price: product.price,
      qty: 1,
      bg: product.bg,
      icon: product.icon
    });
  }
  persistAndRender();
  openCart();
}

/* =====================================================
   RENDER: PAQUETES
===================================================== */
const bundleGrid = document.getElementById("bundleGrid");

function renderBundles(){
  bundleGrid.innerHTML = BUNDLES.map(b => `
    <article class="bundle-card">
      <p class="bundle-eyebrow">${b.eyebrow}</p>
      <h3 class="bundle-name">${b.name}</h3>
      <ul class="bundle-includes">
        <li>${b.remeras} ${b.remeras === 1 ? "remera" : "remeras"} a elección de la colección</li>
        <li>Canasta con <span class="bundle-eggs">${b.eggs} huevos</span> Kinder Sorpresa</li>
        <li>Presentación especial edición espejo</li>
      </ul>
      <div class="bundle-footer">
        <div class="bundle-price-block">
          <span class="bundle-old-price">${formatPrice(b.oldPrice)}</span>
          <span class="bundle-price">${formatPrice(b.price)}</span>
        </div>
        <button type="button" class="add-btn" data-add-bundle="${b.id}">Agregar al carrito</button>
      </div>
    </article>
  `).join("");
}

bundleGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add-bundle]");
  if(!btn) return;
  addBundleToCart(btn.dataset.addBundle);
});

function addBundleToCart(bundleId){
  const bundle = BUNDLES.find(b => b.id === bundleId);
  const lineId = `bundle-${bundleId}`;
  const existing = cart.find(item => item.lineId === lineId);

  if(existing){
    existing.qty += 1;
  }else{
    cart.push({
      lineId,
      type: "bundle",
      refId: bundleId,
      name: bundle.name,
      character: `${bundle.remeras} remera(s) + ${bundle.eggs} huevos`,
      size: null,
      price: bundle.price,
      qty: 1,
      bg: "var(--manteca)",
      icon: iconBundle()
    });
  }
  persistAndRender();
  openCart();
}

function iconBundle(){
  return `<svg viewBox="0 0 100 100" width="60%" height="60%">
    <path d="M30 45c0-11 9-20 20-20s20 9 20 20" fill="none" stroke="#3E2E4A" stroke-width="4"/>
    <rect x="24" y="45" width="52" height="30" rx="6" fill="#3E2E4A"/>
    <ellipse cx="50" cy="45" rx="26" ry="7" fill="#F3D1D9"/>
  </svg>`;
}

/* =====================================================
   RENDER: CARRITO
===================================================== */
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

function renderCart(){
  if(cart.length === 0){
    cartItemsEl.innerHTML = `<p class="cart-empty" id="cartEmptyMsg">Todavía no agregaste nada. El espejo espera.</p>`;
  }else{
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item" data-line="${item.lineId}">
        <div class="cart-item-thumb" style="background:${item.bg}">${item.icon}</div>
        <div>
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-meta">${item.character}${item.size ? " · Talle " + item.size : ""}</p>
          <div class="qty-control">
            <button type="button" data-decrease="${item.lineId}" aria-label="Restar cantidad">&minus;</button>
            <span>${item.qty}</span>
            <button type="button" data-increase="${item.lineId}" aria-label="Sumar cantidad">&plus;</button>
          </div>
        </div>
        <div class="cart-item-right">
          <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
          <button type="button" class="remove-btn" data-remove="${item.lineId}">Eliminar</button>
        </div>
      </div>
    `).join("");
  }

  const totalUnits = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  cartCountEl.textContent = totalUnits;
  cartTotalEl.textContent = formatPrice(totalPrice);
  checkoutBtn.disabled = cart.length === 0;
}

cartItemsEl.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-increase]");
  const dec = e.target.closest("[data-decrease]");
  const rem = e.target.closest("[data-remove]");

  if(inc) changeQty(inc.dataset.increase, 1);
  if(dec) changeQty(dec.dataset.decrease, -1);
  if(rem) removeFromCart(rem.dataset.remove);
});

function changeQty(lineId, delta){
  const item = cart.find(i => i.lineId === lineId);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){
    cart = cart.filter(i => i.lineId !== lineId);
  }
  persistAndRender();
}

function removeFromCart(lineId){
  cart = cart.filter(i => i.lineId !== lineId);
  persistAndRender();
}

function persistAndRender(){
  saveCart();
  renderCart();
}

/* =====================================================
   DRAWER DEL CARRITO (abrir / cerrar)
===================================================== */
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartToggle = document.getElementById("cartToggle");
const cartClose = document.getElementById("cartClose");

function openCart(){
  cartOverlay.classList.add("open");
  cartDrawer.classList.add("open");
}
function closeCart(){
  cartOverlay.classList.remove("open");
  cartDrawer.classList.remove("open");
}

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* =====================================================
   COMPRA SIMULADA
===================================================== */
const orderModalOverlay = document.getElementById("orderModalOverlay");
const orderCodeEl = document.getElementById("orderCode");
const closeOrderModal = document.getElementById("closeOrderModal");

checkoutBtn.addEventListener("click", () => {
  if(cart.length === 0) return;
  const code = generateOrderCode();
  orderCodeEl.textContent = code;

  cart = [];
  persistAndRender();
  closeCart();
  orderModalOverlay.classList.add("open");
});

closeOrderModal.addEventListener("click", () => {
  orderModalOverlay.classList.remove("open");
});
orderModalOverlay.addEventListener("click", (e) => {
  if(e.target === orderModalOverlay) orderModalOverlay.classList.remove("open");
});

function generateOrderCode(){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";
  let code = "MK-";
  for(let i = 0; i < 6; i++){
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

/* =====================================================
   HELPERS
===================================================== */
function formatPrice(value){
  return "$" + value.toLocaleString("es-AR");
}

/* =====================================================
   INIT
===================================================== */
renderProducts();
renderBundles();
renderCart();
