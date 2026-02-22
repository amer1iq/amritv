// Script for interactive features on the download page

let downloadCount = 0;

// Function to simulate download
function downloadFile() {
    downloadCount++;
    displaySuccessMessage();
    updateDownloadCounter();
}

// Function to display success message
function displaySuccessMessage() {
    alert('Download successful!');
}

// Function to update download counter
function updateDownloadCounter() {
    document.getElementById('downloadCounter').innerText = `Downloads: ${downloadCount}`;
}

// Event listener for the download button
document.getElementById('downloadButton').addEventListener('click', downloadFile);