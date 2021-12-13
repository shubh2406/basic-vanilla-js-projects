// target buttons
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

// target sidebar
const sidebar = document.querySelector(".sidebar");

// functionality for sidebarToggle
sidebarToggle.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
})

// functionality for closeBtn
closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
})
