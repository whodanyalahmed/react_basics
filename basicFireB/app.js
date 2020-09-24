function getData(){
    var name = document.getElementById('name').value;
    var roll = document.getElementById('roll').value;
    var key = firebase.database().ref('school').push().key
    var student = {
        name : name,
        roll : roll,
        key: key
    }

    // console.log(student);
    
    firebase.database().ref('school/' + key).set(student);

    // it will generate random key and save while data in it...
    // console.log(firebase.database().ref('school').push(student));

}



function getFirebaseData() {
    
    // once loaded
    // firebase.database().ref().once('value',function(data){
    //     console.log(data.val());

    // });
    // realtime when data change
    firebase.database().ref('school').on('child_added',function(data){
        console.log(data.val());

    });
    
}

getFirebaseData();


// function removeFirebaseData() {
    
//     firebase.database().ref('school/-MHbo5SQ8jAR-QTL9VeW').remove()
    
// }

// removeFirebaseData();


function editFirebaseData() {
    firebase.database().ref('school/-MHbqCsKJwVhW5UHGgSd').set({
        key: "-MHbqCsKJwVhW5UHGgSd",
        name: "Urooj",
        roll: 720
    })
}
editFirebaseData()