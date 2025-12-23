const timeEl = document.getElementById("menu-time");
const dockItems = document.querySelectorAll(".dock-item");
const windows = document.querySelectorAll(".window");

const updateTime = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  if (timeEl) {
    timeEl.textContent = timeString;
  }
};

const highlightWindow = (windowEl) => {
  windowEl.classList.add("is-highlighted");
  window.setTimeout(() => windowEl.classList.remove("is-highlighted"), 900);
};

dockItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }
    target.classList.remove("is-hidden");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    highlightWindow(target);
  });
});

document.querySelectorAll(".window-controls").forEach((controls) => {
  controls.addEventListener("click", (event) => {
    const button = event.target.closest(".control");
    if (!button) {
      return;
    }
    const windowEl = controls.closest(".window");
    if (!windowEl) {
      return;
    }
    const action = button.getAttribute("data-action");
    if (action === "close") {
      windowEl.classList.add("is-hidden");
      return;
    }
    if (action === "collapse") {
      windowEl.classList.toggle("is-collapsed");
      return;
    }
    if (action === "minimize") {
      windowEl.classList.toggle("is-hidden");
    }
  });
});

updateTime();
window.setInterval(updateTime, 30_000);
