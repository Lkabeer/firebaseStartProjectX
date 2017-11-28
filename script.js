// Initialize Firebase
var config = {
apiKey: "AIzaSyDD-NMt3W8NYl9ZnUI5rFBGy3ZWpa9TuSo",
authDomain: "fir-database-ecca0.firebaseapp.com",
databaseURL: "https://fir-database-ecca0.firebaseio.com",
projectId: "fir-database-ecca0",
storageBucket: "",
messagingSenderId: "987339674979"
};
firebase.initializeApp(config);

var textX = document.getElementById('testX');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => textX.innerText = snap.val());
