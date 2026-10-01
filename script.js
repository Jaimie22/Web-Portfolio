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
      { src: "assets/REMFrontCover.png", caption: "R.E.M - A game of Dreams Cover Concept (Not Final)" },
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
      { src: "assets/EYSCover.png", caption: "Enjoy your stay! Cover Concept (Not Final)" },
      { src: "assets/gallery/enjoy-your-stay/02.png", caption: "Screenshot 2" },
      { src: "assets/gallery/enjoy-your-stay/03.png", caption: "Screenshot 3" },
      { youtube: "VIDEO_ID", caption: "Trailer" }
    ]
  },
  {
    game: "Aetherfall",
    images: [
      { src: "assets/AetherfallCover.png", caption: "Aetherfall Cover Concept (Not Final)" },
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
        image: "assets/Inspiration/SilentHill2Remake.jpg",
        credit: "VG247",
        caption: "A gritty, depressing scene",
        link: "https://www.vg247.com/multiple-silent-hill-projects-are-getting-trailers-really-soon-claims-leaker",        
        note: "This inspires my passion of level design for many reasons, the first, the mood has most certainly been encapsulated in this shot. You can feel the weight of the world on your shoulders, and yet the feeling of complete aloneness. The second, the masterful use of lighting, is a perfect example of how to use light to create a mood."
      },
            {
        image: "assets/Inspiration/SilentHill2DarkHall.jpg",
        credit: "konami & Sony",       
        caption: "A dark, atmospheric hallway",
        link: "https://blog.playstation.com/2022/10/19/silent-hill-2-remake-revealed-first-gameplay-details-and-design-changes-announced/",
        note: "Another exquisite example of lighting and atmosphere. This shot captures true horror, and the feeling of being alone in a dark. Capturing the right level design, for Interiors, is equally as importnat to me as the worlds they live in. There has to be a sense of awe, somewhere that the player would be happy to spend a little more time in. Not in this case though!"
      },
      {
        image: "assets/Inspiration/SilentHillTownFall.png",
        credit: "Jonathan Ducrocq",
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
    title: "Blog 1 - What makes a good level designer?",
    date: "2026-09-24",
    cover: "assets/Blogs/Blog1Image.png",
    intro: "My first look into what makes a great level designer, utlising some of big names in the industry!.",
    content: [
      "<em>A famous game development quote from id Software veteran Jay Wilbur is: “Level design is where the rubber hits the road”.</em> This is a great quote, because it really captures the essence of what level design is all about. It's the part of game development where all the ideas and concepts come together, and the player gets to experience them in a tangible way. It's where the player's skills and abilities are put to the test, and where the game's mechanics are fully realized.",
      { heading: "The rubber & the Road" },
      "With the words of the great jay Wilbur in mind, it draws attention to whom he was referring. Cliff Bleszinski, a level designer at id Software, who was responsible for some of the most iconic levels in gaming history. Bleszinski's work on games like Doom and Quake helped to define the first-person shooter genre, and his levels were known for their tight design, clever use of space, and intense action.",
      "If I use my limited knowledge of level design, I can see how Bleszinski's work exemplifies these principles. For example, in my horror project Enjoy your Stay!, theres use of a door mechanic, whereby the player has to grab hold, and push with a degree of resistence. a simple mechanic to some, but in the eyes of a level designer, this adds gravity, tension, and a sense of unknowning, as openning the door too quick could alert the pursuer, or too slow could mean chances of escape are limited. This now gives creedence to Jay's words. My door mechanic, is the rubber hitting the road!",
      {
        image: "assets/Blogs/Blog1Image.png",
        caption: "Jacincto, and its creatior",
        credit: "id Software & Cliff Bleszinski & microsoft",
        link: ""
      },
      {
        quote: "Thus a good designer has to both dread and seek out other people’s advice.</em> by Jason Rubin",
        cite: "Andy Gavin’s 2011 blog series ‘Making Crash Bandicoot’."
      },
      { list: ["Utilise interesting gameplay mechanics", "Help to add feeling to the levels you design"] },
      "In conlusion, taking notes of what some of the big names in the gaming industry say, I find that the best level designers are those who can balance creativity with functionality, and who are always willing to learn from others."
    ],
    sources: [
      {
        text: "Bleszinski, C. (2000). <em>The Art and Science of Level Design</em>. Game Developers Conference.",
        link: "https://web.archive.org/web/20021203193328/http://www.cliffyb.com/rants/art-sci-ld.shtml"
      },
      {
        text: "The Level Design Book. <em>History of the level designer</em>.",
        link: "https://book.leveldesignbook.com/culture/history-level-designer"
      }
    ]
  },
  {
    title: "Blog 2 - How to add feeling to your levels?",
    date: "2026-09-30",
    cover: "assets/Blogs/Blog2Image.png",
    intro: "What could an aspiring artist do, to give the levels feeling?, personality?.",
    content: [
      "Coming across a blog from I imagine, another aspiring designer, Lena Oduya, She writes and I quote, <em>Great levels don't happen by accident. They're carefully engineered experiences that guide, challenge, and surprise players.</em> This is a great quote, because it really captures the essence of what level design is all about. It's the part of game development where all the ideas and concepts come together, and the player gets to experience them in a tangible way. It's where the player's skills and abilities are put to the test, and where the game's mechanics are fully realized.",
      { heading: "Feeling Immersed yet?" },
      "As you may know, there's a plethora of ways in which a designer, of any gravitas, can add feeling to their designs. First and most obivous i'd say, is the environment. Where are they? in a city? in the woods?. Knowing what world you have to create, then brings everything else into focus.",
      "Now, this may be rather nerdy? but it works I assure you! What i like to do, irrespective of the game, Is find a centralised, hub-like place in the game, and just stand for five minutes. I like to feel by the sounds I hear, or the sights I see. I want to feel Like im the character standing in that world. I recommend giving it a go, the next time you fire up your favourite game!",
      "From there, of course your choice of narrative, lighting, assets, or paths to take, then becomes more clearer. Giving the player options, would most certainly inspire some creativity on the part of the player. Contray to this, assuming a horror game? Give the player as little means as possible!",
      {
        image: "assets/Blogs/Blog2Image.png",
        caption: "Feeling pure Immersion",
        credit: "Easemate US Ai image generator",
        link: "https://www.easemate.ai/?index="
      },
      {
        quote: "<em>To be a great designer, you need to look a little deeper into how people think, and act</em> - Paul Boag",
        cite: "<em>ux design quotes to inspire and motivate you</em>"
      },
      { list: ["Understand what the player expects", "Add a delicate flow, to keep the player engaged"] },
      "In conlusion, A world can only come to life, if you pour yourself into it. A great story can help give a feeling to the levels, but the sights, the sounds, these in my opinion are more tangible, and give whatever I create the meaning i'm looking for in my projects."
    ],
    sources: [
      {
        text: "Tripo3D. (2023). <em>Level Design: The Art of Crafting Engaging Game Worlds</em>. Tripo3D Blog.",
        link: "https://www.tripo3d.ai/blog/level-design"
      },
      {
        text: "Lena Oduya - <em>Level Design Principles: How to Build Game Levels That Players Remember</em>",
        link: "hhttps://gamedesignpath.com/blog/level-design-principles-how-to-build-great-game-levels"
      },
      {
        text: "Kristina Guzikova - 100 ux design quotes to inspire and motivate you",
        link: "https://www.intechnic.com/blog/100-ux-design-quotes-to-inspire-and-motivate-you/"
      }
    ]
  }
];

// =====================================================
// Helpers & Builders
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

// ----- DEVLOG -----
// Entries are loaded from devlog.json, which admin.html updates.
let devlogEntries = [];
let devlogFilter = "All";
let devlogTimer = null;
let updateDevlogArrows = () => {};
const DEVLOG_MAX_THUMBS = 4;

function escapeHTML(text) {
  return String(text ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function typeClass(type) {
  return "type-" + String(type || "update").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

// Works with both the new "images" list and older single "image" entries
function entryImages(entry) {
  if (Array.isArray(entry.images)) return entry.images.filter(Boolean);
  return entry.image ? [entry.image] : [];
}

async function loadDevlog() {
  if (!document.getElementById("devlogTimeline")) return;

  try {
    const response = await fetch(`devlog.json?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    devlogEntries = Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn("Devlog could not be loaded:", error);
    devlogEntries = [];
  }

  devlogEntries.sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  renderDevlogFilters();
  renderDevlog();
  window.addEventListener("resize", () => updateDevlogArrows());
}

function renderDevlogFilters() {
  const container = document.getElementById("devlogFilters");
  if (!container) return;

  const games = [...new Set(devlogEntries.map(entry => entry.game).filter(Boolean))];
  if (games.length < 2) {
    container.innerHTML = "";
    container.style.display = "none";
    return;
  }

  container.style.display = "";
  container.innerHTML = ["All", ...games].map(game => `
    <button class="devlog-filter ${game === devlogFilter ? "active" : ""}" data-game="${escapeHTML(game)}">${escapeHTML(game)}</button>
  `).join("");

  container.querySelectorAll(".devlog-filter").forEach(button => {
    button.addEventListener("click", () => applyDevlogFilter(button.dataset.game));
  });
}

function devlogEntryHTML(entry, i) {
  const points = Array.isArray(entry.points) ? entry.points.filter(Boolean) : [];
  const images = entryImages(entry);
  const shown = images.slice(0, DEVLOG_MAX_THUMBS);
  const extra = images.length - shown.length;
  const visible = devlogFilter === "All" || entry.game === devlogFilter;

  return `
    <article class="devlog-entry" data-index="${i}" ${visible ? "" : "hidden"}>
      <span class="devlog-dot ${typeClass(entry.type)}"></span>
      <div class="devlog-card ${typeClass(entry.type)}">
        <div class="devlog-header">
          <time class="devlog-date" datetime="${escapeHTML(entry.date)}">${entry.date ? formatDate(entry.date) : ""}</time>
          ${entry.type ? `<span class="devlog-type ${typeClass(entry.type)}">${escapeHTML(entry.type)}</span>` : ""}
        </div>
        ${entry.game ? `<p class="devlog-game">${escapeHTML(entry.game)}</p>` : ""}
        <h3>${escapeHTML(entry.title)}</h3>
        ${entry.summary ? `<p class="devlog-summary">${escapeHTML(entry.summary)}</p>` : ""}
        ${points.length ? `<ul class="devlog-points">${points.map(point => `<li>${escapeHTML(point)}</li>`).join("")}</ul>` : ""}
        ${shown.length ? `
          <div class="devlog-gallery ${shown.length === 1 ? "single" : ""}">
            ${shown.map((src, n) => `
              <button class="devlog-image" data-image="${n}" aria-label="Enlarge screenshot ${n + 1}">
                <img src="${escapeHTML(src)}" alt="${escapeHTML(entry.title)}" loading="lazy"
                     onerror="this.parentElement.remove();">
                ${n === shown.length - 1 && extra > 0 ? `<span class="devlog-more">+${extra}</span>` : ""}
              </button>
            `).join("")}
          </div>` : ""}
      </div>
    </article>
  `;
}

function renderDevlog() {
  const timeline = document.getElementById("devlogTimeline");
  if (!timeline) return;

  timeline.classList.toggle("is-empty", devlogEntries.length === 0);

  if (!devlogEntries.length) {
    timeline.innerHTML = `<p class="devlog-empty">No entries yet. Check back soon!</p>`;
    updateDevlogArrows = () => {};
    return;
  }

  timeline.innerHTML = `
    <div class="devlog-slider">
      <button class="devlog-arrow devlog-prev" aria-label="Newer entries">&#8249;</button>
      <div class="devlog-track" tabindex="0" aria-label="Devlog entries, newest first">
        ${devlogEntries.map(devlogEntryHTML).join("")}
      </div>
      <button class="devlog-arrow devlog-next" aria-label="Older entries">&#8250;</button>
    </div>
    <div class="devlog-scale"><span>&larr; Newest</span><span>Oldest &rarr;</span></div>
  `;

  // Screenshot clicks open the viewer with all of that entry's images
  timeline.querySelectorAll(".devlog-entry").forEach(element => {
    const entry = devlogEntries[Number(element.dataset.index)];
    const images = entryImages(entry);

    element.querySelectorAll(".devlog-image").forEach(button => {
      button.addEventListener("click", () => {
        const items = images.map(src => ({ src, caption: entry.title }));
        openCollection(entry.title, items, Number(button.dataset.image));
      });
    });
  });

  // Slider arrows
  const slider = timeline.querySelector(".devlog-slider");
  const track = timeline.querySelector(".devlog-track");
  const prev = timeline.querySelector(".devlog-prev");
  const next = timeline.querySelector(".devlog-next");

  updateDevlogArrows = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    slider.classList.toggle("scrollable", maxScroll > 2);
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll - 2;
  };

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -track.clientWidth * 0.9, behavior: "smooth" });
  });
  next.addEventListener("click", () => {
    track.scrollBy({ left: track.clientWidth * 0.9, behavior: "smooth" });
  });
  track.addEventListener("scroll", updateDevlogArrows, { passive: true });

  updateDevlogArrows();
}

function applyDevlogFilter(game) {
  if (game === devlogFilter) return;
  devlogFilter = game;

  document.querySelectorAll(".devlog-filter").forEach(button => {
    button.classList.toggle("active", button.dataset.game === game);
  });

  const timeline = document.getElementById("devlogTimeline");
  timeline.classList.add("fading");

  clearTimeout(devlogTimer);
  devlogTimer = setTimeout(() => {
    timeline.querySelectorAll(".devlog-entry").forEach(element => {
      const entry = devlogEntries[Number(element.dataset.index)];
      element.hidden = !(game === "All" || entry.game === game);
    });

    const track = timeline.querySelector(".devlog-track");
    if (track) track.scrollLeft = 0;
    updateDevlogArrows();

    timeline.classList.remove("fading");
  }, 180);
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
loadDevlog();