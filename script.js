// =====================================================
// EDIT YOUR CONTENT HERE
// =====================================================

// ----- PROJECTS -----
// image: the card's background picture. Leave as "" for a plain card.
// link: leave as "" if there's nothing to link to yet.
const projects = [
  {
    title: "R.E.M - A game of Dreams (University project)",
    status: "In planning",
    description: "A cube-world puzzle game themed around REM sleep.",
    image: "assets/REMFrontCover.png",
    link: ""
  },
  {
    title: "Awesome Defence Force (University project)",
    status: "In planning",
    description: "A 2.5D Turn-based strategy game, that combines all the cliche, and cheese, of a typical 80's soldier action game. AWESOME!",
    image: "images/awesome-defence-force.jpg",
    link: ""
  },
  {
    title: "Scaccorum Arcanum (Personal project)",
    status: "In development",
    description: "An exciting hybrid of Chess, and TCG.",
    image: "images/scaccorum-arcanum.jpg",
    link: ""
  },
  {
    title: "Enjoy your stay! (Personal project)",
    status: "In development",
    description: "A chilling horror, set in an abandoned hotel. Your haunted hosts? Three sinister porcelain dolls, that think freely!",
    image: "assets/EYSCover.png",
    link: ""
  },
  {
    title: "Aetherfall (Personal project)",
    status: "In development",
    description: "An all Scottish RPG. Uncover the story of how the Aether comet fell to earth, and the consequences of its arrival.",
    image: "assets/AetherfallCover.png",
    link: ""
  }
];

// ----- GALLERY -----
// One entry per game. The first image in each list is used as the cover tile.
// Put each game's images in its own folder inside images/gallery/.
const galleryGames = [
  {
    game: "R.E.M - A game of Dreams",
    images: [
      { src: "images/gallery/rem/01.jpg", caption: "Concept art" },
      { src: "images/gallery/rem/02.jpg", caption: "Cube world" },
      { src: "images/gallery/rem/03.jpg", caption: "Puzzle room" }
    ]
  },
  {
    game: "Awesome Defence Force",
    images: [
      { src: "images/gallery/awesome-defence-force/01.jpg", caption: "Battlefield" },
      { src: "images/gallery/awesome-defence-force/02.jpg", caption: "The squad" },
      { src: "images/gallery/awesome-defence-force/03.jpg", caption: "Turn-based combat" }
    ]
  },
  {
    game: "Scaccorum Arcanum",
    images: [
      { src: "images/gallery/scaccorum-arcanum/01.jpg", caption: "Arena" },
      { src: "images/gallery/scaccorum-arcanum/02.jpg", caption: "Cards" },
      { src: "images/gallery/scaccorum-arcanum/03.jpg", caption: "Main menu" }
    ]
  },
  {
    game: "Enjoy your stay!",
    images: [
      { src: "images/gallery/enjoy-your-stay/01.jpg", caption: "The hotel lobby" },
      { src: "images/gallery/enjoy-your-stay/02.jpg", caption: "Your hosts" },
      { src: "images/gallery/enjoy-your-stay/03.jpg", caption: "Corridors" }
    ]
  },
  {
    game: "Aetherfall",
    images: [
      { src: "images/gallery/aetherfall/01.jpg", caption: "The Aether comet" },
      { src: "images/gallery/aetherfall/02.jpg", caption: "The Highlands" },
      { src: "images/gallery/aetherfall/03.jpg", caption: "Character art" }
    ]
  }
];

// ----- BLOG -----
// Date format: "YYYY-MM-DD". Newest posts show first automatically.
// Each item in body is one paragraph.
const blogPosts = [
  {
    title: "Welcome to the JazzGames blog",
    date: "2026-09-28",
    body: [
      "This is my first post. I'll be sharing devlogs, progress updates, and behind-the-scenes looks at the games I'm building.",
      "Stay tuned for more!"
    ]
  }
];

// =====================================================
// YOU DON'T NEED TO EDIT BELOW THIS LINE
// =====================================================

// ----- PROJECTS -----
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects.map(project => `
    <article class="card ${project.image ? "has-image" : ""}"
             ${project.image ? `style="--card-image: url('${project.image}')"` : ""}>
      <span class="tag">${project.status}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener">Learn more &rarr;</a>` : ""}
    </article>
  `).join("");
}

// ----- GALLERY TILES -----
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = galleryGames.map((game, index) => {
    const cover = game.images.length ? game.images[0].src : "";
    const count = game.images.length;
    return `
      <button class="gallery-game" data-index="${index}">
        <div class="gallery-cover">
          <img src="${cover}" alt="${game.game}" loading="lazy"
               onerror="this.parentElement.classList.add('missing'); this.remove();">
          <span class="gallery-count">${count} ${count === 1 ? "image" : "images"}</span>
        </div>
        <span class="gallery-name">${game.game}</span>
      </button>
    `;
  }).join("");

  grid.querySelectorAll(".gallery-game").forEach(tile => {
    tile.addEventListener("click", () => openViewer(Number(tile.dataset.index)));
  });
}

// ----- GALLERY VIEWER -----
let currentGame = null;
let currentIndex = 0;

function buildViewer() {
  const viewer = document.createElement("div");
  viewer.id = "viewer";
  viewer.className = "viewer";
  viewer.hidden = true;
  viewer.innerHTML = `
    <div class="viewer-backdrop"></div>
    <div class="viewer-panel">
      <div class="viewer-header">
        <h3 id="viewerTitle"></h3>
        <button class="viewer-close" aria-label="Close">&times;</button>
      </div>
      <div class="viewer-stage">
        <button class="viewer-arrow viewer-prev" aria-label="Previous image">&#8249;</button>
        <img id="viewerImage" alt="">
        <button class="viewer-arrow viewer-next" aria-label="Next image">&#8250;</button>
      </div>
      <p id="viewerCaption" class="viewer-caption"></p>
      <div id="viewerThumbs" class="viewer-thumbs"></div>
    </div>
  `;
  document.body.appendChild(viewer);

  viewer.querySelector(".viewer-backdrop").addEventListener("click", closeViewer);
  viewer.querySelector(".viewer-close").addEventListener("click", closeViewer);
  viewer.querySelector(".viewer-prev").addEventListener("click", () => showImage(currentIndex - 1));
  viewer.querySelector(".viewer-next").addEventListener("click", () => showImage(currentIndex + 1));

  const image = document.getElementById("viewerImage");
  image.addEventListener("load", () => image.parentElement.classList.remove("missing"));
  image.addEventListener("error", () => image.parentElement.classList.add("missing"));

  document.addEventListener("keydown", event => {
    if (viewer.hidden) return;
    if (event.key === "Escape") closeViewer();
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
  });
}

function openViewer(gameIndex) {
  currentGame = galleryGames[gameIndex];
  if (!currentGame.images.length) return;

  const viewer = document.getElementById("viewer");
  document.getElementById("viewerTitle").textContent = currentGame.game;
  viewer.classList.toggle("single", currentGame.images.length === 1);

  const thumbs = document.getElementById("viewerThumbs");
  thumbs.innerHTML = currentGame.images.map((image, i) => `
    <button class="viewer-thumb" data-index="${i}" aria-label="View image ${i + 1}">
      <span>${i + 1}</span>
      <img src="${image.src}" alt="" onerror="this.remove();">
    </button>
  `).join("");

  thumbs.querySelectorAll(".viewer-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => showImage(Number(thumb.dataset.index)));
  });

  viewer.hidden = false;
  document.body.style.overflow = "hidden";
  showImage(0);
}

function showImage(index) {
  const total = currentGame.images.length;
  currentIndex = (index + total) % total;
  const image = currentGame.images[currentIndex];

  const viewerImage = document.getElementById("viewerImage");
  viewerImage.src = image.src;
  viewerImage.alt = image.caption;

  document.getElementById("viewerCaption").textContent =
    `${image.caption}  (${currentIndex + 1} / ${total})`;

  document.querySelectorAll(".viewer-thumb").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === currentIndex);
  });
}

function closeViewer() {
  document.getElementById("viewer").hidden = true;
  document.body.style.overflow = "";
}

// ----- BLOG -----
function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function renderBlog() {
  const list = document.getElementById("blogList");
  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  list.innerHTML = sortedPosts.map(post => `
    <details class="post">
      <summary>
        <span class="post-title">${post.title}</span>
        <span class="post-date">${formatDate(post.date)}</span>
      </summary>
      ${post.body.map(paragraph => `<p>${paragraph}</p>`).join("")}
    </details>
  `).join("");
}

// ----- START -----
document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
buildViewer();
renderGallery();
renderBlog();