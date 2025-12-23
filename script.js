(function () {
  // Set last updated date (client-side)
  const el = document.getElementById("last-updated");
  if (el) {
    const d = new Date();
    el.textContent = d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
  }

  // Small UX: when clicking nav links, briefly highlight the target section
  function highlightTargetFromHash() {
    const id = location.hash && location.hash.length > 1 ? location.hash.slice(1) : null;
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    target.classList.add("highlight");
    window.setTimeout(() => target.classList.remove("highlight"), 900);
  }

  window.addEventListener("hashchange", highlightTargetFromHash);
  highlightTargetFromHash();
})();
