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

/* ===== Certificates & Credentials ===== */
const CERTIFICATES = [
  { title: "Google AI Essentials", issuer: "Google · Coursera · 5 courses", date: "Nov 15, 2026" },
  { title: "Google Prompting Essentials", issuer: "Google · Coursera · 4 courses", date: "Nov 15, 2026" },
  { title: "Google Generative AI Leader Path", issuer: "Google Cloud · Coursera", date: "2024" },
  { title: "AI For Everyone", issuer: "DeepLearning.AI · Coursera", date: "2024" },
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI & Stanford · Coursera", date: "2024" },
  { title: "AI & Data Science Program", issuer: "IIT Roorkee · iHUB DivyaSampark", date: "2024" },
];

/* ===== Featured Projects (with banner visuals + live links) ===== */
const PROJECTS = [
  {
    title: "MasterMax",
    badge: "Deep Learning",
    color: "#4f46e5",
    desc: "A modular deep learning platform for designing, training, and evaluating large-scale neural network systems.",
    tags: ["Deep Learning", "PyTorch", "TensorFlow", "MLOps"],
    liveDemoUrl: "https://katravathsnug25-cyber.github.io/mastermax/",
    githubUrl: "https://github.com/katravathsnug25-cyber",
  },
  {
    title: "MultiSuper",
    badge: "Generative AI",
    color: "#d97706",
    desc: "An ensemble of specialized generative AI models that collaborate to solve complex, multi-step AI problems.",
    tags: ["Generative AI", "LLMs", "Ensemble", "Vector DBs"],
    liveDemoUrl: "https://katravathsnug25-cyber.github.io/multisuper-chatbot/",
    githubUrl: "https://github.com/katravathsnug25-cyber",
  },
  {
    title: "AI-Powered Chatbot",
    badge: "LLM / RAG",
    color: "#0891b2",
    desc: "A retrieval-augmented conversational AI that grounds intelligent responses in enterprise knowledge.",
    tags: ["LLMs", "RAG", "FastAPI", "Embeddings", "Vector DBs"],
    liveDemoUrl: "https://katravathsnug25-cyber.github.io/multisuper-chatbot/",
    githubUrl: "https://github.com/katravathsnug25-cyber",
  },
];

/* ===== Resume Data ===== */
const RESUME = {
  name: "Katravath Santosh Naik",
  title: "AI/ML Developer & B.Tech Electrical Engineering Student",
  location: "NIT Silchar, Silchar, Assam, India",
  email: "naikkatravathsantosh@gmail.com",
  phone: "+91 9282699686",
  github: "https://github.com/katravathsnug25-cyber",
  education: "B.Tech in Electrical Engineering, National Institute of Technology (NIT) Silchar — Silchar, Assam, India",
  summary: "AI/ML Developer building neural networks, RAG systems and production-grade AI agents — turning data into decisions. Open to AI/ML internships, collaborations, and full-time opportunities.",
  projects: [
    { name: "MasterMax (Multi Super Boot)", desc: "A modular deep learning platform for designing, training, and evaluating large-scale neural network systems. Tech: Deep Learning, PyTorch, TensorFlow, MLOps", url: "https://github.com/katravathsnug25-cyber" },
    { name: "MultiSuper", desc: "An ensemble of specialized generative AI models that collaborate to solve complex, multi-step AI problems. Tech: Generative AI, LLMs, Ensemble, Vector DBs", url: "https://katravathsnug25-cyber.github.io/multisuper-chatbot/" },
    { name: "AI-Powered Chatbot", desc: "A retrieval-augmented conversational AI that grounds intelligent responses in enterprise knowledge. Tech: LLMs, RAG, FastAPI, Embeddings, Vector DBs", url: "https://katravathsnug25-cyber.github.io/multisuper-chatbot/" },
  ],
  skillsSummary: "7 Technical Skill Categories · 36 Skills — Languages (Python, C++, SQL), Machine Learning (Scikit-learn, TensorFlow, PyTorch, Neural Networks, Deep Learning, Model Evaluation), Generative AI (LLMs, Prompt Engineering, RAG, Embeddings, Vector Databases, AI Agents, Workflow Automation), NLP & Vision (Text Classification, Semantic Search, Transformer-based NLP, Image Classification), Data (NumPy, Pandas, Data Preprocessing, EDA, Statistical Analysis), Backend & Tools (REST APIs, FastAPI, Git, GitHub, Docker, Linux, Cloud Computing, MLOps), Core CS (Data Structures & Algorithms, OOP, System Design).",
  certificates: CERTIFICATES.map(c => `${c.title} — ${c.issuer} (${c.date})`).join("; "),
};

/* ===== UI element references ===== */
const els = {
  appHeader: document.getElementById("appHeader"),
  menuBtn: document.getElementById("menuBtn"),
  drawer: document.getElementById("drawer"),
  drawerOverlay: document.getElementById("drawerOverlay"),
  drawerClose: document.getElementById("drawerClose"),
  skillSearch: document.getElementById("skillSearch"),
  searchClear: document.getElementById("searchClear"),
  categoryStrip: document.getElementById("categoryStrip"),
  categoryGrid: document.getElementById("categoryGrid"),
  skillsAccordion: document.getElementById("skillsAccordion"),
  noResults: document.getElementById("noResults"),
  allBtn: document.getElementById("allBtn"),
  projectsList: document.getElementById("projectsList"),
  certificatesGrid: document.getElementById("certificatesGrid"),
  profileNavBtn: document.getElementById("profileNavBtn"),
  exploreSkillsBtn: document.getElementById("exploreSkillsBtn"),
  viewProjectsBtn: document.getElementById("viewProjectsBtn"),
  copyEmailBtn: document.getElementById("copyEmailBtn"),
  resumeSection: document.getElementById("resume"),
  resumeModal: document.getElementById("resumeModal"),
  resumeModalClose: document.getElementById("resumeModalClose"),
  resumePrintBtn: document.getElementById("resumePrintBtn"),
  copyPhoneBtn: document.getElementById("copyPhoneBtn"),
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
  Certificate: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="12" r="6"/><path d="M16 18v8l-4-2-4 2V18"/><path d="M13 12l2 2 4-4"/></svg>`,
};

const HEX = {
  Languages:"#4f46e5","Machine Learning":"#7c3aed","Generative AI":"#d97706",
  "NLP & Vision":"#0891b2",Data:"#059669","Backend & Tools":"#0d9488","Core CS":"#2563eb",
};

function hexFor(name){ return name===ALL_CAT ? HEX.Languages : HEX[name]; }
function tint(hex,a=0.12){const h=hex.replace('#','');return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`}
function qsa(selector){return Array.from(document.querySelectorAll(selector))}
function escapeHtml(str){return String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

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
      <div class="acc-body"><div class="acc-inner"><div class="chips">${matches.map(s=>`<span class="chip">${escapeHtml(s)}</span>`).join("")}</div></div></div>
    `;
    els.skillsAccordion.appendChild(item);
  });

  els.noResults.hidden = !q || shown > 0 || hasOtherMatch(q);
}

/* ===== Category focus ===== */
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

/* Expand all 7 categories so all 36 skills are visible at once */
function expandAllCategories(){
  state.focused = ALL_CAT;
  state.open = new Set(CATEGORY_NAMES);
  state.query = "";
  if (els.skillSearch) els.skillSearch.value = "";
  if (els.searchClear) els.searchClear.hidden = true;
  updateActive();
  renderAccordion();
  clearHighlights();
}

function refreshHighlightFromOpen(){
  if (state.open.size === CATEGORY_NAMES.length) state.focused = ALL_CAT;
  else if (state.open.size === 1) state.focused = [...state.open][0];
  else state.focused = null;
  updateActive();
}

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

/* ===== Universal Search ===== */
/* Matches skills, categories, projects and certificates. */
function hasOtherMatch(q){
  if (!q) return false;
  const lower = q.toLowerCase();
  return (
    PROJECTS.some(p => (p.title + " " + p.badge + " " + p.tags.join(" ")).toLowerCase().includes(lower)) ||
    CERTIFICATES.some(c => (c.title + " " + c.issuer).toLowerCase().includes(lower)) ||
    CATEGORY_NAMES.some(c => c.toLowerCase().includes(lower)) ||
    RESUME.name.toLowerCase().includes(lower) ||
    RESUME.education.toLowerCase().includes(lower) ||
    RESUME.projects.some(p => p.name.toLowerCase().includes(lower))
  );
}

function clearHighlights(){
  qsa(".chip, .tags span, .proj-title, .cert-title, .strip-name, .tile-name").forEach(el=>{
    el.classList.remove("search-hit");
  });
}

function applyHighlights(q){
  clearHighlights();
  const lower = (q||"").trim().toLowerCase();
  if (!lower) return;
  qsa(".chip, .tags span, .proj-title, .cert-title, .strip-name, .tile-name").forEach(el=>{
    if (el.textContent.trim().toLowerCase().includes(lower)){
      el.classList.add("search-hit");
    }
  });
}

let prevLen = 0;
els.skillSearch.addEventListener("input", e=>{
  state.query = e.target.value;
  els.searchClear.hidden = state.query.length === 0;
  renderAccordion(); /* matching skill sections auto-open */
  applyHighlights(state.query);
  if (prevLen === 0 && state.query.length > 0){
    document.getElementById("skills").scrollIntoView({behavior:"smooth",block:"start"});
  }
  prevLen = state.query.length;
});
els.searchClear.addEventListener("click",()=>{
  state.query=""; els.skillSearch.value=""; els.searchClear.hidden=true;
  renderAccordion();
  clearHighlights();
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
if (els.drawerClose) els.drawerClose.addEventListener("click",closeDrawer);
els.drawer.addEventListener("click", e=>{
  if(e.target.closest(".drawer-link, .drawer-github")) closeDrawer();
});
document.addEventListener("keydown", e=>{
  if (e.key === "Escape") closeDrawer();
});
els.profileNavBtn.addEventListener("click",openDrawer);

/* ===== Hero CTA buttons ===== */
if (els.exploreSkillsBtn){
  els.exploreSkillsBtn.addEventListener("click", e=>{
    e.preventDefault();
    expandAllCategories();
    requestAnimationFrame(()=>{
      document.getElementById("skills").scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
}
if (els.viewProjectsBtn){
  els.viewProjectsBtn.addEventListener("click", e=>{
    e.preventDefault();
    document.getElementById("projects").scrollIntoView({behavior:"smooth",block:"start"});
  });
}

/* ===== Projects render ===== */
function renderProjects(){
  if (!els.projectsList) return;
  els.projectsList.innerHTML = "";
  PROJECTS.forEach((p, idx)=>{
    const article = document.createElement("article");
    article.className = "proj";
    article.dataset.title = p.title;
    article.style.setProperty("--pc", p.color);
    article.innerHTML = `
      <div class="proj-banner" aria-hidden="true">
        ${bannerSVG(idx, p.color)}
      </div>
      <button class="proj-head" type="button" aria-expanded="false">
        <span class="proj-art" style="color:${p.color};background:${tint(p.color,.12)}">${bannerIcon(idx)}</span>
        <span class="proj-headtext">
          <span class="proj-title">${escapeHtml(p.title)}</span>
          <span class="proj-badge" style="color:${p.color};background:${tint(p.color,.1)}">${escapeHtml(p.badge)}</span>
        </span>
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="proj-body"><div class="proj-inner">
        <p class="proj-desc">${escapeHtml(p.desc)}</p>
        <div class="tags">${p.tags.map(t=>`<span>${escapeHtml(t)}</span>`).join("")}</div>
        <div class="proj-actions">
          <a class="proj-link" href="${p.liveDemoUrl}" target="_blank" rel="noopener">
            Live Demo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>
          </a>
          <a class="proj-link proj-link-gh" href="${p.githubUrl}" target="_blank" rel="noopener">
            GitHub
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
          </a>
        </div>
      </div></div>
    `;
    els.projectsList.appendChild(article);
  });

  /* expand/collapse project cards */
  qsa(".proj-head").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const art = btn.closest(".proj");
      const open = art.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true":"false");
    });
  });
}

/* Distinct banner illustration per project */
function bannerSVG(idx, color){
  if (idx === 0){
    /* MasterMax: neural network nodes */
    return `<svg class="banner-svg" viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs><linearGradient id="mmg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${color}" stop-opacity=".18"/>
        <stop offset="1" stop-color="${color}" stop-opacity=".04"/>
      </linearGradient></defs>
      <rect width="320" height="120" fill="url(#mmg)"/>
      <g stroke="${color}" stroke-width="1.6" opacity=".55">
        <line x1="60" y1="40" x2="150" y2="30"/><line x1="60" y1="40" x2="150" y2="70"/><line x1="60" y1="80" x2="150" y2="70"/><line x1="60" y1="80" x2="150" y2="95"/>
        <line x1="150" y1="30" x2="240" y2="50"/><line x1="150" y1="70" x2="240" y2="50"/><line x1="150" y1="95" x2="240" y2="50"/><line x1="150" y1="30" x2="150" y2="70"/>
      </g>
      <g fill="${color}">
        <circle cx="60" cy="40" r="7"/><circle cx="60" cy="80" r="7"/>
        <circle cx="150" cy="30" r="8"/><circle cx="150" cy="70" r="8"/><circle cx="150" cy="95" r="7"/>
        <circle cx="240" cy="50" r="10" opacity=".9"/>
      </g>
      <g fill="${color}" opacity=".25"><circle cx="290" cy="25" r="4"/><circle cx="300" cy="85" r="5"/><circle cx="30" cy="100" r="4"/></g>
    </svg>`;
  }
  if (idx === 1){
    /* MultiSuper: overlapping ensemble blobs */
    return `<svg class="banner-svg" viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs><linearGradient id="msg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${color}" stop-opacity=".18"/>
        <stop offset="1" stop-color="${color}" stop-opacity=".04"/>
      </linearGradient></defs>
      <rect width="320" height="120" fill="url(#msg)"/>
      <circle cx="130" cy="60" r="42" fill="${color}" opacity=".12"/>
      <circle cx="175" cy="60" r="42" fill="${color}" opacity=".10"/>
      <circle cx="215" cy="60" r="42" fill="${color}" opacity=".08"/>
      <g stroke="${color}" stroke-width="1.8" opacity=".6">
        <circle cx="130" cy="60" r="42"/><circle cx="175" cy="60" r="42"/><circle cx="215" cy="60" r="42"/>
      </g>
      <g fill="${color}" opacity=".85">
        <circle cx="130" cy="60" r="5"/><circle cx="175" cy="60" r="5"/><circle cx="215" cy="60" r="5"/>
      </g>
      <g stroke="${color}" stroke-width="1.4" opacity=".45"><line x1="130" y1="60" x2="175" y2="60"/><line x1="175" y1="60" x2="215" y2="60"/></g>
    </svg>`;
  }
  /* AI-Powered Chatbot: chat bubbles + spark */
  return `<svg class="banner-svg" viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" fill="none">
    <defs><linearGradient id="cbg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${color}" stop-opacity=".18"/>
      <stop offset="1" stop-color="${color}" stop-opacity=".04"/>
    </linearGradient></defs>
    <rect width="320" height="120" fill="url(#cbg)"/>
    <g stroke="${color}" stroke-width="2" opacity=".55" fill="#fff" fill-opacity=".55">
      <rect x="50" y="30" width="120" height="42" rx="14"/>
      <path d="M70 72l-6 14 18-12"/>
    </g>
    <g stroke="${color}" stroke-width="2" opacity=".75" fill="${color}" fill-opacity=".12">
      <rect x="160" y="52" width="110" height="38" rx="14"/>
    </g>
    <g fill="${color}" opacity=".7">
      <circle cx="72" cy="51" r="3.4"/><circle cx="90" cy="51" r="3.4"/><circle cx="108" cy="51" r="3.4"/>
    </g>
    <path d="M250 24l2.6 7.2L260 34l-7.4 2.8L250 44l-2.6-7.2L240 34l7.4-2.8z" fill="${color}" opacity=".85"/>
  </svg>`;
}
function bannerIcon(idx){
  return [ICONS["Machine Learning"], ICONS["Generative AI"], ICONS["NLP & Vision"]][idx];
}

/* ===== Certificates render ===== */
function renderCertificates(){
  if (!els.certificatesGrid) return;
  els.certificatesGrid.innerHTML = "";
  CERTIFICATES.forEach(c=>{
    const div = document.createElement("div");
    div.className = "cert-card";
    div.innerHTML = `
      <div class="cert-icon">${ICONS.Certificate}</div>
      <div class="cert-info">
        <div class="cert-title">${escapeHtml(c.title)}</div>
        <div class="cert-issuer">${escapeHtml(c.issuer)}</div>
      </div>
      <span class="cert-date">${escapeHtml(c.date)}</span>
    `;
    els.certificatesGrid.appendChild(div);
  });
}

/* ===== Copy Email ===== */
const EMAIL = "naikkatravathsantosh@gmail.com";
function copyEmail(){
  const done = ()=>{
    if (!els.copyEmailBtn) return;
    const original = els.copyEmailBtn.innerHTML;
    els.copyEmailBtn.classList.add("copied");
    els.copyEmailBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
    setTimeout(()=>{ els.copyEmailBtn.innerHTML = original; els.copyEmailBtn.classList.remove("copied"); }, 1800);
  };
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(EMAIL).then(done).catch(()=>fallbackCopy(done));
  } else {
    fallbackCopy(done);
  }
}
function fallbackCopy(done){
  const ta = document.createElement("textarea");
  ta.value = EMAIL; ta.setAttribute("readonly","");
  ta.style.position="absolute"; ta.style.left="-9999px";
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand("copy"); }catch(_){}
  document.body.removeChild(ta);
  done();
}
if (els.copyEmailBtn) els.copyEmailBtn.addEventListener("click", copyEmail);

/* ===== Resume modal ===== */
function renderResume(){
  const host = document.getElementById("resumeBody");
  if (!host) return;
  host.innerHTML = `
    <div class="resume-header">
      <div class="resume-monogram">KS</div>
      <div class="resume-title">
        <h1>${escapeHtml(RESUME.name)}</h1>
        <p class="resume-role">${escapeHtml(RESUME.title)}</p>
        <p class="resume-meta">
          <span>${escapeHtml(RESUME.location)}</span>
          <a href="mailto:${RESUME.email}">${escapeHtml(RESUME.email)}</a>
          <a href="tel:${RESUME.phone.replace(/\s/g,'')}">${escapeHtml(RESUME.phone)}</a>
        </p>
      </div>
    </div>
    <div class="resume-section">
      <h2>Summary</h2>
      <p>${escapeHtml(RESUME.summary)}</p>
    </div>
    <div class="resume-section">
      <h2>Education</h2>
      <p>${escapeHtml(RESUME.education)}</p>
    </div>
    <div class="resume-section">
      <h2>Projects</h2>
      <div class="resume-proj-list">
        ${RESUME.projects.map(p=>`
          <div class="resume-proj">
            <div class="resume-proj-head"><span class="resume-proj-name">${escapeHtml(p.name)}</span><a class="resume-proj-link" href="${p.url}" target="_blank" rel="noopener">View →</a></div>
            <p class="resume-proj-desc">${escapeHtml(p.desc)}</p>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="resume-section">
      <h2>Technical Skills — 7 Categories · 36 Skills</h2>
      <p class="resume-skills-text">${escapeHtml(RESUME.skillsSummary)}</p>
      <div class="resume-skills-grid">
        ${SKILLS.map(({category, skills}) => `
          <div class="resume-skill-cat">
            <span class="resume-skill-cat-title">${escapeHtml(category)}</span>
            <div class="resume-skill-chips">${skills.map(s=>`<span class="resume-skill-chip">${escapeHtml(s)}</span>`).join("")}</div>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="resume-section">
      <h2>Certificates &amp; Credentials</h2>
      <div class="resume-cert-list">
        ${CERTIFICATES.map(c=>`
          <div class="resume-cert">
            <span class="resume-cert-title">${escapeHtml(c.title)}</span>
            <span class="resume-cert-issuer">${escapeHtml(c.issuer)}</span>
            <span class="resume-cert-date">${escapeHtml(c.date)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function openResume(){
  if (els.resumeModal) els.resumeModal.classList.add("open");
  if (els.resumeModal) els.resumeModal.setAttribute("aria-hidden","false");
  document.body.classList.add("no-scroll");
}
function closeResume(){
  if (els.resumeModal) els.resumeModal.classList.remove("open");
  if (els.resumeModal) els.resumeModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("no-scroll");
}
/* Drawer links with data-resume="true" open the modal */
document.querySelectorAll('[data-resume="true"]').forEach(el=>{
  el.addEventListener("click", e=>{ e.preventDefault(); openResume(); });
});
if (els.resumeModalClose) els.resumeModalClose.addEventListener("click", closeResume);
if (els.resumeModal) els.resumeModal.addEventListener("click", e=>{
  if (e.target === els.resumeModal) closeResume();
});
if (els.resumePrintBtn) els.resumePrintBtn.addEventListener("click", ()=> window.print());
document.addEventListener("keydown", e=>{
  if (e.key === "Escape") closeResume();
});

/* ===== Phone copy ===== */
const PHONE = "+919282699686";
function copyPhone(){
  const done = ()=>{
    if (!els.copyPhoneBtn) return;
    const original = els.copyPhoneBtn.innerHTML;
    els.copyPhoneBtn.classList.add("copied");
    els.copyPhoneBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
    setTimeout(()=>{ els.copyPhoneBtn.innerHTML = original; els.copyPhoneBtn.classList.remove("copied"); }, 1800);
  };
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(PHONE).then(done).catch(()=>fallbackCopy(done));
  } else {
    fallbackCopy(done);
  }
}
function fallbackCopy(done){
  const ta = document.createElement("textarea");
  ta.value = PHONE; ta.setAttribute("readonly","");
  ta.style.position="absolute"; ta.style.left="-9999px";
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand("copy"); }catch(_){}
  document.body.removeChild(ta);
  done();
}
if (els.copyPhoneBtn) els.copyPhoneBtn.addEventListener("click", copyPhone);

/* ===== Bottom nav scroll-to ===== */
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
renderProjects();
renderCertificates();
renderResume();
updateActive();

/* exact 7 categories + 36 skills order & names — preserved */