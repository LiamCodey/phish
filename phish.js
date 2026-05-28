function goToRegister(){
  document.getElementById("homeScreen").classList.remove("active");
  document.getElementById("registerScreen").classList.add("active");
}

function goBack(){
  document.getElementById("registerScreen").classList.remove("active");
  document.getElementById("homeScreen").classList.add("active");
}