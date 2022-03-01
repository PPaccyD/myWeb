const firebaseConfig = {
  apiKey: "AIzaSyBTr56eTT9xgJo9fshQC5Up98GpWGb8ydc",
  authDomain: "myppaccy.firebaseapp.com",
  projectId: "myppaccy",
  storageBucket: "myppaccy.appspot.com",
  messagingSenderId: "1091890647208",
  appId: "1:1091890647208:web:3c55c4c91f9a1b7abdb29d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//  declaration of variables 
const messageForm = document.querySelector('.messageForm');

// saving data(messages) from the user through the index.html form
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('messages').add({
      name: messageForm.name.value,
      email: messageForm.email.value,
      message: messageForm.message.value
  });
  messageForm.name.value = '';
  messageForm.email.value = '';
  messageForm.message.value = '';
  alert("Message sent");
});
