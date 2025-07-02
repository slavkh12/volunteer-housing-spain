const validCodes = ["CODE123", "VOLUNTEER2025", "SPAINHOST01"];

function checkCode() {
  const input = document.getElementById("codeInput").value.trim();
  const message = document.getElementById("message");

  if (validCodes.includes(input)) {
    window.location.href = "dashboard.html";
  } else {
    message.textContent = "Invalid code. Please try again.";
  }
}