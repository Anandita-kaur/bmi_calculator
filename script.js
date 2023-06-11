function calculateBMI() {
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var resultDiv = document.getElementById('result');
    
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; 
    
    if (weight && height) {
      var bmi = weight / (height * height);
      resultDiv.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
    } else {
      resultDiv.innerHTML = 'Please enter valid weight and height values.';
    }
  }
  