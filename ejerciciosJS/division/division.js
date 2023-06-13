
function sumar() {
    let numero1 = parseFloat(document.getElementById
        ("numero1").value)
    let numero2 = parseFloat(document.getElementById
        ("numero2").value)

    let division = numero1 / numero2;

    //mostrar el resultado

    document.getElementById("resultado").textContent = " la divisioN es " + division;

}