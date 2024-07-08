import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDmmfp0CWsfLW6knKuvhfTDSI41frMEwwk",
  authDomain: "innopulse-4ef9d.firebaseapp.com",
  projectId: "innopulse-4ef9d",
  storageBucket: "innopulse-4ef9d.appspot.com",
  messagingSenderId: "79285503801",
  appId: "1:79285503801:web:25966d5f24d2fe27c28ae8",
  measurementId: "G-59V59Z83LB"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Export the necessary functions and variables for use in other modules
export { messaging, getToken, onMessage };
