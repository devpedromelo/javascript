//=================== set date ======================
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//===================== close links ==================
const btnNavToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

btnNavToggle.addEventListener("click", function(){
    // linksContainer.classList.toggle("show-links");
    const heightContainer = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight)
    if(heightContainer === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

//==================== fixed bar =====================
const navbar = document.querySelector('#nav');
const btnTopLink = document.querySelector(".top-link");
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;//retorna o número de pixels que o documento foi rolado
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        btnTopLink.classList.add("show-link")
    }else{
        btnTopLink.classList.remove("show-link")
    }
});

//============== smooth scroll ===============
//select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        //prevent default
        e.preventDefault();//Cancela o evento se for cancelável, sem parar a propagação do mesmo.

        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1)//slice extrai uma section de uma cadeia de caracteres sem modificar a cadeia de caracteres original
        const element = document.getElementById(id);

        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const container = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;//offsetTop é o número que representa a posição top do elemento, em pixels

        if(!fixedNav){
            position = position - navHeight;
        }

        if(navHeight > 82){
            position = position + container;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});