function getFormvalue() {
    //Write your code here
 const form = document.getElementById("form1");

    // Get the values of the first name and last name input fields
    const firstNameInput = form.elements.fname;
    const lastNameInput = form.elements.lname;

    // Get the values from the input fields
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    // Check if both fields are filled
    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Please fill in both first name and last name fields.");
    } else {
        // Display the first and last names using alert
        alert("First Name: " + firstName + "\nLast Name: " + lastName);
    }

    // Prevent the form from submitting and refreshing the page
    return false;

}
