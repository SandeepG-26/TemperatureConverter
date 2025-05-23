const tempInput = document.getElementById('tempInput');
const resultDiv = document.getElementById('result');
const conversionRadios = document.getElementsByName('conversion');

function convertTemperature() {
  const tempValue = parseFloat(tempInput.value);
  const conversionType = [...conversionRadios].find(r => r.checked).value;

  if (isNaN(tempValue)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let result;
  if (conversionType === 'CtoF') {
    result = (tempValue * 9/5) + 32;
    resultDiv.textContent = `${tempValue}°C = ${result.toFixed(2)}°F`;
  } else {
    result = (tempValue - 32) * 5/9;
    resultDiv.textContent = `${tempValue}°F = ${result.toFixed(2)}°C`;
  }
}

tempInput.addEventListener('input', convertTemperature);
conversionRadios.forEach(radio => {
  radio.addEventListener('change', convertTemperature);
});
