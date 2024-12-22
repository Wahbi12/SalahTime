
async function getPrayerTimes() {
    const location = document.getElementById('location').value;
    const results = document.getElementById('results');
    results.innerHTML = "Loading...";
    try {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${location}&method=2`);
        const data = await response.json();
        if (data.code === 200) {
            const timings = data.data.timings;
            results.innerHTML = `<h3>Prayer Times:</h3>
                <ul>
                    <li>Fajr: ${timings.Fajr}</li>
                    <li>Dhuhr: ${timings.Dhuhr}</li>
                    <li>Asr: ${timings.Asr}</li>
                    <li>Maghrib: ${timings.Maghrib}</li>
                    <li>Isha: ${timings.Isha}</li>
                </ul>`;
        } else {
            results.innerHTML = "Could not fetch prayer times. Please check the location.";
        }
    } catch (error) {
        results.innerHTML = "An error occurred. Please try again.";
        console.error(error);
    }
}
