// Shows the section in the visitor's language (de, en, fr, it); German when none fits.
(function () {
  var langs = ["de", "en", "fr", "it"];
  function show(l) {
    document.querySelectorAll("section[lang]").forEach(function (s) { s.classList.toggle("on", s.lang === l); });
    document.querySelectorAll("nav.lang a").forEach(function (a) { a.classList.toggle("on", a.hash === "#" + l); });
    document.documentElement.lang = l;
  }
  var wanted = (location.hash || "").slice(1);
  if (langs.indexOf(wanted) < 0) {
    wanted = (navigator.languages || [navigator.language || "de"]).map(function (x) { return x.slice(0, 2); })
      .filter(function (x) { return langs.indexOf(x) >= 0; })[0] || "de";
  }
  show(wanted);
  window.addEventListener("hashchange", function () { var l = location.hash.slice(1); if (langs.indexOf(l) >= 0) show(l); });
})();
