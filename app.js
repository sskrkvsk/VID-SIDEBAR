const toggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const showSideBar = document.querySelector(".show-sidebar");



toggle.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
})