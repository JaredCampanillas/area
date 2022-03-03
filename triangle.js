function triangulos(){
    let l1=document.getElementById("lado1").value;
    let l2=document.getElementById("lado2").value;
    let l3=document.getElementById("lado3").value;
    let tipoTriangulo;
    var validation  = false;
    var msg = '';

    if (l1 == '') {
        validation = false;
        msg = msg + '<li>El campo Lado1 no puede estar vacío.</li>'
    }if (l2 == '') {
        validation = false;
        msg = msg + '<li>El campo Lado2 no puede estar vacío.</li>'
    }if (l3 == '') {
        validation = false;
        msg = msg + '<li>El campo Lado3 no puede estar vacío.</li>'
    }else {
        validation = true;
    }
    

        //Algoritmo
        if (validation == false) {
            document.getElementById('error').innerHTML='Error:<br/><ul>' + msg + '</ul>';
        }else {
            if (l1==l2 && l2==l3){

                tipoTriangulo="equilátero"
        
            } else if (l1==l2 || l2==l3 || l1==l3){
        
                tipoTriangulo="isosceles";
                    
            } else {
                tipoTriangulo="escaleno";
            }
            document.getElementById('error').style.display= 'none';
            document.getElementById("solucion").innerHTML="El triangulo es : "+tipoTriangulo;
            }
        }

function prompter() {
    var reply = prompt("Hey ¿cuál es tu nombre?", "")
    alert ( "Un placer conocerte " + reply + "!")
    }
