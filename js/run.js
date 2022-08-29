
function metad (){
    const metadataRef = admin.database().ref('metadata/' + uid);
    metadataRef.set({revokeTime: utcRevocationTimeSecs})
        .then(() => {
        console.log('Database updated successfully.');
    });
}


function observador(){
    console.log('Entrando al observador');
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('Existe usuario activo');
            console.log(user.emailVerified);
        } else {
          // User is signed out.
          // ...
          console.log('No existe usuario activo');
          cerrar();
        }
      });
}
observador();