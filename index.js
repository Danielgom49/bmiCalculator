let resultado = document.getElementById('resultado');
let pesoIdeal = document.getElementById('pesoIdeal');
const triangulo = document.querySelector(".triangulo")
function calcular() {
    let sexo = document.getElementById('sexo').value
    let edad = document.getElementById('edad').value
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    // let altCentimetros = altura*100;
    // console.log(altCentimetros);
    let estatura = altura * altura;
    let result = peso / estatura;
    let imc = result.toFixed(2)

    resultado.textContent = imc;
    if (result < 18.5) {
        console.log('bajo peso');
        triangulo.classList.add("bajoPeso")
    }
    if (result >= 18.5 && result <= 29.9) {
        console.log('saludable');
        triangulo.classList.add("saludable")
    }
    if (result >= 30.0 && result <= 39.9) {
        console.log('obeso');
        triangulo.classList.add("excesoPeso")
    }
    if (result > 40) {
        console.log('obesidad extrema');
        triangulo.classList.add("obeso")
    }
    localStorage.setItem('sexo', sexo);
    localStorage.setItem('edad', edad);
    localStorage.setItem('peso', peso);
    localStorage.setItem('altura', altura);
}