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

    // // version 1 X-Team Started
    //     const textX = document.getElementById('testX');
    //     const dbRef = firebase.database().ref().child('text');
    //     dbRef.on('value', snap => textX.innerText = snap.val());
    // // version 1 X-Team end
    

    // version 2 X-Team Started
    // Get elements
    const preObject = document.getElementById('object');
    const ulList = document.getElementById('list');
    
    // Create references
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('hobbies');
    
    // Sync object changes
    // dbRefObject.on('value', snap => console.log(snap.val()));
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

    // Sync list changes 
    dbRefList.on('child_added', snap => {
        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);
    });

    dbRefList.on('child_changed', snap => {
        const liChanged = document.getElementById(snap.key);
        liChanged.innerText = snap.val(); 
    });

    dbRefList.on('child_removed', snap => {
        const liToRemove = document.getElementById(snap.key);
        liToRemove.remove();
    });
    // version 2 X-Team end
    
}());