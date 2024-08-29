document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById('uploadForm');
    const uploadStatus = document.getElementById('uploadStatus');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (file) {
            // Generate a unique 10-letter string
            const uniqueString = generateUniqueString(10);
            const fileName = `${uniqueString}-${file.name}`;
            const newPagePath = `generated-pages/${uniqueString}.html`;

            // Save the image in the "uploads/" folder (this requires backend processing)
            // For now, we'll simulate this step.
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const imageData = reader.result;

                // Create a new HTML page displaying the uploaded image
                const newPageContent = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Vengence - Image ${uniqueString}</title>
                        <link rel="stylesheet" href="../styles.css">
                    </head>
                    <body>
                        <header>
                            <h1>Vengence</h1>
                            <p>Your uploaded image</p>
                        </header>
                        
                        <main>
                            <div class="image-container">
                                <img src="${imageData}" alt="Uploaded Image">
                            </div>
                        </main>

                        <footer>
                            <p>&copy; 2024 Vengence. All rights reserved.</p>
                        </footer>
                    </body>
                    </html>
                `;

                // Simulate saving the new page (this requires backend processing)
                uploadStatus.textContent = `Image uploaded successfully!`;
                
                // Instead of saving the file, simulate the file generation and redirect
                const newWindow = window.open();
                newWindow.document.write(newPageContent);
                newWindow.document.close();
            };
        } else {
            uploadStatus.textContent = "Please select an image to upload.";
        }
    });

    function generateUniqueString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
});
