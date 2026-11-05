// Myth vs Fact toggle
function toggleAnswer(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.style.display = el.style.display === "block" ? "none" : "block";
}

// Contact form validation
var form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var msg = document.getElementById("formMsg");
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name === "" || message === "") {
      msg.style.color = "crimson";
      msg.textContent = "Please fill in your name and message.";
    } else if (!emailOk) {
      msg.style.color = "crimson";
      msg.textContent = "Please enter a valid email address.";
    } else {
      msg.style.color = "#2a9d8f";
      msg.textContent = "Thank you, " + name + "! Your feedback has been received.";
      form.reset();
    }
  });
}
