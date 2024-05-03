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
        } else if (file.type.startsWith('video')) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            video.autoplay = true;
            video.loop = true;
            collageItem.appendChild(video);
            finalCollage2.appendChild(collageItem);

            collageItem.style.width = '400px';
            collageItem.style.height = '300px';
        }

        collageItem.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${Math.random() * 0.2 + 0.9})`;

        if (file.type.startsWith('video')) {
            collageItem.style.borderRadius = '15px';
        }
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
