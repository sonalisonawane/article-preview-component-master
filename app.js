let shareEl = document.querySelector(".fa-share");
let shareActiveEl = document.querySelector(".share-active");
let containerEl = document.querySelector(".container");
console.log(containerEl)
shareEl.addEventListener("click", function() {
    shareActiveEl.classList.add("open");
})

containerEl.addEventListener("click", function(e) {
    if (e.target === containerEl) {
        shareActiveEl.classList.remove("open");
    }
})