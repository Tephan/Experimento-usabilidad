'use strict'

var c = '';

function registrar(){
    /*Captura de los inputs*/        
    correo = document.getElementById("input-1").value;
    contrasena = document.getElementById("input-2").value;
    var contrasena2 = document.getElementById("input-3").value;

    if(contrasena == contrasena2){
        //Registrar usuarios y autenticarlos Firebase
        firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
            .then(function(){
            verificar();
        })
    
            .catch(function(error) {
            // Tratar errores
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            console.log(error.code);
            console.log(errorMessage);
            // ...
            });
    }
    else{
        alert('Las contraseñas no coinciden')
    }

}

function autenticar(){
    /*Captura de los inputs*/        
    correo = document.getElementById("input-email").value;
    contrasena = document.getElementById("input-contrasena").value;
    
    firebase.auth().signInWithEmailAndPassword(correo, contrasena)
    .then(function(user){
        console.log('Entraste');
        console.log(user);
        window.localStorage.setItem("correo", correo);
        aparece(user);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/user-not-found'){
            console.log('No se reconoce usuario');
            alert('El correo ingesado no se reconoce');
        }
        else if(errorCode=='auth/wrong-password'){
            console.log('Contraseña incorrecta');
            alert('La contraseña es invalida');
        }
        else if(errorCode=='auth/invalid-email'){
            console.log('Formato de correo incorrecto');
            alert('El formaro del correo es incorrecto');
        }
        //alert(errorMessage);
        console.log(error.code);
        //console.log(errorMessage);
        // ...
      });
}

function datosp(correo){
    var registro;
    db.collection("usuarios").where("correo", "==", correo)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            registro = doc.id;
            window.localStorage.setItem("id", registro);
            
        });
        
        if (registro == undefined){
            console.log('No hay registro');
            window.location.href="perfil.html";
        }
        else{
            console.log('Si hay registro');
            window.location.href="menu.html";
        }
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        
    });
}

function aparece(user){
    var user= user;
    var contenido = document.getElementById('contenido');
    c = window.localStorage.getItem("correo");
    if(user.emailVerified){
        datosp(c);
    }
    else{
        contenido.innerHTML = `
    <p>Verifique su correo para ingresar al menú.</p>
    `;
    }
    
}

function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...');
        localStorage.clear();
        window.location.href="index.html";
    })
    .catch(function(error){
        console.log(error);
    })
}

function verificar(){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function(){
        // User deleted.
        alert('Usuario agregado satisfactoriamente');
        console.log(user.uid);
        console.log('Enviando correo...');
        cerrar();

    }).catch(function(error) {
        // An error happened.
        console.log(error);
                });
    

    
}