(function () {
  var path = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });
  }

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function renderProjects(container) {
    if (!container || !window.PORTFOLIO_DATA) return;
    var projects = window.PORTFOLIO_DATA.projects || [];
    var html = projects
      .map(function (p) {
        var tags = (p.tech || [])
          .map(function (t) {
            return '<span class="tag">' + escapeHtml(t) + "</span>";
          })
          .join("");
        if (p.featured) {
          tags =
            '<span class="tag highlight">Discovery project</span>' + tags;
        }
        var links = (p.links || [])
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

        var imgs = (p.images || [])
          .map(function (im) {
            return (
              "<figure>" +
              '<img src="' +
              escapeHtml(im.src) +
              '" alt="' +
              escapeHtml(im.alt) +
              '" width="640" height="427" loading="lazy">' +
              '<figcaption class="media-caption">' +
              escapeHtml(im.caption || "") +
              "</figcaption></figure>"
            );
          })
          .join("");

        var mediaClass =
          (p.images || []).length > 1 ? "project-media cols-2" : "project-media";

        var body = (p.overviewParagraphs || [])
          .map(function (para) {
            return "<p>" + escapeHtml(para) + "</p>";
          })
          .join("");

        return (
          '<article class="project-card' +
          (p.featured ? " featured" : "") +
          '" id="' +
          escapeHtml(p.slug) +
          '">' +
          '<div class="project-card-header">' +
          "<h2>" +
          escapeHtml(p.title) +
          "</h2>" +
          '<p class="project-meta">' +
          escapeHtml(p.date) +
          "</p>" +
          '<p class="lead" style="margin:0 0 1rem;font-size:1rem;">' +
          escapeHtml(p.tagline) +
          "</p>" +
          '<div class="tag-row">' +
          tags +
          "</div>" +
          links +
          "</div>" +
          '<div class="project-body">' +
          (imgs ? '<div class="' + mediaClass + '">' + imgs + "</div>" : "") +
          '<div class="prose">' +
          body +
          "</div></div></article>"
        );
      })
      .join("");
    container.innerHTML = html;
  }

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

  var projectRoot = document.getElementById("project-list-root");
  if (projectRoot) renderProjects(projectRoot);

  var expRoot = document.getElementById("experience-list-root");
  if (expRoot) renderExperience(expRoot);
})();
