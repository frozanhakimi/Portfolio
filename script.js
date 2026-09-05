// Say Hello Button

let helloButton = document.getElementById("helloButton");
helloButton.addEventListener("click", function () {
    alert("Hello! Welcome to my portfolio.");

});

// Dark Mode Button
let darkButton = document.getElementById("darkButton");
darkButton.addEventListener("click", function () {
    document.body.classList.toggle("light");

});

// Skill Animation//AI Assestant
let skillsSection = document.getElementById("skills");
let progressBars = document.querySelectorAll(".progress");
let percentages = document.querySelectorAll(".percentage");
let started = false;
window.addEventListener("scroll", function () {
    let sectionPosition = skillsSection.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (sectionPosition < screenPosition && started === false) {
        started = true;
        progressBars.forEach(function (bar, index) {
            let finalValue = getComputedStyle(bar)
                .getPropertyValue("--percent");
            bar.style.width = finalValue;
            let number = parseInt(finalValue);
            let current = 0;
            let counter = setInterval(function () {
                current++;
                percentages[index].textContent = current + "%";
                if (current >= number) {
                    clearInterval(counter);
                }
            }, 15);

        });

    }

});