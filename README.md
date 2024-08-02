Marvel Characters Viewer
This project is a React application that fetches and displays Marvel characters using the Marvel API. Users can browse a list of Marvel characters, view details, and explore associated comics.

Overview
The Marvel Characters Viewer is a simple React application that allows users to browse through a list of Marvel characters fetched from the Marvel API. Users can click on a character to view additional details such as the description and associated comics directly within the character card.

Features
Character Listing: Fetches and displays a list of Marvel characters.
Character Details: View detailed information about each character, including their description and associated comics.
Dynamic Image Loading: Displays character images using the Marvel API's dynamic image URLs.
Responsive UI: Uses Bootstrap for styling to create a responsive and user-friendly interface.
Installation
To get started with this project, follow the steps below:

Clone the Repository:

git clone https://github.com/SWathyJagannatha/characterDetail.git
Install Dependencies:

Make sure you have Node.js installed. Then, run the following command to install the necessary packages:

npm install
Setup Marvel API Key:

Sign up at Marvel Developer Portal to get your API key.

In the project directory, create a .env file and add your API credentials:

public_key=your_public_key
hash=your_md5_hash

Start the Development Server:

npm start
The application should now be running on http://localhost:3000.

Usage
Once the application is running, you can:

Browse Characters: View a list of Marvel characters displayed in the grid form.
View Details: Click on the button or on a character's card to view more information, including their description , associated comics and some more details.

API Integration
This project integrates with the Marvel API to fetch character data, including:

Character List: The list of characters is fetched.
Character Details: Detailed information about each character, including their description and associated comics.
Example API Call
The application makes an API call.

Components
CharacterList
Fetches and displays a list of characters.
Each character is shown as a card with an image, name, and a button to show more details.
CharacterDetails
Displays additional information about the selected character, including the description and associated comics.

