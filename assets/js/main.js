/* ==========================================================================
   NBL-2027 | main.js
   Mobile menu, hero slider, countdown, scroll animations, back-to-top.
   No external dependencies.
   ========================================================================== */
(function () {
  "use strict";

  /* ---- Conference start (IST) – edit here if the dates change ---------- */
  var CONFERENCE_START = new Date("2027-09-07T09:00:00+05:30");

  /* ---- Mobile navigation ---------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    // On small screens, tapping a parent item expands its dropdown.
    menu.querySelectorAll(".has-dropdown > a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 960) {
          e.preventDefault();
          link.parentElement.classList.toggle("open");
        }
      });
    });
  }

  /* ---- Highlight the current page in the menu ------------------------- */
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-menu > li").forEach(function (li) {
    var links = li.querySelectorAll("a[href]");
    links.forEach(function (a) {
      var href = a.getAttribute("href").split("#")[0].toLowerCase();
      if (href === page) li.classList.add("active");
    });
  });

  /* ---- Hero slider ---------------------------------------------------- */
  var slides = document.querySelectorAll(".hero .slide");
  if (slides.length > 1) {
    var dotsWrap = document.querySelector(".hero-dots");
    var current = 0, timer;
    slides.forEach(function (_, i) {
      var b = document.createElement("button");
      b.setAttribute("aria-label", "Go to slide " + (i + 1));
      b.addEventListener("click", function () { go(i); restart(); });
      dotsWrap.appendChild(b);
    });
    var dots = dotsWrap.querySelectorAll("button");
    function go(n) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = (n + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
    }
    function restart() { clearInterval(timer); timer = setInterval(function () { go(current + 1); }, 6000); }
    document.querySelector(".hero-arrow.prev").addEventListener("click", function () { go(current - 1); restart(); });
    document.querySelector(".hero-arrow.next").addEventListener("click", function () { go(current + 1); restart(); });
    dots[0].classList.add("active");
    restart();
  }

  /* ---- Countdown ------------------------------------------------------ */
  var cd = document.querySelector("[data-countdown]");
  if (cd) {
    var tick = function () {
      var diff = Math.max(0, CONFERENCE_START - new Date());
      var d = Math.floor(diff / 864e5),
          h = Math.floor(diff / 36e5) % 24,
          m = Math.floor(diff / 6e4) % 60,
          s = Math.floor(diff / 1e3) % 60;
      cd.querySelector("[data-d]").textContent = d;
      cd.querySelector("[data-h]").textContent = String(h).padStart(2, "0");
      cd.querySelector("[data-m]").textContent = String(m).padStart(2, "0");
      cd.querySelector("[data-s]").textContent = String(s).padStart(2, "0");
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ---- Fade-in on scroll ---------------------------------------------- */
  var animated = document.querySelectorAll(".fade-up");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    animated.forEach(function (el) { io.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Back to top ---------------------------------------------------- */
  var toTop = document.querySelector(".to-top");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("show", window.scrollY > 500);
    });
    toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* ---- Footer year ---------------------------------------------------- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
