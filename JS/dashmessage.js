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
const messageList = document.querySelector('#message-list');// getting the messageList id from dash-messageList.html 

// create element & render message(function to render messages from fire base firestore)
const renderMessage = function(doc){
    let div = document.createElement('div');
    div.className = 'container';
    let name = document.createElement('p');
    name.setAttribute("id", "name");
    let email = document.createElement('p');
    email.setAttribute("id", "email");
    let message = document.createElement('p');
    message.setAttribute("id", "message");

    div.setAttribute('message-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    message.textContent = doc.data().message;

    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(message);
    messageList.appendChild(div);
}

// getting data(messages) from the firebase
db.collection('messages').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderMessage(doc);
    });
});