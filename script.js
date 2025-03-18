document.getElementById('survey-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Collect form data
    const formData = {
      challenges: document.getElementById('challenges').value,
      services: Array.from(document.querySelectorAll('input[name="services"]:checked')).map(el => el.value),
      budget: document.getElementById('budget').value,
      platform: document.getElementById('platform').value,
      interest: document.querySelector('input[name="interest"]:checked').value,
    };
  
    // Log data to console (you can send it to a server instead)
    console.log(formData);
  
    // Show a success message
    alert('Thank you for your response!');
  });