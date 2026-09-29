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
    gallery: "R.E.M - A game of Dreams",
    link: ""
  },
  {
    title: "Awesome Defence Force (University project)",
    status: "In planning",
    description: "A 2.5D Turn-based strategy game, that combines all the cliche, and cheese, of a typical 80's soldier action game. AWESOME!",
    image: "images/awesome-defence-force.jpg",
    gallery: "Awesome Defence Force",
    link: ""
  },
  {
    title: "Scaccorum Arcanum (Personal project)",
    status: "In development",
    description: "An exciting hybrid of Chess, and TCG.",
    image: "images/scaccorum-arcanum.jpg",
    gallery: "Scaccorum Arcanum",
    link: ""
  },
  {
    title: "Enjoy your stay! (Personal project)",
    status: "In development",
    description: "A chilling horror, set in an abandoned hotel. Your haunted hosts? Three sinister porcelain dolls, that think freely!",
    image: "assets/EYSCover.png",
    gallery: "Enjoy your stay!",
    link: ""
  },
  {
    title: "Aetherfall (Personal project)",
    status: "In development",
    description: "An all Scottish RPG. Uncover the story of how the Aether comet fell to earth, and the consequences of its arrival.",
    image: "assets/AetherfallCover.png",
    gallery: "Aetherfall",
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
      { src: "assets/gallery/rem/01.png", caption: "Screenshot 1" },
      { src: "assets/gallery/rem/02.png", caption: "Screenshot 2" },
      { src: "assets/gallery/rem/03.png", caption: "Screenshot 3" },
      { youtube: "VIDEO_ID", caption: "Trailer" }
    ]
  },
  {
    game: "Awesome Defence Force",
    images: [
      { src: "assets/gallery/awesome-defence-force/01.png", caption: "Screenshot 1" },
      { src: "assets/gallery/awesome-defence-force/02.png", caption: "Screenshot 2" },
      { src: "assets/gallery/awesome-defence-force/03.png", caption: "Screenshot 3" },
      { youtube: "VIDEO_ID", caption: "Trailer" }
    ]
  },
  {
    game: "Scaccorum Arcanum",
    images: [
      { src: "assets/gallery/scaccorum-arcanum/01.png", caption: "Screenshot 1" },
      { src: "assets/gallery/scaccorum-arcanum/02.png", caption: "Screenshot 2" },
      { src: "assets/gallery/scaccorum-arcanum/03.png", caption: "Screenshot 3" },
      { youtube: "VIDEO_ID", caption: "Trailer" }
    ]
  },
  {
    game: "Enjoy your stay!",
    images: [
      { src: "assets/gallery/enjoy-your-stay/01.png", caption: "Screenshot 1" },
      { src: "assets/gallery/enjoy-your-stay/02.png", caption: "Screenshot 2" },
      { src: "assets/gallery/enjoy-your-stay/03.png", caption: "Screenshot 3" },
      { youtube: "VIDEO_ID", caption: "Trailer" }
    ]
  },
  {
    game: "Aetherfall",
    images: [
      { src: "assets/gallery/aetherfall/01.png", caption: "Screenshot 1" },
      { src: "assets/gallery/aetherfall/02.png", caption: "Screenshot 2" },
      { src: "assets/gallery/aetherfall/03.png", caption: "Screenshot 3" },
      { youtube: "VIDEO_ID", caption: "Trailer" }
    ]
  }
];

// ----- INSPIRATION -----
// Each item needs ONE of: image, youtube, or video.
// tags: use any words you like. Filter buttons are created from them automatically.
// credit + link: always name the artist or game, and link to the original.

const inspirations = [
  {
    title: "Silent Hill Franchise",
    credit: "Konami Games",
    tags: ["Lighting", "Atmosphere"],
    note: "A masterclass in using light and fog to make a place feel heavy, lonely and unsettling.",
    items: [
      {
        image: "assets/inspiration/SilentHill2Remake.jpg",
        credit: "VG247",
        caption: "A gritty, depressing scene",
        link: "https://www.vg247.com/multiple-silent-hill-projects-are-getting-trailers-really-soon-claims-leaker",        
        note: "This inspires my passion of level design for many reasons, the first, the mood has most certainly been encapsulated in this shot. You can feel the weight of the world on your shoulders, and yet the feeling of complete aloneness. The second, the masterful use of lighting, is a perfect example of how to use light to create a mood."
      },
            {
        image: "assets/inspiration/SilentHill2DarkHall.jpg",
        credit: "konami & Sony",       
        caption: "A dark, atmospheric hallway",
        link: "https://blog.playstation.com/2022/10/19/silent-hill-2-remake-revealed-first-gameplay-details-and-design-changes-announced/",
        note: "Another exquisite example of lighting and atmosphere. This shot captures true horror, and the feeling of being alone in a dark. Capturing the right level design, for Interiors, is equally as importnat to me as the worlds they live in. There has to be a sense of awe, somewhere that the player would be happy to spend a little more time in. Not in this case though!"
      },
      {
        image: "assets/inspiration/SilentHillTownFall.png",
        credit: "Jonathon Ducrocq",
        caption: "A foggy, unsettling street scene",
        link: "https://nohiro.artstation.com/projects/m8lwJ1",
        note: "This from Konami's most recent installation to the franchise, Silent Hill Town Fall. I really like the way the lighting is used to create a sense of dread and unease. The fog and the shadows create a sense of mystery and tension, making the player feel like they are in a dangerous and unpredictable environment. To me, this creatres a sense of immersion and engagement, as the player is constantly on edge and unsure of what might be lurking around the next corner.",
      }
    ]
  },
  {
    title: "Example collection",
    credit: "Artist or game name",
    link: "https://www.artstation.com/",
    tags: ["Level Flow"],
    note: "Swap this for your own pick.",
    items: [
      { image: "assets/inspiration/example-01.png", caption: "First image", note: "What this teaches you." },
      { youtube: "VIDEO_ID", caption: "A video", note: "What this shows you about how a space leads the player." }
    ]
  }
];

// ----- BLOG -----
// Date format: "YYYY-MM-DD". Newest posts show first automatically.
// Each item in body is one paragraph.
const blogPosts = [
  {
    title: "Welcome to my selection of blogs",
    date: "2026-09-29",
    intro: "Devlogs, design thinking and behind-the-scenes looks at the games I'm building.",
    content: [
      "Here, is where I document everything I learn about level design, and the games I build. I will be posting devlogs, design thinking, and behind-the-scenes looks at the games I'm building. Stay tuned!",
    ]
  },
  {
    title: "Example post - how the blog works",
    date: "2026-09-28",
    cover: "assets/blog/example-cover.png",
    intro: "A quick example showing every type of block a post can use. Delete this once your first real post is up.",
    content: [
      "A paragraph is just text inside quotes. You can use <em>italics</em> and <strong>bold</strong> inside any text.",
      { heading: "A section heading" },
      "Headings break a long post into sections, which makes 1000 words much easier to read.",
      {
        image: "assets/blog/example-01.png",
        caption: "What this image shows and why it matters",
        credit: "Bloober Team / Konami",
        link: ""
      },
      {
        quote: "Fundamentally integrates player perception and active problem solving, which builds investment.",
        cite: "Matthias Worch & Harvey Smith, GDC 2010"
      },
      { list: ["A bullet point", "Another bullet point"] },
      "End with your own conclusion. That's the part readers remember."
    ],
    sources: [
      {
        text: "Totten, C. W. (2019). <em>An Architectural Approach to Level Design</em> (2nd ed.). CRC Press.",
        link: "https://books.google.com/books/about/Architectural_Approach_to_Level_Design.html?id=PQqWDwAAQBAJ"
      },
      {
        text: "Smith, H. & Worch, M. (2010). <em>What Happened Here? Environmental Storytelling</em>. Game Developers Conference.",
        link: "https://gdcvault.com/play/1012647/What-Happened-Here-Environmental"
      }
    ]
  }
];

// =====================================================
// YOU DON'T NEED TO EDIT BELOW THIS LINE
// =====================================================

// ----- HELPERS -----
function isVideoItem(item) {
  return Boolean(item.youtube || item.video);
}

function thumbFor(item) {
  if (item.youtube) return `https://img.youtube.com/vi/${item.youtube}/hqdefault.jpg`;
  if (item.video) return item.poster || "";
  return item.src || "";
}

function countLabel(items) {
  const videos = items.filter(isVideoItem).length;
  const images = items.length - videos;
  const parts = [];
  if (images) parts.push(`${images} ${images === 1 ? "image" : "images"}`);
  if (videos) parts.push(`${videos} ${videos === 1 ? "video" : "videos"}`);
  return parts.join(" · ");
}

// ----- PROJECTS -----
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects.map(project => {
    const galleryIndex = galleryGames.findIndex(game => game.game === project.gallery);
    const clickable = galleryIndex !== -1;

    const classes = ["card"];
    if (project.image) classes.push("has-image");
    if (clickable) classes.push("clickable");

    return `
      <article class="${classes.join(" ")}"
               ${project.image ? `style="--card-image: url('${project.image}')"` : ""}
               ${clickable ? `data-gallery="${galleryIndex}" tabindex="0" role="button" aria-label="View gallery for ${project.gallery}"` : ""}>
        <span class="tag">${project.status}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener">Learn more &rarr;</a>` : ""}
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".card.clickable").forEach(card => {
    const open = () => openViewer(Number(card.dataset.gallery));

    card.addEventListener("click", event => {
      if (event.target.closest("a")) return;
      open();
    });

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

// ----- INSPIRATION -----
let activeFilter = "All";
let filterTimer = null;

function inspirationItems(insp) {
  return (insp.items || []).map(item => ({
    src: item.image,
    youtube: item.youtube,
    video: item.video,
    poster: item.poster,
    caption: item.caption || insp.title,
    note: item.note || "",
    credit: item.credit || insp.credit || "",
    link: item.link || insp.link || ""
  }));
}

function matchesFilter(insp) {
  return activeFilter === "All" || (insp.tags || []).includes(activeFilter);
}

function renderInspirationFilters() {
  const container = document.getElementById("inspirationFilters");
  if (!container) return;

  const tags = ["All", ...new Set(inspirations.flatMap(insp => insp.tags || []))];
  container.innerHTML = tags.map(tag => `
    <button class="filter-button ${tag === activeFilter ? "active" : ""}" data-tag="${tag}">${tag}</button>
  `).join("");

  container.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => applyFilter(button.dataset.tag));
  });
}

function renderInspiration() {
  const grid = document.getElementById("inspirationGrid");
  if (!grid) return;

  grid.innerHTML = inspirations.map((insp, i) => {
    const items = inspirationItems(insp);
    const coverItem = items.find(item => thumbFor(item));
    const cover = coverItem ? thumbFor(coverItem) : "";
    const summary = insp.note || (items[0] && items[0].note) || "";

    const mediaClasses = ["inspiration-media"];
    if (coverItem && isVideoItem(coverItem)) mediaClasses.push("is-video");
    if (!cover) mediaClasses.push("missing");

    return `
      <article class="inspiration-item" data-index="${i}" ${matchesFilter(insp) ? "" : "hidden"}>
        <button class="${mediaClasses.join(" ")}" aria-label="Open ${insp.title}">
          ${cover ? `<img src="${cover}" alt="${insp.title}" loading="lazy"
               onerror="this.parentElement.classList.add('missing'); this.remove();">` : ""}
          ${items.length ? `<span class="inspiration-count">${countLabel(items)}</span>` : ""}
        </button>
        <div class="inspiration-body">
          <div class="inspiration-tags">
            ${(insp.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <h3>${insp.title}</h3>
          ${insp.credit ? `<p class="inspiration-credit">${insp.link
            ? `<a href="${insp.link}" target="_blank" rel="noopener">${insp.credit} &#8599;</a>`
            : insp.credit}</p>` : ""}
          ${summary ? `<p class="inspiration-note">${summary}</p>` : ""}
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".inspiration-item").forEach(tile => {
    tile.querySelector(".inspiration-media").addEventListener("click", () => {
      const insp = inspirations[Number(tile.dataset.index)];
      openCollection(insp.title, inspirationItems(insp), 0);
    });
  });
}

function applyFilter(tag) {
  if (tag === activeFilter) return;
  activeFilter = tag;

  document.querySelectorAll(".filter-button").forEach(button => {
    button.classList.toggle("active", button.dataset.tag === tag);
  });

  const grid = document.getElementById("inspirationGrid");
  grid.classList.add("fading");

  clearTimeout(filterTimer);
  filterTimer = setTimeout(() => {
    grid.querySelectorAll(".inspiration-item").forEach(tile => {
      tile.hidden = !matchesFilter(inspirations[Number(tile.dataset.index)]);
    });
    grid.classList.remove("fading");
  }, 180);
}

// ----- VIEWER -----
let currentItems = [];
let currentIndex = 0;
let imageSwapToken = 0;
const IMAGE_FADE_MS = 150;

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
      <div class="viewer-stage" id="viewerStage">
        <button class="viewer-arrow viewer-prev" aria-label="Previous">&#8249;</button>
        <img id="viewerImage" alt="">
        <video id="viewerVideo" controls playsinline preload="metadata"></video>
        <iframe id="viewerYoutube" title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <button class="viewer-arrow viewer-next" aria-label="Next">&#8250;</button>
      </div>
      <p id="viewerCaption" class="viewer-caption"></p>
      <p id="viewerNote" class="viewer-note" hidden></p>
      <p id="viewerSourceWrap" class="viewer-source" hidden></p>
      <div id="viewerThumbs" class="viewer-thumbs"></div>
    </div>
  `;
  document.body.appendChild(viewer);

  viewer.querySelector(".viewer-backdrop").addEventListener("click", closeViewer);
  viewer.querySelector(".viewer-close").addEventListener("click", closeViewer);
  viewer.querySelector(".viewer-prev").addEventListener("click", () => showItem(currentIndex - 1));
  viewer.querySelector(".viewer-next").addEventListener("click", () => showItem(currentIndex + 1));

  const stage = document.getElementById("viewerStage");
  const image = document.getElementById("viewerImage");
  const video = document.getElementById("viewerVideo");

  image.addEventListener("load", () => {
    image.classList.remove("loading");
    if (stage.classList.contains("show-image")) {
      stage.classList.remove("missing");
      image.style.display = "block";
    }
  });
  image.addEventListener("error", () => {
    image.classList.remove("loading");
    if (stage.classList.contains("show-image")) {
      stage.classList.add("missing");
      image.style.display = "none";
    }
  });
  video.addEventListener("error", () => {
    if (stage.classList.contains("show-video") && video.getAttribute("src")) {
      stage.classList.add("missing");
      video.style.display = "none";
    }
  });

  document.addEventListener("keydown", event => {
    if (viewer.hidden) return;
    if (event.key === "Escape") closeViewer();
    if (event.key === "ArrowLeft") showItem(currentIndex - 1);
    if (event.key === "ArrowRight") showItem(currentIndex + 1);
  });
}

// Shows only the player that's needed and hides the others.
function showOnlyMedia(kind) {
  const media = {
    image: document.getElementById("viewerImage"),
    video: document.getElementById("viewerVideo"),
    youtube: document.getElementById("viewerYoutube")
  };
  Object.entries(media).forEach(([name, element]) => {
    element.style.display = name === kind ? "block" : "none";
    element.style.width = "100%";
    element.style.height = "100%";
    element.style.border = "0";
  });
  media.image.style.objectFit = "contain";
}

// Fade the current image out while the next one preloads,
// then swap and fade in once both are finished.
function swapImage(src, alt) {
  const image = document.getElementById("viewerImage");
  const token = ++imageSwapToken;

  if (image.getAttribute("src") === src) {
    image.alt = alt;
    image.classList.remove("loading");
    return;
  }

  image.classList.add("loading");

  const fadeOut = new Promise(resolve => setTimeout(resolve, IMAGE_FADE_MS));
  const preload = new Promise(resolve => {
    const next = new Image();
    next.onload = () => resolve();
    next.onerror = () => resolve();
    next.src = src;
  });

  Promise.all([fadeOut, preload]).then(() => {
    if (token !== imageSwapToken) return;
    image.alt = alt;
    image.src = src;
  });
}

function stopMedia() {
  const video = document.getElementById("viewerVideo");
  const youtube = document.getElementById("viewerYoutube");

  if (video.getAttribute("src")) {
    video.pause();
    video.removeAttribute("src");
    video.removeAttribute("poster");
    video.load();
  }

  const youtubeSrc = youtube.getAttribute("src");
  if (youtubeSrc && youtubeSrc !== "about:blank") {
    youtube.src = "about:blank";
  }
}

function openViewer(gameIndex) {
  const game = galleryGames[gameIndex];
  if (!game) return;
  openCollection(game.game, game.images, 0);
}

function openCollection(title, items, startIndex = 0) {
  if (!items || !items.length) return;
  currentItems = items;

  const viewer = document.getElementById("viewer");
  document.getElementById("viewerTitle").textContent = title;
  viewer.classList.toggle("single", items.length === 1);

  const thumbs = document.getElementById("viewerThumbs");
  thumbs.innerHTML = items.map((item, i) => {
    const thumb = thumbFor(item);
    return `
      <button class="viewer-thumb ${isVideoItem(item) ? "is-video" : ""}" data-index="${i}" aria-label="View item ${i + 1}">
        <span>${i + 1}</span>
        ${thumb ? `<img src="${thumb}" alt="" onerror="this.remove();">` : ""}
      </button>
    `;
  }).join("");

  thumbs.querySelectorAll(".viewer-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => showItem(Number(thumb.dataset.index)));
  });

  viewer.hidden = false;
  document.body.style.overflow = "hidden";
  showItem(startIndex);
}

function showItem(index) {
  const total = currentItems.length;
  currentIndex = (index + total) % total;
  const item = currentItems[currentIndex];

  const stage = document.getElementById("viewerStage");
  const image = document.getElementById("viewerImage");
  const video = document.getElementById("viewerVideo");
  const youtube = document.getElementById("viewerYoutube");
  const wasShowingImage = stage.classList.contains("show-image");

  stopMedia();
  stage.classList.remove("missing", "show-image", "show-video", "show-youtube");

  if (item.youtube) {
    imageSwapToken++;
    showOnlyMedia("youtube");
    youtube.src = `https://www.youtube-nocookie.com/embed/${item.youtube}`;
    stage.classList.add("show-youtube");
  } else if (item.video) {
    imageSwapToken++;
    showOnlyMedia("video");
    if (item.poster) video.poster = item.poster;
    video.src = item.video;
    stage.classList.add("show-video");
  } else {
    if (!wasShowingImage) image.classList.add("loading");
    showOnlyMedia("image");
    stage.classList.add("show-image");
    swapImage(item.src, item.caption || "");
  }

  document.getElementById("viewerCaption").textContent =
    `${item.caption || ""}  (${currentIndex + 1} / ${total})`;

  const note = document.getElementById("viewerNote");
  note.textContent = item.note || "";
  note.hidden = !item.note;

  const sourceWrap = document.getElementById("viewerSourceWrap");
  sourceWrap.textContent = "";
  if (item.credit || item.link) {
    const label = item.credit ? `Credit: ${item.credit}` : "View original source";
    if (item.link) {
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = `${label} \u2197`;
      sourceWrap.appendChild(link);
    } else {
      sourceWrap.textContent = label;
    }
    sourceWrap.hidden = false;
  } else {
    sourceWrap.hidden = true;
  }

  document.querySelectorAll(".viewer-thumb").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === currentIndex);
  });
}

function closeViewer() {
  stopMedia();
  imageSwapToken++;
  document.getElementById("viewer").hidden = true;
  document.body.style.overflow = "";
}

// ----- BLOG -----
function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function postContent(post) {
  return post.content || post.body || [];
}

function readingTime(post) {
  const text = postContent(post).map(block => {
    if (typeof block === "string") return block;
    if (block.list) return block.list.join(" ");
    return block.heading || block.subheading || block.quote || block.caption || "";
  }).join(" ");
  const words = text.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function sortedPosts() {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

function renderBlog() {
  const list = document.getElementById("blogList");
  if (!list) return;

  const posts = sortedPosts();
  list.innerHTML = posts.map((post, i) => {
    const firstBlock = postContent(post)[0];
    const intro = post.intro || (typeof firstBlock === "string" ? firstBlock : "");
    return `
      <article class="blog-card" data-index="${i}" tabindex="0" role="button" aria-label="Read ${post.title}">
        <div class="blog-cover ${post.cover ? "" : "missing"}">
          ${post.cover ? `<img src="${post.cover}" alt="" loading="lazy"
               onerror="this.parentElement.classList.add('missing'); this.remove();">` : ""}
        </div>
        <div class="blog-card-body">
          <p class="blog-meta">${formatDate(post.date)} · ${readingTime(post)} min read</p>
          <h3>${post.title}</h3>
          ${intro ? `<p class="blog-intro">${intro}</p>` : ""}
          <span class="blog-read">Read post &rarr;</span>
        </div>
      </article>
    `;
  }).join("");

  list.querySelectorAll(".blog-card").forEach(card => {
    const open = () => openPost(posts[Number(card.dataset.index)]);
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

// ----- BLOG READER -----
function buildReader() {
  const reader = document.createElement("div");
  reader.id = "reader";
  reader.className = "reader";
  reader.hidden = true;
  reader.innerHTML = `
    <div class="reader-backdrop"></div>
    <button class="reader-close" aria-label="Close post">&times;</button>
    <article class="reader-panel" id="readerContent"></article>
  `;
  document.body.appendChild(reader);

  reader.querySelector(".reader-backdrop").addEventListener("click", closePost);
  reader.querySelector(".reader-close").addEventListener("click", closePost);

  document.addEventListener("keydown", event => {
    if (reader.hidden) return;
    if (event.key === "Escape" && document.getElementById("viewer").hidden) closePost();
  });
}

function renderBlock(block) {
  if (typeof block === "string") return `<p>${block}</p>`;

  if (block.heading) return `<h2>${block.heading}</h2>`;
  if (block.subheading) return `<h3>${block.subheading}</h3>`;

  if (block.image) {
    const credit = block.credit
      ? `<span class="reader-credit">${block.link
          ? `<a href="${block.link}" target="_blank" rel="noopener">${block.credit} &#8599;</a>`
          : block.credit}</span>`
      : "";
    return `
      <figure class="reader-figure">
        <img src="${block.image}" alt="${block.caption || ""}" loading="lazy"
             onerror="this.parentElement.classList.add('missing'); this.remove();">
        ${block.caption || credit ? `<figcaption>${block.caption || ""}${credit}</figcaption>` : ""}
      </figure>
    `;
  }

  if (block.youtube) {
    return `
      <figure class="reader-figure">
        <div class="reader-video">
          <iframe src="https://www.youtube-nocookie.com/embed/${block.youtube}"
                  title="${block.caption || "Video"}"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
        ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
      </figure>
    `;
  }

  if (block.quote) {
    return `
      <blockquote>
        <p>${block.quote}</p>
        ${block.cite ? `${block.cite}` : ""}
      </blockquote>
    `;
  }

  if (block.list) {
    return `<ul>${block.list.map(item => `<li>${item}</li>`).join("")}</ul>`;
  }

  return "";
}

function openPost(post) {
  if (!post) return;
  const reader = document.getElementById("reader");
  const content = document.getElementById("readerContent");
  const sources = post.sources || [];

  content.innerHTML = `
    ${post.cover ? `
      <div class="reader-cover">
        <img src="${post.cover}" alt="" onerror="this.parentElement.remove();">
      </div>` : ""}
    <p class="reader-meta">${formatDate(post.date)} · ${readingTime(post)} min read</p>
    <h1 class="reader-title">${post.title}</h1>
    ${post.intro ? `<p class="reader-intro">${post.intro}</p>` : ""}
    <div class="reader-body">
      ${postContent(post).map(renderBlock).join("")}
    </div>
    ${sources.length ? `
      <section class="reader-sources">
        <h2>Sources</h2>
        <ol>
          ${sources.map(source => {
            const text = typeof source === "string" ? source : source.text;
            const link = typeof source === "string" ? "" : source.link;
            return `<li>${text}${link ? ` <a href="${link}" target="_blank" rel="noopener">${link} &#8599;</a>` : ""}</li>`;
          }).join("")}
        </ol>
      </section>` : ""}
  `;

  reader.hidden = false;
  reader.scrollTop = 0;
  document.body.style.overflow = "hidden";
  history.replaceState(null, "", `#post-${slugify(post.title)}`);
}

function closePost() {
  const reader = document.getElementById("reader");
  reader.hidden = true;
  document.getElementById("readerContent").innerHTML = "";
  document.body.style.overflow = "";
  if (location.hash.startsWith("#post-")) {
    history.replaceState(null, "", location.pathname + location.search);
  }
}

function openPostFromLink() {
  if (!location.hash.startsWith("#post-")) return;
  const slug = decodeURIComponent(location.hash.slice(6));
  const post = blogPosts.find(p => slugify(p.title) === slug);
  if (post) openPost(post);
}

// ----- START -----
document.getElementById("year").textContent = new Date().getFullYear();
buildViewer();
buildReader();
renderProjects();
renderInspirationFilters();
renderInspiration();
renderBlog();
openPostFromLink();