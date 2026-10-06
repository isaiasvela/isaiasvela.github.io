/* Adds a visual-only "$ " prompt at the start of every non-empty line in
 * tagged shell blocks (```bash, ```console, ...). Output blocks
 * (pre.no-copy) and untagged blocks are left alone. Prompt spans use
 * user-select:none so they are never part of a manual copy. Idempotent and
 * re-run on Material instant-navigation page swaps via MutationObserver.
 */
(function () {
  var SHELL = [
    "language-bash",
    "language-console",
    "language-shell",
    "language-sh",
    "language-zsh",
    "language-fish",
    "language-powershell",
    "language-ps1",
    "language-cmd",
    "language-bat",
  ];

  function isShell(code) {
    for (var i = 0; i < SHELL.length; i++) {
      if (code.classList.contains(SHELL[i])) return true;
    }
    return false;
  }

  function decorate(root) {
    var blocks = root.querySelectorAll("pre:not(.no-copy) > code");
    for (var b = 0; b < blocks.length; b++) {
      var code = blocks[b];
      if (code.dataset.prompted || !isShell(code)) continue;
      code.dataset.prompted = "1";
      var lines = code.textContent.split("\n");
      if (lines.length > 0 && lines[lines.length - 1] === "") lines.pop();
      code.textContent = "";
      for (var i = 0; i < lines.length; i++) {
        if (lines[i] !== "") {
          var s = document.createElement("span");
          s.className = "sv-prompt";
          s.textContent = "$ ";
          code.appendChild(s);
        }
        code.appendChild(document.createTextNode(lines[i]));
        if (i < lines.length - 1) code.appendChild(document.createTextNode("\n"));
      }
    }
  }

  function run() {
    decorate(document);
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
