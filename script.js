const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList[entry.isIntersecting ? "add" : "remove"]("show");
    });
});

document.querySelectorAll(".hidden").forEach((item) => {
    observer.observe(item);
});
