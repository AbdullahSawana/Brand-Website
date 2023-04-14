// Start Variables
let navbar = document.querySelector(".navbar-default");
btnScrolling = document.querySelector(".row-scrolling i");
let skills = document.querySelector(".skills");
let progresses = document.querySelectorAll(".skill-progress .progress > div");
// End Variables

// Function On btn row And Jop Its
window.addEventListener("scroll", function() {
    if(window.scrollY >= 600) {
        btnScrolling.style.display = "block"
    } else {
        btnScrolling.style.display = "none"
    }
})
btnScrolling.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    })
})

// Add Scrolled Class In Navbar
window.addEventListener("scroll", function() {
    if(window.scrollY >= navbar.clientHeight) {
        if(navbar.classList.contains("scrolled")) {

        } else {
            navbar.classList.add("scrolled")
        }
    } else {
        navbar.classList.remove("scrolled");
    }
})

// When Window Scrolled What Happen To Skills
window.addEventListener("scroll", function() {
    if(window.scrollY >= skills.offsetTop - 200) {
        progresses.forEach(progress => {
            progress.style.width = progress.dataset.width;
        })
    }
})