var onFirebaseLoad = (async() => {
    await importModule("https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js");
    await importModule("https://www.gstatic.com/firebasejs/7.5.2/firebase-database.js");

    var firebaseConfig = {
        apiKey: "AIzaSyDXM_wGAJOLsf11BTlznqknnGzbS2xeVHg",
        authDomain: "community-5d362.firebaseapp.com",
        databaseURL: "https://community-5d362.firebaseio.com",
        projectId: "community-5d362",
        storageBucket: "community-5d362.appspot.com",
        messagingSenderId: "1098909737635",
        appId: "1:1098909737635:web:bcbdcf4142c5924d6c9516",
        measurementId: "G-K4B1HSL1E6"
    };

    firebase.initializeApp(firebaseConfig);

    function importModule(path) {
        var script = document.createElement("script");
        script.src = path;
        document.head.appendChild(script);
        return new Promise(r => script.onload = r);
    }
})();