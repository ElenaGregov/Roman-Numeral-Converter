// Get the elements by their IDs
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Roman numeral conversion function
function toRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  return result;
}

// Add an event listener to the button
convertBtn.addEventListener("click", function() {
  const numberValue = numberInput.value.trim(); // Get the value from the input field and trim extra spaces
  const num = parseInt(numberValue, 10); // Convert input value to an integer

  if (numberValue === "") {
    // If no value entered, display a warning message
    output.textContent = "Please enter a valid number";
  } else if (num < 1) {
    // If the number is negative or zero
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    // If the number is greater than 3999
    output.textContent = "Please enter a number less than or equal to 3999";
  } else if (isNaN(num)) {
    // If the input is not a valid number
    output.textContent = "Please enter a valid number";
  } else {
    // Convert the valid number to Roman numerals and display it
    output.textContent = toRoman(num);
  }
});
