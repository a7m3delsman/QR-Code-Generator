const generateButton = document.getElementById('generate-button');
const qrCodeDiv = document.getElementById('qr-code');
const qrInput = document.getElementById('qr-input');
const downloadButton = document.getElementById('download-button');

generateButton.addEventListener('click', () => {
    const url = qrInput.value;

    if (url) {
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const qrCodeImage = new Image();
        qrCodeImage.crossOrigin = 'Anonymous';
        qrCodeImage.onload = () => {
            canvas.width = qrCodeImage.width;
            canvas.height = qrCodeImage.height;
            
     
            context.fillStyle = 'fillRect'; 
            context.fillRect(0, 0, canvas.width, canvas.height);
            
           
            context.drawImage(qrCodeImage, 0, 0);
            
            const dataURL = canvas.toDataURL('image/png');
            downloadButton.href = dataURL;
            downloadButton.style.display = 'inline-block';
        };
        qrCodeImage.src = apiUrl;
        
        qrCodeDiv.innerHTML = '';
        qrCodeDiv.appendChild(canvas);
    } else {
        qrCodeDiv.innerHTML = 'Please enter a URL.';
        qrCodeDiv.style.color ='gold'
        downloadButton.style.display = 'none';
        qrCodeDiv.style.fontSize = '25px';
        qrCodeDiv.style.fontFamily = 'moonllys'
    }
});

var audio = new Audio('button-click.mp3');
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }
  
  