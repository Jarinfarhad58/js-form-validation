// Select all input fields and submit buttons
const unitNameInputs = document.querySelectorAll(
  "#unitNameUpdate, #unitName, #locationName, #companyName, #locationUnitUpdate, #companyUnitUpdate"
);
const submitButtons = document.querySelectorAll("#saveChangesButton, #saveButton, #addUnitRow");

// Attach input event listener to all relevant fields
unitNameInputs.forEach(input => {
  input.addEventListener("input", function () {
    const form = this.closest("form");
    const value = input.value.trim();
    const minLength = 5;
    const maxLength = 20;
    const errorDiv = input.nextElementSibling;

    // Input validation logic
    if (input.tagName === "INPUT" && (value.length < minLength || value.length > maxLength)) {
      errorDiv.textContent = `Minimum ${minLength} & Maximum ${maxLength} characters allowed.`;
      input.classList.add("is-invalid");
      errorDiv.style.display = "block";
    } else if (input.tagName === "SELECT" && value === "-1") {
      errorDiv.textContent = "Please select at least one item.";
      input.classList.add("is-invalid");
      errorDiv.style.display = "block";
    } else {
      errorDiv.textContent = "";
      input.classList.remove("is-invalid");
      errorDiv.style.display = "none";
    }

    // Check if all form inputs are valid
    let allValid = true;
    form.querySelectorAll("input, select").forEach(field => {
      const fieldValue = field.value.trim();
      if (
        field.classList.contains("is-invalid") ||
        fieldValue === "" ||
        fieldValue === "-1"
      ) {
        allValid = false;
      }
    });

    // Enable/Disable all submit buttons inside the same form
    form.querySelectorAll("button[type='submit'], button[type='button']").forEach(button => {
      button.disabled = !allValid;
    });
  });
});
