const navLinks = document.querySelectorAll(".navbar .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  });
});

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length > 0) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}

const favoriteSpotlight = document.querySelector("#favoriteSpotlight");

if (favoriteSpotlight) {
  const titleEl = favoriteSpotlight.querySelector("[data-favorite-title]");
  const subtitleEl = favoriteSpotlight.querySelector("[data-favorite-subtitle]");
  const typeEl = favoriteSpotlight.querySelector("[data-favorite-type]");
  const detailEl = favoriteSpotlight.querySelector("[data-favorite-detail]");
  const toolsEl = favoriteSpotlight.querySelector("[data-favorite-tools]");
  const skillsEl = favoriteSpotlight.querySelector("[data-favorite-skills]");
  const linkEl = favoriteSpotlight.querySelector("[data-favorite-link]");

  const favorites = [
    {
      title: '8PPI: A "4x4" Chronicle',
      subtitle: "Abstract Stop Motion on Digital Degradation",
      type: "Long-Term Realized Works",
      tools: "TBD",
      skills: "TBD",
      link: "projects.html",
    },
    {
      title: "Jack.exe & Rose-liet",
      subtitle: "Short description goes here.",
      type: "Long-Term Realized Works",
      tools: "TBD",
      skills: "TBD",
      link: "projects.html",
    },
    {
      title: "Hard Mesh, Soft Body",
      subtitle: "Short description goes here.",
      type: "Long-Term Realized Works",
      tools: "TBD",
      skills: "TBD",
      link: "projects.html",
    },
    {
      title: "Standing Room Only",
      subtitle: "Short description goes here.",
      type: "Long-Term Realized Works",
      tools: "TBD",
      skills: "TBD",
      link: "projects.html",
    },
    {
      title: "Side Effects May Include:",
      subtitle: "America’s Toxic Relationship with Prescription Drugs",
      type: "Supercuts Media Remix Project",
      tools:
        "VideoGrep (command-line tool: supercuts, web scraping), Adobe Premiere, Archival Commercial Footage",
      skills: "Command-Line Fluency (Ubuntu-Linux), Audio-Video Editing, Conceptual Narrative",
      link: "project-common-side-effects.html",
    },
    {
      title: "“Gimme…Love” through a Window",
      subtitle: "Short description goes here.",
      type: "Quick Turnaround Works (< One Week)",
      tools: "TBD",
      skills: "TBD",
      link: "projects.html",
    },
    {
      title: "Sorry, You were Peanuts Speaking",
      subtitle: "Short description goes here.",
      type: "Quick Turnaround Works (< One Week)",
      tools: "TBD",
      skills: "TBD",
      link: "projects.html",
    },
  ];

  let favoriteIndex = 0;

  const renderFavorite = (favorite) => {
    if (!favorite) return;
    titleEl.textContent = favorite.title;
    subtitleEl.textContent = favorite.subtitle;
    typeEl.textContent = favorite.type;
    if (detailEl) {
      detailEl.hidden = false;
    }
    if (toolsEl) {
      toolsEl.textContent = favorite.tools || "TBD";
    }
    if (skillsEl) {
      skillsEl.textContent = favorite.skills || "TBD";
    }
    linkEl.setAttribute("href", favorite.link);
  };

  renderFavorite(favorites[favoriteIndex]);

  setInterval(() => {
    favoriteIndex = (favoriteIndex + 1) % favorites.length;
    renderFavorite(favorites[favoriteIndex]);
  }, 5000);
}

const expandCards = document.querySelectorAll(".expand-card");

expandCards.forEach((card, index) => {
  const toggle = card.querySelector(".expand-card__toggle");
  const panel = card.querySelector(".expand-card__panel");
  const grid = card.closest(".expand-grid");

  if (!toggle || !panel) return;

  if (grid && !card.dataset.originalIndex) {
    card.dataset.originalIndex = index.toString();
  }

  const restoreOrder = () => {
    if (!grid) return;
    const originalIndex = Number.parseInt(card.dataset.originalIndex || "0", 10);
    const cards = Array.from(grid.querySelectorAll(".expand-card")).filter(
      (item) => item !== card
    );
    if (originalIndex >= cards.length) {
      grid.append(card);
    } else {
      grid.insertBefore(card, cards[originalIndex]);
    }
  };

  const closePanel = () => {
    card.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    restoreOrder();
    if (grid) {
      const anyOpen = grid.querySelector(".expand-card.is-open");
      if (!anyOpen) {
        grid.classList.remove("is-focused");
      }
    }
  };

  toggle.addEventListener("click", () => {
    const isOpen = card.classList.contains("is-open");

    expandCards.forEach((otherCard) => {
      if (otherCard !== card) {
        const otherToggle = otherCard.querySelector(".expand-card__toggle");
        const otherPanel = otherCard.querySelector(".expand-card__panel");
        if (otherToggle && otherPanel) {
          otherCard.classList.remove("is-open");
          otherToggle.setAttribute("aria-expanded", "false");
        }
      }
    });

    if (isOpen) {
      closePanel();
      return;
    }

    if (grid) {
      grid.classList.add("is-focused");
      grid.prepend(card);
    }
    card.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  });

});
