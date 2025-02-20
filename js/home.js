const nav_icon = document.getElementById('nav_icon');
const mobile_nav = document.getElementById('mobile_nav');
const close_icon = document.getElementById('nav_close');
const categories = document.getElementById('categories');
const contact_btn = document.getElementById('contact_btn');

contact_btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('#contact_container').scrollIntoView({
        behavior:"smooth"
    });
})



nav_icon.addEventListener("click", () => {
    if (mobile_nav.style.display === "none" || mobile_nav.style.display === "") {
        mobile_nav.style.display = "flex";
        categories.style.display = "none";
    } else{
        mobile_nav.style.display = "none";
        categories.style.display = "flex";
    }
})

nav_close.addEventListener("click", () => {
    mobile_nav.style.display = "none";
    categories.style.display = "flex";
})


document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('#categories h3 a');
    const sections = document.querySelectorAll('div[id]');

    categories.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function highlightActiveCategory() {
        let currentSection = "";
        const headerHeight = document.getElementById("categories").offsetHeight;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        categories.forEach(category => {
            const href = category.getAttribute('href').substring(1);
            if (currentSection === href) {
                category.classList.add('active');

            } else {
                category.classList.remove('active');
            }

        });

    }
    highlightActiveCategory();

    window.addEventListener("scroll", highlightActiveCategory);
});




