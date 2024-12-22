async function getPrayerTimes() {
    const location = document.getElementById('location').value.trim();
    const results = document.getElementById('results');
    results.innerHTML = "Loading...";

    // Validate user input
    if (!location) {
        results.innerHTML = "Please enter a valid location.";
        return;
    }

    try {
        // Encode the location to make it URL-safe
        const encodedLocation = encodeURIComponent(location);

        // Fetch prayer times from the Aladhan API
        const response = await fetch(`https://www.islamicfinder.us/index.php/api/prayer_times);
        
        // Check if the response is okay
        if (!response.ok) {
            results.innerHTML = "Failed to fetch prayer times. Please try again later.";
            console.error(`HTTP Error: ${response.status}`);
            return;
        }

        // Parse the JSON response
        const data = await response.json();

        // Check the API response code
        if (data.code === 200) {
            const timings = data.data.timings;

            // Render the prayer times
            results.innerHTML = `<h3>Prayer Times:</h3>
                <ul>
                    <li>Fajr: ${timings.Fajr}</li>
                    <li>Dhuhr: ${timings.Dhuhr}</li>
                    <li>Asr: ${timings.Asr}</li>
                    <li>Maghrib: ${timings.Maghrib}</li>
                    <li>Isha: ${timings.Isha}</li>
                </ul>`;
        } else {
            // Handle API-specific errors
            results.innerHTML = "Could not fetch prayer times. Please check the location.";
            console.error(`API Error: ${data.code} - ${data.status}`);
        }
    } catch (error) {
        // Handle unexpected errors
        results.innerHTML = "An error occurred while fetching prayer times. Please try again.";
        console.error("Error fetching prayer times:", error);
    }
}
