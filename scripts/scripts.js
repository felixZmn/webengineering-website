document.getElementById("nav-trigger").addEventListener("click", () => {
    document.getElementById("extended-nav").classList.remove("d-none");
});

document.getElementById("nav-close").addEventListener("click", () => {
    document.getElementById("extended-nav").classList.add("d-none");
});