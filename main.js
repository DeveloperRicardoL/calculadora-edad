import moment from "moment";
const fechaCumple = document.querySelector("#fecha_cumple");
const boton = document.querySelector("#boton_cumple");
const resultado = document.querySelector("#resultado");

function calcularEdad(fecha) {
  const fechaActual = moment();
  const fecha_cumple = moment(fecha, "YYYY-MM-DD");

  const edad = fechaActual.diff(fecha_cumple, "years");
  return edad;
}

boton.addEventListener("click", () => {
  console.log(calcularEdad(fechaCumple.value));
  resultado.innerText = calcularEdad(fechaCumple.value);
});
