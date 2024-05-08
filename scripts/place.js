// Get current year and populate in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date and populate in footer
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// Wind Chill
const temperature = 85; 
const windSpeedMPH = 16; 

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for viable wind chill calculations
    if (temperature <= 50 && windSpeed > 3) {
        // Formula for windchill calculation in Fahrenheit
        return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

// Function to display windchill factor in the "Weather" section
function displayWindChill() {
    const windChillElement = document.getElementById("wind-chill");

    // Calculate windchill factor
    const windChill = calculateWindChill(temperature, windSpeedMPH);

    // Display windchill factor in the "Weather" section
    windChillElement.textContent = windChill !== "N/A" ? `${windChill.toFixed(2)}°F` : "N/A";
}

// Call displayWindChill function when the page loads
window.onload = displayWindChill;
