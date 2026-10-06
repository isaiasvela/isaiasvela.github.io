/* Live filter for the writeups index (#sv-writeups): text search over card
 * title + description + data-concepts, combined with difficulty buttons.
 * Idempotent and re-run on Material instant-navigation page swaps.
 */
(function () {
  function setup(root) {
    var box = root.querySelector
      ? root.querySelector("#sv-writeups")
      : document.getElementById("sv-writeups");
    if (!box || box.dataset.ready) return;
    box.dataset.ready = "1";

    var q = box.querySelector("#sv-filter-q");
    var btns = Array.prototype.slice.call(box.querySelectorAll("[data-filter]"));
    var cards = Array.prototype.slice.call(box.querySelectorAll(".sv-card"));
    var empty = box.querySelector(".sv-filter-empty");
    var level = "all";

    function apply() {
      var needle = q.value.trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var okLevel = level === "all" || card.dataset.difficulty === level;
        var bits = [];
        card.querySelectorAll("h3, p").forEach(function (el) {
          if (!el.querySelector("a")) bits.push(el.textContent);
        });
        bits.push(card.dataset.difficulty || "");
        bits.push(card.dataset.concepts || "");
        var hay = bits.join(" ").toLowerCase();
        var okText = !needle || hay.indexOf(needle) !== -1;
        var show = okLevel && okText;
        card.style.display = show ? "" : "none";
        if (show) shown++;
      });
      empty.hidden = shown !== 0;
    }

    q.addEventListener("input", apply);
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        level = b.dataset.filter;
        btns.forEach(function (x) {
          x.classList.toggle("is-active", x === b);
        });
        apply();
      });
    });
  }

  function run() {
    setup(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  new MutationObserver(run).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
