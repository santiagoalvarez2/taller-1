let numeros = [];

function calcularMayorMenor() {
  var numeros = [];
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var num4 = parseInt(document.getElementById("num4").value);

  // Verificar si hay números repetidos
  if (num1 == num2 || num1 == num3 || num1 == num4 || num2 == num3 || num2 == num4 || num3 == num4) {
    alert("No se pueden ingresar números repetidos. Por favor, ingrese cuatro números diferentes.");
    return;
  }

  numeros.push(num1);
  numeros.push(num2);
  numeros.push(num3);
  numeros.push(num4);

  // Ordenar los números de menor a mayor
  numeros.sort(function(a, b){return a - b});

  // Obtener el número mayor y menor
  var mayor = numeros[numeros.length - 1];
  var menor = numeros[0];

  // Eliminar el número mayor del arreglo
  numeros.pop();

  alert("El número mayor es: " + mayor + ", y el número menor es: " + menor + ".\n\nEl arreglo sin el número mayor es: [" + numeros + "]");
}