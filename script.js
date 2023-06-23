// ==============================================HAMBURGER====================================================================

    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        navList.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    }))

    // ==============================================STICKY HEADER====================================================================

    const header = document.querySelector("header");
    window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
    });





    