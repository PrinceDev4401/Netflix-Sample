/************* To Signup And To Login Starts **************/
/*
document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('login-btn');
  const signupForm = document.getElementById('signup');
  const loginForm = document.getElementById('login');
  
  loginButton.addEventListener('click', function() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  }); 
});
*/
/************* To Signup And To Login Ends **************/

/************* From Edit To Signup Starts **************/
function index() {
  window.location.href = '/views/login.ejs';
}
/************* From Edit To Signup Ends **************/

/************* Country And Sate Selection API Starts **************/
// Fetch the list of countries
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countries => {
  const countrySelect = document.getElementById('countrySelect');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.name.common;
    option.textContent = country.name.common;
    countrySelect.appendChild(option);
  });
})
.catch(error => console.error('Error fetching country data:', error));

// Handle country selection and fetch states
document.getElementById('countrySelect').addEventListener('change', function () {
const country = this.value;
const stateSelect = document.getElementById('stateSelect');

// Clear previous states
stateSelect.innerHTML = '<option value="">Select State</option>';
stateSelect.disabled = true;

if (country) {
  fetch('https://countriesnow.space/api/v0.1/countries/states', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: country
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.data.states.length > 0) {
      stateSelect.disabled = false;
      data.data.states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.name;
        option.textContent = state.name;
        stateSelect.appendChild(option);
      });
    } else {
      stateSelect.disabled = true;
    }
  })
  .catch(error => console.error('Error fetching states:', error));
}
});
/************* Country And State Selection API Ends **************/