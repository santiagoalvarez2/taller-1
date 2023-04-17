const ventas = [];

function agregarVenta() {
  const producto = document.getElementById('producto').value;
  const cantidad = document.getElementById('cantidad').value;
  const precio = document.getElementById('Precio').value; 
  const total = cantidad * precio;
  ventas.push({producto, cantidad, precio, total});
  actualizarTablaVentas();
}

function actualizarTablaVentas() {
  const tbody = document.getElementById('ventasBody');
  tbody.innerHTML = '';
  for (let venta of ventas) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${venta.producto}</td>
      <td>${venta.cantidad}</td>
      <td>${venta.precio}</td>
      <td>${venta.total}</td>
    `;
    tbody.appendChild(row);
  }
  actualizarTotal();
}

function actualizarTotal() {
  const total = ventas.reduce((suma, venta) => suma + venta.total, 0);
  const alert = document.getElementById('totalAlert');
  alert.innerText = `Total a pagar: $${total}`;
  alert.style.display = '';
}

