const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const scrollToTopButton = document.getElementById("scroll-to-top");

menuToggle.addEventListener("click", () => {
    sidebar.style.left = "0";
    overlay.style.display = "block";
});

menuClose.addEventListener("click", () => {
    sidebar.style.left = "-200px";
    overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
    sidebar.style.left = "-200px";
    overlay.style.display = "none";
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("search-btn").addEventListener("click", function() {
    const query = document.getElementById("search-input").value;
    if (query) {
        fetchData(query);
    }
});

async function fetchData(query) {
    document.getElementById("results").innerHTML = "Searching...";
    
    // Placeholder: Replace with actual backend API call
    setTimeout(() => {
        document.getElementById("results").innerHTML = `<p>Results for: <strong>${query}</strong></p>`;
    }, 1000);
}
