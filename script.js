document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validate Name (should not be empty)
        const name = document.getElementById("name");
        if (name.value.trim() === "") {
            valid = false;
            alert("Name cannot be empty");
        }

        // Validate Password (should be at least 8 characters)
        const password = document.getElementById("password");
        if (password.value.length < 8) {
            valid = false;
            alert("Password must be at least 8 characters");
        }

        // Validate Email (should match email pattern)
        const email = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email.value)) {
            valid = false;
            alert("Invalid email format");
        }

        // Validate Phone Number (should be numeric with 10 digits)
        const phone = document.getElementById("phone");
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone.value)) {
            valid = false;
            alert("Invalid phone number (should be 10 digits)");
        }

        // Validate State (should not be empty)
        const state = document.getElementById("state");
        if (state.value.trim() === "") {
            valid = false;
            alert("State cannot be empty");
        }

        // Validate City (should not be empty)
        const city = document.getElementById("city");
        if (city.value.trim() === "") {
            valid = false;
            alert("City cannot be empty");
        }

        // Validate Country (should not be empty)
        const country = document.getElementById("country");
        if (country.value.trim() === "") {
            valid = false;
            alert("Country cannot be empty");
        }

        // Validate Pincode (should be numeric)
        const pincode = document.getElementById("pincode");
        const pincodePattern = /^\d+$/;
        if (!pincodePattern.test(pincode.value)) {
            valid = false;
            alert("Pincode should contain only numbers");
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
