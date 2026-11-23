/* ===== Skill data — exact order & content required ===== */
const SKILLS = [
  { category: "Languages", skills: ["Python", "C++", "SQL"] },
  { category: "Machine Learning", skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Neural Networks", "Deep Learning", "Model Evaluation"] },
  { category: "Generative AI", skills: ["LLMs", "Prompt Engineering", "RAG", "Embeddings", "Vector Databases", "AI Agents", "Workflow Automation"] },
  { category: "NLP & Vision", skills: ["Text Classification", "Semantic Search", "Transformer-based NLP", "Image Classification"] },
  { category: "Data", skills: ["NumPy", "Pandas", "Data Preprocessing", "Exploratory Data Analysis", "Statistical Analysis"] },
  { category: "Backend & Tools", skills: ["REST APIs", "FastAPI", "Git", "GitHub", "Docker", "Linux", "Cloud Computing", "MLOps"] },
  { category: "Core CS", skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "System Design"] },
];

const CATEGORIES = ["All", ...SKILLS.map((s) => s.category)];

/* ===== State ===== */
let currentCategory = "All";
let currentQuery = "";

/* ===== DOM elements ===== */
const filtersEl = document.getElementById("categoryFilters");
const skillsGrid = document.getElementById("skillsGrid");
const noResultsEl = document.getElementById("noResults");
const searchInput = document.getElementById("skillSearch");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

/* ===== Build category filter chips ===== */
function buildFilters() {
  CATEGORIES.forEach((name) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (name === "All" ? " active" : "");
    btn.dataset.category = name;
    btn.textContent = name;
    btn.addEventListener("click", () => {
      currentCategory = name;
      document.querySelectorAll(".chip").forEach((b) => {
        b.classList.toggle("active", b.dataset.category === name);
      });
      renderSkills();
    });
    filtersEl.appendChild(btn);
  });
}

/* ===== Compute filtered groups ===== */
function getGroups(category, query) {
  const q = query.trim().toLowerCase();
  let groups;
  if (category === "All") {
    groups = SKILLS.map((s) => ({ category: s.category, skills: s.skills }));
  } else {
    const found = SKILLS.find((s) => s.category === category);
    groups = found ? [{ category, skills: found.skills }] : [];
  }
  return groups
    .map((g) => ({ category: g.category, skills: g.skills.filter((s) => s.toLowerCase().includes(q)) }))
    .filter((g) => g.skills.length > 0);
}

/* ===== Render skills grid ===== */
function renderSkills() {
  const groups = getGroups(currentCategory, currentQuery);
  skillsGrid.innerHTML = "";
  noResultsEl.hidden = groups.length > 0;

  if (groups.length === 0) return;

  groups.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "skill-group";

    // Heading only when browsing all categories or when a search is active
    if (currentCategory === "All" || currentQuery.trim() !== "") {
      const heading = document.createElement("h3");
      heading.textContent = group.category;
      groupEl.appendChild(heading);
    }

    const grid = document.createElement("div");
    grid.className = "skills-grid";
    group.skills.forEach((skill) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.textContent = skill;
      grid.appendChild(card);
    });
    groupEl.appendChild(grid);
    skillsGrid.appendChild(groupEl);
  });
}

/* ===== Events ===== */
searchInput.addEventListener("input", (e) => {
  currentQuery = e.target.value;
  renderSkills();
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

navbar.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

/* ===== Init ===== */
buildFilters();
renderSkills();
