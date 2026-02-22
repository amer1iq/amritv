// script.js
// JavaScript for interactive features

function displayCurrentTime() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log('Current Date and Time (UTC):', formattedDate);
}

displayCurrentTime();
