(function () {
  // Update active nav link based on scroll position
  var sections = document.querySelectorAll("main > section[id]");
  var navLinks = document.querySelectorAll(".site-nav a");
  var currentProjectIndex = 0;
  
  function updateActiveLink() {
    var current = "";
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(function (link) {
      link.removeAttribute("aria-current");
      if (link.getAttribute("href") === "#" + current) {
        link.setAttribute("aria-current", "page");
      }
    });
  }
  
  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Initial call

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });
  }

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  // Store projects globally for modal navigation
  var allProjects = [];

  function renderProjectTiles(container) {
    if (!container || !window.PORTFOLIO_DATA) return;
    var projects = window.PORTFOLIO_DATA.projects || [];
    allProjects = projects; // Store for navigation
    
    var html = projects
      .map(function (p) {
        var firstImage = (p.images || [])[0];
        var imageSrc = firstImage ? escapeHtml(firstImage.src) : "";
        var imageAlt = firstImage ? escapeHtml(firstImage.alt) : "";
        
        return (
          '<div class="project-tile" data-project-slug="' + escapeHtml(p.slug) + '">' +
          (imageSrc ? '<div class="project-tile-image"><img src="' + imageSrc + '" alt="' + imageAlt + '" /></div>' : '<div class="project-tile-image" style="background: var(--surface);"></div>') +
          '<div class="project-tile-content">' +
          '<h3>' + escapeHtml(p.title) + '</h3>' +
          '<p class="project-tile-meta">' + escapeHtml(p.date) + '</p>' +
          '<p class="project-tile-tagline">' + escapeHtml(p.tagline) + '</p>' +
          '</div></div>'
        );
      })
      .join("");
    
    container.innerHTML = html;
    
    // Add click handlers to tiles
    container.querySelectorAll(".project-tile").forEach(function (tile, index) {
      tile.addEventListener("click", function () {
        currentProjectIndex = index;
        openProjectModal(projects[index]);
      });
    });
  }

  function renderProjectModal(project) {
    if (!project) return;
    
    var modalContent = document.getElementById("modal-project-content");
    var tags = (project.tech || [])
      .map(function (t) {
        return '<span class="tag">' + escapeHtml(t) + "</span>";
      })
      .join("");
    
    if (project.featured) {
      tags = '<span class="tag highlight">Discovery project</span>' + tags;
    }
    
    var links = (project.links || [])
      .map(function (l) {
        return (
          '<a class="btn btn-secondary" href="' +
          escapeHtml(l.href) +
          '" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(l.label) +
          "</a>"
        );
      })
      .join(" ");

    // Build content with images interspersed with paragraphs
    var content = '<h2>' + escapeHtml(project.title) + '</h2>';
    content += '<p class="project-meta">' + escapeHtml(project.date) + '</p>';
    content += '<p class="lead">' + escapeHtml(project.tagline) + '</p>';
    
    if (tags) {
      content += '<div class="tag-row">' + tags + '</div>';
    }
    
    if (links) {
      content += '<div style="margin: 1.5rem 0;">' + links + '</div>';
    }

    // Intersperse images and paragraphs
    var paragraphs = project.overviewParagraphs || [];
    var images = project.images || [];
    var totalItems = Math.max(paragraphs.length, images.length);
    
    for (var i = 0; i < totalItems; i++) {
      if (i < paragraphs.length) {
        content += '<p>' + escapeHtml(paragraphs[i]) + '</p>';
      }
      if (i < images.length) {
        var img = images[i];
        content += (
          '<figure>' +
          '<img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt) + '" />' +
          '<figcaption class="media-caption">' + escapeHtml(img.caption || "") + '</figcaption>' +
          '</figure>'
        );
      }
    }
    
    modalContent.innerHTML = content;
  }

  function openProjectModal(project) {
    var modal = document.getElementById("project-modal");
    renderProjectModal(project);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    var modal = document.getElementById("project-modal");
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  // Modal close handlers
  var modal = document.getElementById("project-modal");
  var closeBtn = document.querySelector(".modal-close");
  var overlay = document.querySelector(".modal-overlay");
  
  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }
  
  if (overlay) {
    overlay.addEventListener("click", closeProjectModal);
  }

  // Modal navigation
  var prevBtn = document.querySelector(".nav-prev");
  var nextBtn = document.querySelector(".nav-next");
  
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentProjectIndex = (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
      openProjectModal(allProjects[currentProjectIndex]);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentProjectIndex = (currentProjectIndex + 1) % allProjects.length;
      openProjectModal(allProjects[currentProjectIndex]);
    });
  }

  // Render projects
  var projectRoot = document.getElementById("project-list-root");
  if (projectRoot) renderProjectTiles(projectRoot);

  // Render experience
  function renderExperience(container) {
    if (!container || !window.PORTFOLIO_DATA) return;
    var items = window.PORTFOLIO_DATA.experience || [];
    container.innerHTML = items
      .map(function (e) {
        var bullets = (e.bullets || [])
          .map(function (b) {
            return "<li>" + escapeHtml(b) + "</li>";
          })
          .join("");
        return (
          '<article class="exp-card">' +
          "<h3>" +
          escapeHtml(e.title) +
          "</h3>" +
          '<p class="org">' +
          escapeHtml(e.org) +
          "</p>" +
          '<p class="when">' +
          escapeHtml(e.location) +
          " · " +
          escapeHtml(e.dates) +
          "</p>" +
          "<p>" +
          escapeHtml(e.summary) +
          "</p>" +
          "<ul>" +
          bullets +
          "</ul></article>"
        );
      })
      .join("");
  }

  var expRoot = document.getElementById("experience-list-root");
  if (expRoot) renderExperience(expRoot);
})();
