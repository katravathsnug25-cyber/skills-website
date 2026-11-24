/* ===== Skill data — exact order & content (preserved from original) ===== */
const SKILLS = [
  { category: "Languages", skills: ["Python", "C++", "SQL"] },
  { category: "Machine Learning", skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Neural Networks", "Deep Learning", "Model Evaluation"] },
  { category: "Generative AI", skills: ["LLMs", "Prompt Engineering", "RAG", "Embeddings", "Vector Databases", "AI Agents", "Workflow Automation"] },
  { category: "NLP & Vision", skills: ["Text Classification", "Semantic Search", "Transformer-based NLP", "Image Classification"] },
  { category: "Data", skills: ["NumPy", "Pandas", "Data Preprocessing", "Exploratory Data Analysis", "Statistical Analysis"] },
  { category: "Backend & Tools", skills: ["REST APIs", "FastAPI", "Git", "GitHub", "Docker", "Linux", "Cloud Computing", "MLOps"] },
  { category: "Core CS", skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "System Design"] },
];

const CATEGORY_NAMES = SKILLS.map(s => s.category); /* exact 7-category order */
const ALL_CAT = "All";

/* ===== UI element references ===== */
const els = {
  appHeader: document.getElementById("appHeader"),
  menuBtn: document.getElementById("menuBtn"),
  drawer: document.getElementById("drawer"),
  drawerOverlay: document.getElementById("drawerOverlay"),
  skillSearch: document.getElementById("skillSearch"),
  searchClear: document.getElementById("searchClear"),
  categoryStrip: document.getElementById("categoryStrip"),
  categoryGrid: document.getElementById("categoryGrid"),
  skillsAccordion: document.getElementById("skillsAccordion"),
  noResults: document.getElementById("noResults"),
  allBtn: document.getElementById("allBtn"),
  bottomLinks: document.querySelectorAll(".bn-item"),
  profileNavBtn: document.getElementById("profileNavBtn"),
};

/* ===== State ===== */
const state = {
  focused: ALL_CAT,       /* "All" or a category name */
  open: new Set(CATEGORY_NAMES), /* accordion sections currently open */
  query: "",
};

/* ===== Color / icon lookups ===== */
const ICONS = {
  All: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="9" height="9" rx="2.5"></rect><rect x="18" y="5" width="9" height="9" rx="2.5"></rect><rect x="5" y="18" width="9" height="9" rx="2.5"></rect><rect x="18" y="18" width="9" height="9" rx="2.5"></rect></svg>`,
  Languages: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 10 5 16 11 22"></polyline><polyline points="21 10 27 16 21 22"></polyline><line x1="18" y1="8" x2="14" y2="24"></line></svg>`,
  "Machine Learning": `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="7" r="3"></circle><circle cx="8" cy="25" r="3"></circle><circle cx="24" cy="25" r="3"></circle><line x1="16" y1="7" x2="8" y2="25"></line><line x1="16" y1="7" x2="24" y2="25"></line><line x1="8" y1="25" x2="24" y2="25"></line></svg>`,
  "Generative AI": `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l2.4 6.6L24 14l-6.6 2.4L15 23l-2.4-6.6L6 14l6.6-2.4z"/><path d="M24 22l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z"/></svg>`,
  "NLP & Vision": `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16s5-8.5 12-8.5S28 16 28 16s-5 8.5-12 8.5S4 16 4 16z"/><circle cx="16" cy="16" r="3.6"/></svg>`,
  Data: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="16" cy="8" rx="9" ry="4"></ellipse><path d="M7 8v16c0 2.2 4 4 9 4s9-1.8 9-4V8"/><path d="M7 16c0 2.2 4 4 9 4s9-1.8 9-4"/></svg>`,
  "Backend & Tools": `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="20" height="8.5" rx="2.5"/><rect x="6" y="17.5" width="20" height="8.5" rx="2.5"/><line x1="10" y1="10.25" x2="10.2" y2="10.25"/><line x1="14" y1="10.25" x2="14.2" y2="10.25"/><line x1="10" y1="21.75" x2="10.2" y2="21.75"/><line x1="14" y1="21.75" x2="14.2" y2="21.75"/></svg>`,
  Core CS: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="10" width="12" height="12" rx="2.5"/><line x1="16" y1="4" x2="16" y2="10"/><line x1="16" y1="22" x2="16" y2="28"/><line x1="4" y1="16" x2="10" y2="16"/><line x1="22" y1="16" x2="28" y2="16"/></svg>`,
};

const HEX = {
  Languages:"#4f46e5","Machine Learning":"#7c3aed","Generative AI":"#d97706",
  "NLP & Vision":"#0891b2",Data:"#059669","Backend & Tools":"#0d9488","Core CS":"#2563eb",
};

function hexFor(name){ return name===ALL_CAT ? HEX.Languages : HEX[name]; }
function tint(hex,a=0.12){const h=hex.replace('#','');return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`}
function qsa(selector){return Array.from(document.querySelectorAll(selector))}

/* ===== Render ===== */
function buildStrip(){
  const items = [ALL_CAT, ...CATEGORY_NAMES];
  els.categoryStrip.innerHTML = "";
  items.forEach(name=>{
    const b = document.createElement("button");
    b.type="button"; b.className="strip-item"; b.dataset.cat=name;
    b.setAttribute("role","tab");
    b.innerHTML=`<span class="strip-ic" style="--c:${hexFor(name)}">${ICONS[name]||ICONS.All}</span><span class="strip-name">${name}</span>`;
    b.addEventListener("click",()=>focusCategory(name));
    els.categoryStrip.appendChild(b);
  });
  qsa(".strip-item").forEach(b=>b.classList.toggle("active",b.dataset.cat===state.focused));
}

function buildGrid(){
  els.categoryGrid.innerHTML = "";
  CATEGORY_NAMES.forEach(name=>{
    const skillCount = SKILLS.find(s=>s.category===name).skills.length;
    const card = document.createElement("button");
    card.type="button"; card.className="tile"; card.dataset.cat=name;
    const color = hexFor(name);
    card.innerHTML=`<span class="tile-art" style="color:${color};background:${tint(color,0.12)}">${ICONS[name]||ICONS.All}</span><span class="tile-name">${name}</span><span class="tile-count">${skillCount} skills</span>`;
    card.addEventListener("click",()=>focusCategory(name));
    els.categoryGrid.appendChild(card);
  });
  qsa(".tile").forEach(b=>b.classList.toggle("active",b.dataset.cat===state.focused));
}

function renderAccordion(){
  const q = (state.query||"").trim().toLowerCase();
  els.skillsAccordion.innerHTML = "";
  let shown = 0;

  SKILLS.forEach(({category, skills}) => {
    const matches = q ? skills.filter(s => s.toLowerCase().includes(q)) : skills;
    if (q && matches.length === 0) return; /* hide non-matching categories during search */
    shown += matches.length;
    const isOpen = q ? true : state.open.has(category);
    const item = document.createElement("div");
    item.className = "acc-item" + (isOpen ? " open" : "");
    item.dataset.cat = category;
    const color = hexFor(category);
    item.innerHTML = `
      <button class="acc-head" aria-expanded="${isOpen}" data-cat="${category}">
        <span class="acc-ic" style="--c:${color};background:${tint(color,0.12)};color:${color}">${ICONS[category]||ICONS.All}</span>
        <span class="acc-title">${category}</span>
        <span class="acc-badge">${matches.length}</span>
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="acc-body"><div class="acc-inner"><div class="chips">${matches.map(s=>`<span class="chip">${s}</span>`).join("")}</div></div></div>
    `;
    els.skillsAccordion.appendChild(item);
  });

  els.noResults.hidden = shown > 0;
}

/* ===== Category focus logic ===== */
function focusCategory(name){
  if (name === ALL_CAT){
    state.focused = ALL_CAT;
    state.open = new Set(CATEGORY_NAMES);
  }else{
    state.focused = name;
    state.open = new Set([name]);
  }
  state.query = ""; els.skillSearch.value = ""; els.searchClear.hidden = true;
  updateActive();
  renderAccordion();

  requestAnimationFrame(()=>{
    const target = document.getElementById("skills");
    if (name===ALL_CAT){
      target.scrollIntoView({behavior:"smooth",block:"start"});
    }else{
      const el = els.skillsAccordion.querySelector(`.acc-item[data-cat="${name}"]`);
      if(el) el.scrollIntoView({behavior:"smooth",block:"center"});
    }
  });
}

/* recompute highlight when sections are toggled manually */
function refreshHighlightFromOpen(){
  if (state.open.size === CATEGORY_NAMES.length) state.focused = ALL_CAT;
  else if (state.open.size === 1) state.focused = [...state.open][0];
  else state.focused = null; /* mixed */
  updateActive();
}

/* Update active highlights on strip/grid */
function updateActive(){
  qsa(".strip-item").forEach(b=>b.classList.toggle("active",b.dataset.cat===state.focused));
  qsa(".tile").forEach(b=>b.classList.toggle("active",b.dataset.cat===state.focused));
}

/* Manual accordion toggle */
els.skillsAccordion.addEventListener("click", e=>{
  const head = e.target.closest(".acc-head");
  if(!head) return;
  const cat = head.dataset.cat;
  if (state.query.trim()) return; /* don't collapse while searching */
  if (state.open.has(cat)) state.open.delete(cat);
  else state.open.add(cat);
  refreshHighlightFromOpen();
  renderAccordion();
});

/* View all */
els.allBtn.addEventListener("click",()=>focusCategory(ALL_CAT));

/* ===== Search ===== */
let prevLen = 0;
els.skillSearch.addEventListener("input", e=>{
  state.query = e.target.value;
  els.searchClear.hidden = state.query.length === 0;
  renderAccordion(); /* matching sections auto-open */
  if (prevLen === 0 && state.query.length > 0){
    document.getElementById("skills").scrollIntoView({behavior:"smooth",block:"start"});
  }
  prevLen = state.query.length;
});
els.searchClear.addEventListener("click",()=>{
  state.query=""; els.skillSearch.value=""; els.searchClear.hidden=true;
  renderAccordion();
});

/* ===== Drawer ===== */
function openDrawer(){
  els.drawer.classList.add("open");
  els.drawerOverlay.classList.add("show");
  els.menuBtn.setAttribute("aria-expanded","true");
  els.drawer.setAttribute("aria-hidden","false");
  document.body.classList.add("no-scroll");
}
function closeDrawer(){
  els.drawer.classList.remove("open");
  els.drawerOverlay.classList.remove("show");
  els.menuBtn.setAttribute("aria-expanded","false");
  els.drawer.setAttribute("aria-hidden","true");
  document.body.classList.remove("no-scroll");
}
els.menuBtn.addEventListener("click",openDrawer);
els.drawerOverlay.addEventListener("click",closeDrawer);
els.drawer.addEventListener("click", e=>{
  if(e.target.closest(".drawer-link")) closeDrawer();
});
els.profileNavBtn.addEventListener("click",openDrawer);

/* Bottom nav scroll-to */
document.querySelectorAll(".bottom-nav .bn-item").forEach(b=>{
  b.addEventListener("click",()=>{
    const el = document.getElementById(b.dataset.target);
    if(el) el.scrollIntoView({behavior:"smooth",block:"start"});
  });
});

/* Header scroll shadow */
window.addEventListener("scroll",()=>{
  els.appHeader.classList.toggle("scrolled", window.scrollY > 8);
});

/* ===== Init ===== */
buildStrip();
buildGrid();
renderAccordion();
updateActive();

/* exact 7 categories + 36 skills order & names — preserved */