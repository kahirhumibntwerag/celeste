// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD_LCXBSOhllDGKVcmYeKPJRNhtE07KVao",
  authDomain: "celeste-8bb0d.firebaseapp.com",
  projectId: "celeste-8bb0d",
  storageBucket: "celeste-8bb0d.firebasestorage.app",
  messagingSenderId: "1022439612536",
  appId: "1:1022439612536:web:d151b5c0c344bea4bdcd8d",
  measurementId: "G-FBNRVXW6BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const storage = getStorage()
export const storageRef = ref(storage)

export const uploadImage = async (imageFile) => {
  if (!imageFile) return null;
  
  const imageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
  const metadata = {
    cacheControl: 'public,max-age=31536000', // Cache for 1 year
    contentType: imageFile.type
  };

  try {
    const snapshot = await uploadBytes(imageRef, imageFile, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

// Example 1: Upload a single image
const uploadSingleImage = async (imageFile) => {
  const imageUrl = await uploadImage(imageFile);
  if (imageUrl) {
    console.log('Image uploaded successfully:', imageUrl);
    return imageUrl;
  }
};

// Example 2: Upload multiple images
const uploadMultipleImages = async (imageFiles) => {
  const uploadPromises = imageFiles.map(file => uploadImage(file));
  const urls = await Promise.all(uploadPromises);
  const validUrls = urls.filter(url => url !== null);
  console.log('All images uploaded:', validUrls);
  return validUrls;
};

export const getImageDownloadURL = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    // Add cache control headers to the download URL
    const url = await getDownloadURL(imageRef);
    return url + '&cache-control=public,max-age=31536000';
  } catch (error) {
    console.error('Error getting download URL:', error);
    return null;
  }
};