function traerNumero(id) {
    return parseFloat(document.getElementById(id).value);
}
function trerOperador() {
  return document.getElementById("menu").value;
}
function Operaciones() {
  let num1 = traerNumero("num1");
  let num2 = traerNumero("num2");
  let resultado;
  if(isNaN(num1)){
    alert("Ingrese solo numeros!");
    return "";
  }else if(isNaN(num2)){
    alert("Ingrese solo numeros!");
    return "";
  }else if(num2===0 && trerOperador()==="division"){
    alert("Ingresar numeros distintos de 0");
    return "";
  }else{
  switch (trerOperador()) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
     resultado = num1 - num2;
      break;
    case "multiplicacion":
     resultado = num1 * num2;
      break;
    case "division":
     resultado = num1 / num2;
      break;
    default:
      break;
  }
  return resultado;
}
}
function mostrarDatos() {
  document.getElementById("resultado").innerHTML = Operaciones();
}
function borrarDatos(){
    document.getElementById("num1").value='';
    document.getElementById("num2").value='';
    document.getElementById("resultado").innerHTML='';
}
