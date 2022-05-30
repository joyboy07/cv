import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
	apiKey: "AIzaSyBlsqhTPzhQQqk5TdjIXj6gbXBY49t6Q-A",
	authDomain: "cv-juliopp.firebaseapp.com",
	projectId: "cv-juliopp",
	storageBucket: "cv-juliopp.appspot.com",
	messagingSenderId: "877236972070",
	appId: "1:877236972070:web:96e5cd6479cb81f9c9d4e7",
	measurementId: "G-00BTVCRQBW"
};

const app = initializeApp (firebaseConfig);
const db = getFirestore(app)
const dbstorage = getStorage(app)
export { db, dbstorage };
