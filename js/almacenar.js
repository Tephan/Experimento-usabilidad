'use strict'

var identificador;
var proyecto;

var email = window.localStorage.getItem("correo");
function almacenar(nom, apat, amat, ocu, exp, nav, hord, hors, sith, sitp, busc, usab, nombus, nobus, email){
    //Agregar documentos
    db.collection("usuarios").add({
         
        nombre: nom,
        apPaterno: apat,
        apMaterno: amat,
        ocupacion: ocu,
        experienciaInt: exp,
        navegaHab: nav,
        horasDia: hord,
        horasSem: hors,
        sitiosHab: sith,
        sitiosPref: sitp,
        busqueda: busc,
        usaBus: usab,
        nombreBus: nombus,
        noBus: nobus,
        correo: email/*,
        cuestionarios: {quis:{}, csuq:{}, sus:{}, nasa:{}, ux:{}, cuestionario:{}}*/
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        id = window.localStorage.setItem("id", docRef.id);
        window.location.href="menu.html";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


function editar(tipo, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19){
    identificador = window.localStorage.getItem("id");
    proyecto = window.localStorage.getItem("proyecto");
    switch (tipo) {
        case 1:
            db.collection('usuarios').doc(identificador).update({
                "cuestionarios.quis": {
                    pregunta1: r1, pregunta2: r2, pregunta3: r3, pregunta4: r4, pregunta5: r5, pregunta6: r6, pregunta7: r7, pregunta8: r8, pregunta9: r9, pregunta10: r10, pregunta11: r11, pregunta12: r12, pregunta13: r13, pregunta14: r14, pregunta15: r15, pregunta16: r16, pregunta17: r17, pregunta18: r18, pregunta19: r19
                }
              })
              .then(function(){
                window.location.href="menu.html";
              });
            break;
        case 2:
            db.collection('usuarios').doc(identificador).update({
                "cuestionarios.csuq": {
                    pregunta1: r1, pregunta2: r2, pregunta3: r3, pregunta4: r4, pregunta5: r5, pregunta6: r6, pregunta7: r7, pregunta8: r8, pregunta9: r9, pregunta10: r10, pregunta11: r11, pregunta12: r12, pregunta13: r13, pregunta14: r14, pregunta15: r15, pregunta16: r16
                }
              })
              .then(function(){
                window.location.href="menu.html";
              });
            break;
        case 3:
            db.collection('usuarios').doc(identificador).update({
                "cuestionarios.sus": {
                    pregunta1: r1, pregunta2: r2, pregunta3: r3, pregunta4: r4, pregunta5: r5, pregunta6: r6, pregunta7: r7, pregunta8: r8, pregunta9: r9, pregunta10: r10
                }
              })
              .then(function(){
                window.location.href="menu.html";
              });
            break;
        case 4:
            db.collection('usuarios').doc(identificador).update({
                "cuestionarios.ux": {
                    pregunta1: r1, pregunta2: r2, pregunta3: r3, pregunta4: r4
                }
              })
              .then(function(){
                window.location.href="menu.html";
              });
            break;
        case 6:
            db.collection('usuarios').doc(identificador).update({
                "cuestionarios.cuestionario": {
                    pregunta1: r1, pregunta2: r2, pregunta3: r3, pregunta4: r4, pregunta5: r5, pregunta6: r6, pregunta7: r7, pregunta8: r8, pregunta9: r9, pregunta10: r10, pregunta11: r11
                }
              })
              .then(function(){
                window.location.href="menu.html";
              });
            break;
        case 7:
            db.collection('usuarios').doc(identificador).update({
                "cuestionarios.nasa": {
                    pregunta1: r1, pregunta2: r2, pregunta3: r3, pregunta4: r4, pregunta5: r5, pregunta6: r6, pregunta7: r7, pregunta8: r8, pregunta9: r9, pregunta10: r10
                }
              })
              .then(function(){
                window.location.href="menu.html";
              });
            break;
            
        default:
            break;
    }
}

function descargar(){
    if(bandera){
        data.forEach(function(row) {
            csv += row.join(',');
            csv += ",\n";
            });
        console.log(csv);
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.download = 'datos.csv';
        hiddenElement.click();
        }
        else{
            alert('No es posible realizar esta operación sin haber guardado el cuestionario.');
        }
    }