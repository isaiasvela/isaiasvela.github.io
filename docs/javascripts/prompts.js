/* Adds a visual-only prompt at the start of every non-empty line in tagged
 * shell blocks (```bash, ```console, ...). Output blocks (div.no-copy) are
 * left alone. Prompt spans use user-select:none so they are never part of a
 * manual copy. Works with pymdownx.highlight markup:
 *   <div class="language-xxx highlight"><pre><span></span><code>...</code></pre></div>
 * Preserves syntax-highlighting spans (innerHTML-based, not textContent).
 * Idempotent and re-run on Material instant-navigation page swaps.
 */
(function () {
  var PROMPTS = {
    "language-bash": "$ ",
    "language-console": "$ ",
    "language-shell": "$ ",
    "language-sh": "$ ",
    "language-zsh": "$ ",
    "language-fish": "$ ",
    "language-powershell": "PS> ",
    "language-ps1": "PS> ",
    "language-bat": "C:\\> "
  };

  function promptFor(container) {
    for (var cls in PROMPTS) {
      if (container.classList.contains(cls)) return PROMPTS[cls];
    }
    return null;
  }

  function stripTags(html) {
    return html.replace(/<[^>]*>/g, "");
  }

  function decorate(root) {
    var blocks = root.querySelectorAll(".highlight:not(.no-copy) > pre > code");
    for (var b = 0; b < blocks.length; b++) {
      var code = blocks[b];
      if (code.dataset.prompted) continue;
      var container = code.parentElement && code.parentElement.parentElement;
      if (!container || !container.classList || !container.classList.contains("highlight")) continue;
      var prompt = promptFor(container);
      if (!prompt) continue;
      code.dataset.prompted = "1";
      var lines = code.innerHTML.split("\n");
      if (lines.length > 0 && lines[lines.length - 1] === "") lines.pop();
      code.innerHTML = lines.map(function (line) {
        if (stripTags(line).trim() === "") return line;
        return '<span class="sv-prompt">' + prompt + "</span>" + line;
      }).join("\n");
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
