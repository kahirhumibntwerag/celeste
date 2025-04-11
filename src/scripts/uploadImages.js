import { uploadImage, getImageDownloadURL } from '../config/firebase.js';
import fs from 'fs';
import path from 'path';

const uploadImagesFromDirectory = async (directoryPath) => {
  try {
    // Read all files from the directory
    const files = fs.readdirSync(directoryPath);
    
    // Filter for image files (you can add more extensions if needed)
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to upload`);

    // Upload each image
    for (const filename of imageFiles) {
      const filePath = path.join(directoryPath, filename);
      
      // Read the file as buffer
      const fileBuffer = fs.readFileSync(filePath);
      const file = new File([fileBuffer], filename, {
        type: `image/${path.extname(filename).slice(1)}`
      });

      console.log(`Uploading ${filename}...`);
      const url = await uploadImage(file);
      
      if (url) {
        console.log(`✓ Successfully uploaded ${filename}`);
        console.log(`URL: ${url}`);
      } else {
        console.error(`✗ Failed to upload ${filename}`);
      }
    }

    console.log('Upload process completed!');
  } catch (error) {
    console.error('Error during upload process:', error);
  }
};

// Usage example:
const directoryPath = path.join(process.cwd(), 'src/assets'); // Change this to your images folder path
uploadImagesFromDirectory(directoryPath); 
// Example usage
//const url = await getImageDownloadURL('images/1743876472454-cover.jpg');
//if (url) {
//  console.log('Image URL:', url);
  // Use this URL in your database or wherever needed
//}