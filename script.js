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
    

    // version 2 X-Team Start
    // Get elements
    const preObject = document.getElementById('object');
    const ulList = document.getElementById('list');
    const ulFriendy = document.getElementById('friendy');
    
    // Create references
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('hobbies');

    const dbRefNotifications = dbRefObject.child('notifications');
    
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


    // version 3 X-Team Started

    // Sync object changes
    timeAgo = [];
    dbRefNotifications.on('child_added', snap => {
        const liContent = document.createElement('li');
        liContent.innerText = "Content: " + snap.child('content').val();
        liContent.id = snap.key;
        ulFriendy.appendChild(liContent);

        const liTitle = document.createElement('li');
        liTitle.innerText = "Title: " + snap.child('title').val();
        liTitle.id = snap.key;
        ulFriendy.appendChild(liTitle);

        const liNumber = document.createElement('li');
        liNumber.innerText = "Number: " + snap.child('number').val();
        liNumber.id = snap.key;
        ulFriendy.appendChild(liNumber);
        
        const timeAgo = document.createElement('li');
        var newNumber = snap.child('number').val() * 2;        
        timeAgo.innerText = "Time Ago: " + newNumber;
        timeAgo.id = snap.key;
        ulFriendy.appendChild(timeAgo);

        var newNumber = snap.child('number').val();
        console.log(newNumber * 2);
    });

    // version 3 X-Team end

    
}());