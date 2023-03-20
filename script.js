const form = document.querySelector("form");
const emailInput = form.querySelector(".email input");
const passwordInput = form.querySelector(".password input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  // Array of allowed IP addresses
  const allowedIps = ["103.17.88.108", "192.168.0.1"];
  
  // Get the client's IP address
  const clientIp = e.request.remoteAddress;
  
  if (allowedIps.includes(clientIp) && email === "han1306" && password === "adminhan") {
    window.location.href = "index1.html";
  } else {
    alert("Access denied. Please check your email and password, and make sure you're logging in from an allowed IP address.");
  }
});
