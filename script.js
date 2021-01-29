function contacto() {
    let nombre = document.getElementById("nombre_id").value;
    let apellido = document.getElementById("apellido_id").value;
    let dni = document.getElementById("dni_id").value;
    let email = document.getElementById("email_id").value;
    let telefono = document.getElementById("telefono_id").value;
    let franquicia = document.getElementById("franquicia_id").value;
    
    if (nombre ==""){
        document.getElementById("mensaje_alerta").innerHTML ="Todos los campos son obligatorios" 
    /* innerHTML es para elementos que no son de formularios*/ 
    }
    
    if (apellido ==""){
        document.getElementById("mensaje_alerta").innerHTML ="Todos los campos son obligatorios"
    }

    if (dni ==""){
        document.getElementById("mensaje_alerta").innerHTML ="Todos los campos son obligatorios"
    }

    if (email ==""){
        document.getElementById("mensaje_alerta").innerHTML ="*Todos los campos son obligatorios"
    }

    if (telefono ==""){
        document.getElementById("mensaje_alerta").innerHTML ="Todos los campos son obligatorios"
    }

    if (franquicia ==""){
        document.getElementById ("mensaje_alerta").innerHTML = "Todos los campos son obligatorios"
    }
    
    console.log (nombre, apellido, dni, email, telefono);
}

function valorSeguro() {
    let tipoSeguro = document.getElementById("tipo_seguro").value; /*el value de un elemento tipo select es el option seleccionado*/
    let valor="0";
    switch (tipoSeguro) {
        case "1":
            valor="$500";
            break;
        case "2":
            valor="$1.000";
            break;
        case "3":
            valor="$1.500";
            break;
    }
    document.getElementById("valor_seguro").innerHTML=valor;
}


    


    /*el SWITCH es un condicional que evalua la variable tipoSeguro declarada anteriormente
    y si la variable vale 1 porque el usuario seleccionóel option de valor 1, el switch entra por el case que tiene el valor 1*/