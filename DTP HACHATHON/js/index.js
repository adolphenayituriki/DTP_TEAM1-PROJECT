function openModal() {
      document.getElementById("learnMoreModal").style.display = "block";
}
function closeModal() {
      document.getElementById("learnMoreModal").style.display = "none";
}
function openModal2() {
      document.getElementById("learnMoreModal2").style.display = "block";
}
function closeModal2() {
      document.getElementById("learnMoreModal2").style.display = "none";
}
function openModal3() {
      document.getElementById("learnMoreModal3").style.display = "block";
}
function closeModal3() {
      document.getElementById("learnMoreModal3").style.display = "none";
}

function toggleDropdown() {
      document.getElementById("dropdownMenu").classList.toggle("show");
}


      window.onclick = function(event) {
      if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove("show");
      }
      }
}

const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("ratingValue");
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener("click", () => {
            currentRating = star.getAttribute("data-value");
            ratingValue.textContent = `Your rating: ${currentRating}`;
            updateStars();
            if (currentRating >= 4) {
                launchCelebration();
            }
        });

        star.addEventListener("mouseover", () => {
            highlightStars(star.getAttribute("data-value"));
        });

        star.addEventListener("mouseout", () => {
            updateStars();
        });
    });

    function updateStars() {
        stars.forEach(star => {
            star.classList.toggle("active", star.getAttribute("data-value") <= currentRating);
        });
    }

    function highlightStars(rating) {
        stars.forEach(star => {
            star.classList.toggle("active", star.getAttribute("data-value") <= rating);
        });
    }

    function launchCelebration() {
        const icons = ["🎉", "✨", "🎊", "💫", "🌟",];
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.textContent = icons[Math.floor(Math.random() * icons.length)];
            confetti.style.left = Math.random() * window.innerWidth + "px";
            confetti.style.animationDuration = (2 + Math.random() * 2) + "s";
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }
    }



// Example data (you can replace with PHP echo from MySQL)
const data = {
      labels: ["Current malnourished children supported", "Pending aid to malnourished children", "Rejected aid for malnourished children"],
      datasets: [{
            data: [120, 45, 30], // Example numbers
            backgroundColor: ["green", "blue", "yellow"]
      }]
};

const config = {
      type: 'pie',
      data: data,
      options: {
            responsive: true
      }
};

new Chart(
      document.getElementById('myPieChart'),
      config
);
// Split letters into spans and attach staggered delays
(function(){
      const container = document.getElementById('kinyoteri');
      const text = container.textContent.trim();
    container.innerHTML = ''; // clear
    // create spans for each letter
      for(let i=0;i<text.length;i++){
            const ch = text[i] === ' ' ? '\u00A0' : text[i];
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = ch;
      // stagger timing so shine moves left -> right; store as CSS var
            const delay = (i * 0.12).toFixed(2) + 's';
            span.style.setProperty('--d', delay);
            container.appendChild(span);
}
    // Sync visual "active" bulbs to the sweep — create a loop that highlights each letter in sequence
const letters = Array.from(container.querySelectorAll('.letter'));
let index = 0;
function loopHighlight(){
      letters.forEach((el, i)=>el.classList.toggle('active', i===index));
      index = (index + 1) % letters.length;
      // faster near middle, slower elsewhere for a lively effect
      const nextDelay = 140; // ms
      setTimeout(loopHighlight, nextDelay);
}
    // start after a short pause
setTimeout(loopHighlight, 350);
})();
document.querySelectorAll('.counter').forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText.replace('%', '');
      const increment = target / 200;
      if (c < target) {
            counter.innerText = Math.ceil(c + increment) + (counter.innerText.includes('%') ? '%' : '');
            setTimeout(updateCounter, 10);
      }
};
      updateCounter();
});
function openDistrict() {
      document.getElementById("showDisrict").style.display = "block";
}
const roleSelect = document.getElementById("role");
      if (roleSelect) {
roleSelect.addEventListener("change", function () {
      if (this.value === "district") {
            document.getElementById("showDisrict").style.display = "block";
      } else {
            document.getElementById("showDisrict").style.display = "none";
      }
});
}