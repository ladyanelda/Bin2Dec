function convertBinary() {
    // Get the input value
    const binaryInput = document.getElementById("binaryInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const decimalOutput = document.getElementById("decimalOutput");

    // Reset error message and output
    errorMessage.textContent = "";
    decimalOutput.textContent = "";

    // Validate input
    let isValid = true;

    // Check length
    if (binaryInput.length < 1 || binaryInput.length > 8) {
        isValid = false;
    }

    // Check each character
    for (let i = 0; i < binaryInput.length; i++) {
        if (binaryInput[i] !== '0' && binaryInput[i] !== "1") {
            isValid = false;
            break;
        }
    }

    // Display error message if input is invalid
    if (!isValid) {
        errorMessage.textContent = "Invalid input! Please enter only 0s and 1s (max 8 digits).";
        return;
    }

    // Convert binary to decimal
    let decimal = 0;
    for (let i = 0; i < binaryInput.length; i++) {
        const digit = parseInt(binaryInput[binaryInput.length - 1 - i]); // Start from the right
        decimal += digit * Math.pow(2, i); // Calculate the value
    }

    // Display the result
    decimalOutput.textContent = decimal;
}