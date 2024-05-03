document.getElementById('finalizeCollage').addEventListener('click', function() {
    const finalCollage2 = document.getElementById('finalCollage2');
    const container2 = document.getElementById('container2');
    const fileInput = document.getElementById('fileInput');
    const files = Array.from(fileInput.files);

    finalCollage2.innerHTML = '';

    files.forEach(file => {
        const collageItem = document.createElement('div');
        collageItem.classList.add('collage-item');

        if (file.type.startsWith('image')) {
            const image = document.createElement('img');
            image.src = URL.createObjectURL(file);
            collageItem.appendChild(image);
            finalCollage2.appendChild(collageItem);

            // Add event listener to enlarge image on click
            image.onclick = function() {
                const modal = document.createElement('div');
                modal.style.position = 'fixed';
                modal.style.left = '0';
                modal.style.top = '0';
                modal.style.width = '100vw';
                modal.style.height = '100vh';
                modal.style.background = 'rgba(0, 0, 0, 0.8)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '1000';

                const enlargedImg = document.createElement('img');
                enlargedImg.src = image.src;
                enlargedImg.style.maxWidth = '90%';
                enlargedImg.style.maxHeight = '90%';
                modal.appendChild(enlargedImg);

                // Close modal when clicked
                modal.onclick = function() {
                    document.body.removeChild(modal);
                };

                document.body.appendChild(modal);
            };

        } else if (file.type.startsWith('video')) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            video.autoplay = true;
            video.loop = true;
            video.setAttribute('playsinline', true); // Ensures video plays inline on all devices
            collageItem.appendChild(video);
            finalCollage2.appendChild(collageItem);

            collageItem.style.width = '400px';
            collageItem.style.height = '300px';
            collageItem.style.borderRadius = '15px'; // Style added for videos
        }

        collageItem.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${Math.random() * 0.2 + 0.9})`;
    });

    const finalCollageRect = finalCollage2.getBoundingClientRect();
    container2.style.width = finalCollageRect.width + 'px';
    container2.style.height = finalCollageRect.height + 'px';
});

document.getElementById('bgColor').addEventListener('input', function() {
    const container2 = document.getElementById('container2');
    const bgColor = this.value;
    container2.style.background = bgColor;
});
