
  document.getElementById('survey-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    const challenges = document.getElementById('challenges').value;
    const platform = document.getElementById('platform').value;
    const budget = document.getElementById('budget').value;
    const interest = document.querySelector('input[name="interest"]:checked');
  
    // Validate form
    if (!challenges || !platform || !budget || !interest) {
      alert('Please fill out all required fields.');
      return;
    }
  
    // If validation passes, submit the form
    alert('Form submitted successfully!');
    this.submit(); // Submit the form to Formspree
  });