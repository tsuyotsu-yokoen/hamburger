hamburger.innerHTML = "<span></span><span></span><span></span>";
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarList.classList.toggle("active");
});

navbarList.querySelectorAll(".navbar-link").forEach((navbarLink) => {
    navbarLink.addEventListener("click", () => {
        navbarList.classList.remove("active");
    })
})
