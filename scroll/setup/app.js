// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear(); // (method) Date.getFullYear(): number
// Gets the year, using local time.

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", ()=>{
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
})


// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLinkBtn = document.querySelector(".top-link");

window.addEventListener("scroll", (e)=>{
    // console.log(window.scrollY);
    const scrollHeight = window.scrollY;
    const navbarHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navbarHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight >= 680){
        topLinkBtn.classList.add("show-link");
    }else{
        topLinkBtn.classList.remove("show-link");
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link=>{
    link.addEventListener("click", (e)=>{
        // prevent default
        e.preventDefault();
 
        // navigate to specific spot
        const id = link.getAttribute("href").slice(1);
        const section = document.getElementById(id);
        // console.log(section);

        //calculate the heights
        let navBarHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        
        if (navBarHeight > 82){
    
        }
      

        // console.log("Height"+navBarHeight);
        let pos = section.offsetTop - navBarHeight;
        // console.log(pos);

        if(!fixedNav){
            pos -= navBarHeight;
            console.log("FUCK")
        }
        // console.log(pos);

        window.scrollTo({
            left: 0,
            top: pos,
            behavior: "smooth"
        });

        linksContainer.style.height = 0;
    });
});