
// Get the template element for the user card
const userCard = document.getElementById('profile-card');

// Get the container element where all user cards will be displayed
const container = document.getElementById('container');

// Function to fetch user data from the API
async function fetchData() {
    // Fetch data from the API and wait for the response
    const response = await fetch('https://dummyjson.com/users');

    // Convert the response into JSON format
    const data = await response.json();

    // Extract the array of users from the API response
    const users = data.users;

    // Pass the array of users to the bindData function to process and display
    bindData(users);
}

// Function to bind the fetched data to the template and display it
function bindData(users) {
    // Loop through each user in the array
    users.forEach((user) => {
        // Clone the user card template (including all child elements)
        const userCardClone = userCard.cloneNode(true);

        // Get the placeholders (image, name, email) from the cloned template
        const userImage = userCardClone.querySelector('#user-img');
        const userName = userCardClone.querySelector('#user-name');
        const userEmail = userCardClone.querySelector('#user-email');

        // Assign the user's image URL to the 'src' attribute of the image
        userImage.src = user.image;

        // Assign the user's first and last name to the name element
        userName.innerHTML = `${user.firstName} ${user.lastName}`;

        // Assign the user's email address to the email element
        userEmail.innerHTML = user.email;

        // Append the updated user card to the container so it's displayed on the page
        container.appendChild(userCardClone);
    });
}

// Call the fetchData function to start the process of fetching and displaying user data
fetchData();