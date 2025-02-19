// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")



function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)

gsap.to(".reveal-hero-text", {
    opacity: 0,
    y: "100%",
})

gsap.to(".reveal-hero-img", {
    opacity: 0,
    y: "100%",
})

gsap.to("#hero-img-bg", {
    scale: 0
})

gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})


window.addEventListener("load", () => {
    // animate from initial position
    gsap.to(".reveal-hero-text", {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        // ease: "power3.out",
        stagger: 0.5, // Delay between each word's reveal,
        // delay: 3
    })

    gsap.to(".reveal-hero-img", {
        opacity: 1,
        y: "0%",
    })

    gsap.to("#hero-img-bg", {
        scale: 1,
        duration: 0.8,
        delay: 0.4
    })
    
})


// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {

    const revealUptimeline = gsap.timeline({paused: true, 
                                            scrollTrigger: {
                                                            trigger: sec,
                                                            start: "10% 80%", // top of trigger hits the top of viewport
                                                            end: "20% 90%",
                                                            // markers: true,
                                                            // scrub: 1,
                                                        }})

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })


})



const translations = {
    en: {
        title: `If you prove your <span class="tw-text-primary tw-uppercase">oiikko</span> through the app we may launch a web version`,
        // subtitle: "Stronger when united",
        description: `Report nearby incidents to inform others. Get informed, respond quickly, and stay united.`,
        buttonText: "বাংলা",
    },
    bn: {
        title: `যদি আপনি App মাধ্যমে আপনার <span class="tw-text-primary tw-uppercase">oiikko</span> প্রমাণ করতে পারেন, তবে আমরা Web সংস্করণ করবো।`,
        // subtitle: "একত্রিত হলে শক্তিশালী",
        description: `অন্যদের জানাতে কাছাকাছি ঘটনা রিপোর্ট করুন। খবর পান, দ্রুত সাড়া দিন এবং একত্রিত থাকুন।`,
        buttonText: "English",
    }
};


let currentLang = "bn";

document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "bn" : "en";

    document.getElementById("hero-title").innerHTML = translations[currentLang].title;
    // document.getElementById("hero-subtitle").innerText = translations[currentLang].subtitle;
    document.getElementById("hero-description").innerHTML = translations[currentLang].description;
    document.getElementById("lang-toggle").innerText = translations[currentLang].buttonText;
});



const audio = document.getElementById("bg-audio");
const toggleBtn = document.getElementById("toggle-audio");

toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        toggleBtn.textContent = "🔊";
    } else {
        audio.pause();
        toggleBtn.textContent = "🔇";
    }
});