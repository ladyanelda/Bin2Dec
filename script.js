function convertBinary() {
    const binaryInput = document.getElementById("binaryInput").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    const decimalOutput = document.getElementById("decimalOutput");

    // Reset previous messages
    errorMessage.textContent = "";
    decimalOutput.textContent = ""; // Clears previous output

    // Check if input is empty or too long
    if (binaryInput.length < 1 || binaryInput.length > 8) {
        errorMessage.textContent = "Invalid input! Enter 1 to 8 binary digits.";
        return;
    }

    // Validate input (check if only contains 0s and 1s)
    for (let i = 0; i < binaryInput.length; i++) {
        if (binaryInput[i] !== '0' && binaryInput[i] !== '1') {
            errorMessage.textContent = "Invalid input! Please enter only 0s and 1s.";
            return;
        }
    }

    // Convert binary to decimal using parseInt()
    const decimal = parseInt(binaryInput, 2);

    // ✅ Display the result inside the span
    decimalOutput.textContent = decimal;
}
