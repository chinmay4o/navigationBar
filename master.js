
var close = document.querySelector(".close-me");

close.addEventListener("click", () => {
   
    let menu_bur = document.querySelector(".nav-bur-menu");

     if (menu_bur.style.transform = "translateX(0px)"){
        menu_bur.style.transform = "translateX(1200px)";
        // menu_bur.classList.remove("nav-bur-menu");
    }
})


var show = document.querySelector(".nav-btn");

show.addEventListener("click", () => {
    console.log("cliked eeee")
    let menu_bur1 = document.querySelector("#dis");
    
    if( menu_bur1.style.transform = "translateX(1200px)") {
        // menu_bur1.className = "nav-bur-menu";
        menu_bur1.style.transform = "translateX(0px)";
    }
})

