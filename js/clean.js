'use strict'


function limpiar(){
    localStorage.clear();
    sessionStorage.clear();
    console.log('Limpio el almacenamiento');
    firebase.auth().signOut();
}

limpiar();

