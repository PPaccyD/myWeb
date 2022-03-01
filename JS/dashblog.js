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
  const addArticle = document.querySelector('.addArticle');
  
  // saving data(messages) from the user through the index.html form
  addArticle.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Article').add({
        Content: addArticle.Content.value,
        Title: addArticle.myTitle.value,
        // message: messageForm.message.value
    });
    addArticle.Content.value = '';
    addArticle.Title.value = '';
    // addArticle.message.value = '';
    alert("Message sent");
  });
  