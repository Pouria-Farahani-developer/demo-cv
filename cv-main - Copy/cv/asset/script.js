

window.addEventListener("load",() =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // pageloader
    document.querySelector(".pageloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".pageloader").style.display = "none";
    }, 300);
})

// togglenavbar

const navtoggler = document.querySelector(".nav-toggler");
navtoggler.addEventListener("click", (e) => {
    hidesection();
    togglenavbar();
    document.body.classList.toggle("hide-scrolling")
})

function hidesection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function togglenavbar(){
    document.querySelector(".header").classList.toggle("active");
}


// active section
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){   
        // activat overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navtoggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            togglenavbar();
        }
        else{
            hidesection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out")
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navtoggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});

// about tabs

const tabscontainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabscontainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
            tabscontainer.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const target = e.target.getAttribute("data-target"); 
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
});


// portfolio item details popup

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortfoliopopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioitemdetails(e.target.parentElement); 
    }
})

function togglePortfoliopopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click",togglePortfoliopopup);

// hide popup when clicking outside of it

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfoliopopup()
    };
})


function portfolioitemdetails(portfolioitem){
    document.querySelector(".pp-thumnail img").src = portfolioitem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioitem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioitem.querySelector(".portfolio-item-details").innerHTML;    
}

