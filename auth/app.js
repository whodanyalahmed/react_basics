function login(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("User ==> " , user);

            document.getElementById('dp').innerHTML = `<h1>Facebook Pic</h1><br/><img src="${user.photoURL}"  /> `

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage +" error code is: "+ errorCode);
            });

}


