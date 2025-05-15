# ✅ Scalable Form Validation with Vanilla JavaScript

This simple yet powerful JavaScript snippet provides **real-time validation** for multiple form inputs and select dropdowns using **a single function**. It improves UX and keeps your frontend code **clean, maintainable, and scalable**.

## ✨ Features

- Validates `<input>` and `<select>` fields on the fly
- Provides inline error messages
- Disables submit buttons until all fields are valid
- Easy to extend: just add your new field/button IDs in the selector
- Centralized logic makes debugging and maintenance simple

## 🧠 How It Works

- Listens to `input` events
- Checks length for input fields and selection validity for dropdowns
- Automatically finds the closest form to scope validation
- Enables/disables all related submit buttons

## 🔧 Usage

```js
// Add your new input/select IDs to this query selector
const unitNameInputs = document.querySelectorAll("#unitNameUpdate, #unitName, #locationName, ...");

// Add your button IDs similarly
const submitButtons = document.querySelectorAll("#saveChangesButton, ...");

✅ No external libraries required. Works great with vanilla HTML/CSS/JS.
