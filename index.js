let currentStep = 1;

function showStep(step) {
  document.getElementById(`step${currentStep}`).style.display = "none";
  currentStep = step;
  document.getElementById(`step${currentStep}`).style.display = "block";
}

function nextPrev(n) {
  if (n === 1 && currentStep < 5) {
    showStep(currentStep + 1);
  } else if (n === -1 && currentStep > 1) {
    showStep(currentStep - 1);
  }
}
