const startButton = document.getElementById('startButton');
const videoContainer = document.getElementById('video-container');
const webcam = document.getElementById('webcam');

startButton.addEventListener('click', async () => {
    try {

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        
        videoContainer.style.display = 'block';
        webcam.srcObject = stream;
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
});