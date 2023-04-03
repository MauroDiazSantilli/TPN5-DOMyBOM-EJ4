
function darHora(){
    let fechaActual = new Date() 

    const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const meses = ['Enero', 'Feberero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    
    let parrafoFecha = document.getElementById("fecha")
    
    parrafoFecha.innerHTML = `${diaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    let segundos = fechaActual.getSeconds()
    if (segundos === 60){
        segundos = 0
        fechaActual.setMinutes(fechaActual.getMinutes() + 1)
    }
    
    let parrafoHora = document.getElementById("hora")
    let hora = fechaActual.getHours()
    let AmPm = hora < 12 ? "AM" : "PM"
    if(hora > 12){
        hora -= 12
    }
    //Aqui ponemos los segundos en dos dugitos y se agregan el Am y el PM
    parrafoHora.innerHTML = `${fechaActual.getHours()}: ${fechaActual.getMinutes().toString().padStart(2, '0')}: ${fechaActual.getSeconds().toString().padStart(2, '0')} ${AmPm}`
    
    }
    
    function cambiarColor(color){
        let fecha = document.getElementById("fecha")
        fecha.style.color = color
    }
    
    
    
    setInterval(darHora, 1000)
    