window.addEventListener("load", () => {
  const overlay = document.getElementById("welcome-overlay");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 1000); // stays for 2 seconds, then fades
});

document.getElementById("year").textContent = new Date().getFullYear();

// const form = document.getElementById("contactForm");
// const result = document.getElementById("formResult");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const msg = document.getElementById("message").value.trim();
//   if (!name || !email || !msg) {
//     result.textContent = "Please complete the form.";
//     return;
//   }
//   // For now, just show a success message. Replace with real endpoint if you have one.
//   result.style.color = "#6ee7b7";
//   result.textContent = `Thanks ${name}! Your message has been recorded (local demo).`;
//   form.reset();
// });

document.getElementById("resetBtn").addEventListener("click", () => {
  form.reset();
  result.textContent = "";
});

ScrollReveal({
  distance: "50px", // how far elements move
  duration: 1000, // animation time in ms
  easing: "ease-out",
  reset: true, // true = animate every time you scroll back
});

// Target sections to animate
ScrollReveal().reveal(".hero", { origin: "top", delay: 200 });
ScrollReveal().reveal("#about", { origin: "left", delay: 200 });
ScrollReveal().reveal("#projects .project", {
  origin: "bottom",
  interval: 150,
});
ScrollReveal().reveal("#skills", { origin: "right", delay: 200 });
ScrollReveal().reveal("#contact", { origin: "bottom", delay: 200 });

const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_q0uee2i", "template_m3ej9r2", this)
    .then(function () {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(function (error) {
      alert("Something went wrong!");
      console.log(error);
    });
});
