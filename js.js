const emailInput = document.getElementById("email");
const submitButton1 = document.getElementById("submitBtn");
submitButton1.addEventListener("click", function () {
  const userEmail = emailInput.value; 
  if (isValidEmail(userEmail)) {
    alert("No problem" + userEmail);
  } else {
    alert("You have a problem");
  }
});
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}