
function sumar() {
    let numero1 = parseInt(document.getElementById
        ("numero1").value)
    let numero2 = parseInt(document.getElementById
        ("numero2").value)

    let multipicacion = numero1 * numero2;

    //mostrar el resultado

    document.getElementById("resultado").textContent = " la multiplicacion es " + multipicacion;

}