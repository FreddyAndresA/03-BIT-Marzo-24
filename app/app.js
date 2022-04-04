/* Contador de la pagina de inicio */

let countDownDate = new Date("May 1, 2022 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("launch").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("launch").innerHTML = "EXPIRED";
    }
}, 1000);


/* Alerta para el agendamiento de prueba de manejo */

let testDrive = document.getElementById("testDrive");

testDrive.addEventListener("click", ()=> {
    let date = document.getElementById("date").value;
    if(date == "") {
        Swal.fire({
            title: "Gracias por tu interes",
            text: "Por favor selecciona una fecha para agendar tu prueba de manejo.",
            icon: "warning",
            confirmButtonText: "Seleccionar",
            background: "#191613",
            backdrop: false,
            timer: 10000,
            timerProgressBar: true,
        })
    }
    else if (date != "") {
        Swal.fire({
            title: "Gracias por tu interes",
            text: `Tu prueba de manejo fue agendada exitosamente para el dia ${date}`,
            icon: "success",
            confirmButtonText: "Seleccionar",
            background: "#191613",
            backdrop: false,
            timer: 10000,
            timerProgressBar: true,
            footer: '<h5 class="text-center">No olvides traer tu licencia de conduccion y tu documento de identidad</h5>'
        })
    }
});

