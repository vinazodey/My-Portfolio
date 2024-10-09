"use strict";
let sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
let upload = document.querySelector(".upload");
let uploadBtn = document.querySelector(".upload__button");
uploadBtn.addEventListener("click", async () => {
    upload.classList.add("uploading");
    await sleep(3000);
    upload.classList.add("uploaded");
    await sleep(2000);
    upload.classList.remove("uploading");
    upload.classList.add("uploaded-after");
    await sleep(1000);
    upload.className = "upload";
});

document.querySelector('.upload__button').addEventListener('click', function() {
    // Display the downloading message or effect (optional)
    document.querySelector('.upload__hint').style.display = 'flex';

    // Set a 2-second delay (2000 milliseconds) before downloading the file
    setTimeout(function() {
        // Create an invisible anchor element
        const link = document.createElement('a');
        
        // Set the href to the path of your PDF
        link.href = './assets/Vina Zodey.pdf';  // Replace with actual file path
        
        // Set the download attribute with the desired file name
        link.download = 'Vina Zodey.pdf';  // File name upon download
        
        // Append the link to the body (required for Firefox)
        document.body.appendChild(link);
        
        // Trigger the click event on the link to start download
        link.click();
        
        // Remove the link after triggering the download
        document.body.removeChild(link);
        
        // Hide the downloading message or effect (optional)
        document.querySelector('.upload__hint').style.display = 'flex';
    }, 2000); // 2 seconds delay (2000 ms)
});




