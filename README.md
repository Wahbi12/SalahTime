# Prayer Calculator & Qiblah Finder

This is a simple web application that calculates prayer times based on a user's location and shows the Qiblah direction. Users can also search for prayer times and Qiblah direction for other locations by entering a city or address.

## Features

- **Automatic Location Detection**: Calculates prayer times based on the user's current location.
- **Qiblah Direction**: Displays the Qiblah direction on a graphical compass.
- **Search by Location**: Users can input a city or address to get prayer times and Qiblah direction for that location.
- **Clean and Simple Interface**: Easy-to-use design with a light green and white theme.

## Technologies Used

- **HTML**: For structuring the web app.
- **CSS**: For styling the app.
- **JavaScript**: For fetching data from APIs and adding interactivity.
- **API Integration**:
  - [Aladhan API](https://aladhan.com/prayer-times-api) for prayer times.
  - Qiblah direction calculated using geolocation data.

## How to Use

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Enter your location or allow the browser to detect it automatically.
4. View the prayer times and Qiblah direction displayed on the page.

## Deployment

To host this project on GitHub Pages:

1. Create a new repository on GitHub.
2. Upload all the project files to the repository.
3. Go to the repository's **Settings** > **Pages**.
4. Under **Source**, select the branch (e.g., `main`) and directory (root).
5. Save the changes, and your app will be available online.

## File Structure

```
Prayer_Calculator_Qiblah/
├── index.html  # Main HTML file
├── style.css   # Styling for the app
├── app.js      # JavaScript for functionality
```

## Future Improvements

- Add real-time compass integration for mobile devices.
- Implement a dark mode.
- Provide multiple calculation methods for prayer times.
- Localize the app for different languages.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Aladhan API](https://aladhan.com/prayer-times-api) for prayer times.
- Inspiration from existing prayer and Qiblah apps.
