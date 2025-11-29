document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama!😍😘😍";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
    });

    document.addEventListener("keydown", (event) => {
        if(event.key === "d")
            document.body.classList.toggle("dark");
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent = `kamu klik konten ini sebanyak ${count} kali`;
    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "f" || event.key === "F") {
            nav.style.fontSize = 
            nav.style.fontSize === "22px" ? "16px" : "22px";
        }
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.body.style.backgroundColor = "#c8ffa8";} 
        else {
            document.body.style.backgroundColor = "#dfb4e0";}
    });

    const paragrafPertama = document.querySelector("main article p");
    paragrafPertama.textContent ="Paragraf ini telah diperbarui menggunakan Javascript otomatis! 🎉";


});