let navbar=document.querySelector(".navbar");
let login=document.querySelector(".login-form");
let searchForm=document.querySelector(".search-form");
let themeBtn=document.querySelector("#theme-btn");
// let buttonUp=document.querySelector("#top");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active")
    searchForm.classList.remove("active")
    login.classList.remove("active")
};

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle("active")
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
};

document.querySelector("#serach-btn").onclick = () =>{
    searchForm.classList.toggle("active")
    navbar.classList.remove("active")
    login.classList.remove("active")
};

window.onscroll=()=>{
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
    login.classList.remove("active")
    // buttonUp.classList.toggle("active")
};

themeBtn.onclick=() => {
    themeBtn.classList.toggle("fa-sun");

    if(themeBtn.classList.contains("fa-sun")){
        document.body.classList.add("active");
    }else {
         document.body.classList.remove("active");
    };
};

var swiper = new Swiper(".review-slider", {
        pagination: {
          el: ".swiper-pagination",
        },
    });