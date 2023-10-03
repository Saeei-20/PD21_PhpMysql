// document.addEventListener("DOMContentLoaded", function() {
//     const userForm = document.getElementById("userForm");

//     userForm.addEventListener("submit", function(event) {
//         event.preventDefault();
       
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const mobile = document.getElementById("mobile").value;
//         const dob = document.getElementById("dob").value;
       
//         console.log("Name: " + name);
//         console.log("Email: " + email);
//         console.log("Mobile Number: " + mobile);
//         console.log("Date of Birth: " + dob);
       
        
//     });
// });

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('mobile').value.trim();
    const password = document.getElementById('pass1').value;
    const confirmPassword = document.getElementById('pass2').value;
  
    // Validation checks
    if (username === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
      alert('All fields must be filled.');
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }
    if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}/.test(password)) {
      alert('Password must be at least 7 characters and contain at least one uppercase letter, one digit, and one special character from &,$,#,@.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email)) {
      alert('Invalid email address.');
      return;
    }
  
    // If all validations pass
    alert('Form submitted successfully!');
  });
  


  