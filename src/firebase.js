import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // add your other firebase configuration here
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();




// const db = getFirestore(app);
// const colRef = collection(db, 'Users');



// export const usersData = getDocs(colRef)
//         .then((snapshot) => {
//         console.log("My Data", snapshot.docs)
//         let users = [];
//         snapshot.docs.forEach((doc) => {
//         users.push({...doc.data(), id: doc.id})
//         })
//         console.log("My Users", users)
//         return users;
        
//         })
//         .catch(err => {
//         console.log(err.message)
//         })



