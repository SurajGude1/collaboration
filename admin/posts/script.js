
    // Initialize Firebase with your configuration
    const firebaseConfig = {
      apiKey: "AIzaSyC7x1AvwpfLJWmfsFXtrf4Ulr0X6VzBNiw",
      authDomain: "test-ac85e.firebaseapp.com",
      databaseURL: "https://test-ac85e-default-rtdb.firebaseio.com",
      projectId: "test-ac85e",
      storageBucket: "test-ac85e.appspot.com",
      messagingSenderId: "186978834019",
      appId: "1:186978834019:web:a38e6dd8dc96ccd79bca56"
    };

    firebase.initializeApp(firebaseConfig);

    // Reference to your database
    var database = firebase.database();

    document.getElementById('post-data').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      var title = document.getElementById('title').value;
      var body = document.getElementById('body').value;
      var topic = document.getElementById('topic').value;
      var postimage = document.getElementById('postimage').value;


      // Push data to the 'test' database node
      var newDataRef = database.ref('test').push();
      newDataRef.set({
        title: title,
        body: body,
        topic: topic,
        postimage: postimage
      });

      // Clear form inputs

      document.getElementById('body').value = '';
      document.getElementById('title').value = '';
      document.getElementById('topic').value = '';
      document.getElementById('postimage').value = '';


      alert('Data submitted successfully!');

      // Read data from database

      let posttitle = document.getElementById("post-title");
      let postauthor = document.getElementById("post-author");



    });
