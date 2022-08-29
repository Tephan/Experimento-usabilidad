var valor = new Array();
var num = new Array();
var data = new Array(2);
var csv = '';
var cont = 0;
var bandera = false;
var perfil = new Array();
var quis = new Array();
var csqu = new Array();
var sus = new Array();
var nasa = new Array();
var cues = new Array();
var ux = new Array();
var zero = '';
var id = '';
var correo = '';
var contrasena = '';
var proyecto = '';
var c = '';



function check(){
    proyecto = document.getElementById("input-proyecto").value;
    window.localStorage.setItem("proyecto", proyecto);
    window.location.href="menu.html";
}

function procesar(cuestionario){
    var dim = 0;
    c = window.localStorage.getItem("correo");
    switch (cuestionario) {
        case 1:
            dim = 20;
            elementos(dim);
            if(comprobar(dim)){quis = Array.from(valor);
            editar(cuestionario, quis[1], quis[2], quis[3], quis[4], quis[5], 
                quis[6], quis[7], quis[8], quis[9], quis[10], 
                quis[11], quis[12], quis[13], quis[14], quis[15], 
                quis[16], quis[17], quis[18], quis[19]);}
            break;
        case 2:
            dim = 17;
            elementos(dim);
            if(comprobar(dim)){csqu = Array.from(valor);
                editar(cuestionario, csqu[1], csqu[2], csqu[3], csqu[4], csqu[5], 
                    csqu[6], csqu[7], csqu[8], csqu[9], csqu[10], 
                    csqu[11], csqu[12], csqu[13], csqu[14], csqu[15], 
                    csqu[16], zero, zero, zero);}
            break;
        case 3:
            dim = 11;
            elementos(dim);
            if(comprobar(dim)){sus = Array.from(valor);
                editar(cuestionario, sus[1], sus[2], sus[3], sus[4], sus[5], 
                    sus[6], sus[7], sus[8], sus[9], sus[10], 
                    zero, zero, zero, zero, zero, 
                    zero, zero, zero, zero);}
            break;
        case 4:
            dim = 5;
            elementos(dim);
            if(comprobar(dim)){ux = Array.from(valor);
                editar(cuestionario, ux[1], ux[2], ux[3], ux[4], zero, 
                    zero, zero, zero, zero, zero, 
                    zero, zero, zero, zero, zero, 
                    zero, zero, zero, zero);}
            break;
        case 5:
            dim = 15;
            elementos(dim);
            if(comprobar(dim)){perfil = Array.from(valor);
                almacenar(perfil[1], perfil[2], perfil[3], perfil[4], perfil[5], 
                    perfil[6], perfil[7], perfil[8], perfil[9], perfil[10], 
                    perfil[11], perfil[12], perfil[13], perfil[14], c);}
            break;
        case 6:
            dim = 12;
            elementos(dim);
            if(comprobar(dim)){cues = Array.from(valor);
                editar(cuestionario, cues[1], cues[2], cues[3], cues[4], cues[5], 
                    cues[6], cues[7], cues[8], cues[9], cues[10], 
                    cues[11], zero, zero, zero, zero, 
                    zero, zero, zero, zero);}
            break;
        case 7:
            dim = 11;
            elementos(dim);
            if(comprobar(dim)){nasa = Array.from(valor);
                editar(cuestionario, nasa[1], nasa[2], nasa[3], nasa[4], nasa[5], 
                    nasa[6], nasa[7], nasa[8], nasa[9], nasa[10], 
                    zero, zero, zero, zero, zero, 
                    zero, zero, zero, zero);}
            break;
        default:
            break;
    }
    
}

function elementos(tipo){
    for(var i = 0; i < tipo; i++){
        num[i]= 'nom'+(i);
            if($("input[name="+num[i]+"]").hasClass("rng")){
                valor[i] = guardarRng(num[i]);
                console.log('Es un input range');
            }
            else if(($("#r"+i).hasClass("tex"))||($("#r"+i).hasClass("sel"))){
                valor[i] = guardarTex(i);
                console.log('Es un input text o selector');
            }
            else if($("input[name="+num[i]+"]").hasClass("rad")){
                valor[i] = guardarRad(num[i]);
                console.log('Es un input radio');
            }
            console.log(i+' '+valor[i]);
    }
}

function comprobar(dim){
    var temporal;
    for (i = 1; i < dim; i++) {
        temporal = valor[i];            
        if(temporal.length != 0){
                cont++;
        }
        else{
                console.log(i+' Esta vacio');
            }
        }
        if(cont<(dim-1)){
            alert('Complete cada pregunta del cuestionario, por favor.');
        }
        else{
            bandera = true;
            data [0] = num;
            data [1] = valor;
            alert('Cuestionario finalizado sasfactoriamente.');
        }
        return bandera;
}

function guardarRng(numero){
    var valor = ($("input[name="+numero+"]").val());
    return valor;
}

function guardarTex(numero){
    var valor = ($("#r"+numero).val());
    return valor;
}

function guardarRad(numero){
    var valor = ($("input:radio[name="+numero+"]:checked").val());
    return valor;
}





