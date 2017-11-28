(function() {
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
    
    // Get elements
    const preObject = document.getElementById('object');
    
    // Create references
    const dbRefObject = firebase.database().ref().child('object');
    
    // Sync object changes
    // dbRefObject.on('value', snap => console.log(snap.val()));
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });
    
}());