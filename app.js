var i = 0;
var j = 0;

document.getElementById("btn").addEventListener("click", e => {
  if (document.getElementById("tipo").value === "ingreso") {
    i = i + 1;
    
    var nameid = 'elemento' + i;
    var div1 = document.createElement('div');
    div1.className = 'elemento limpiarEstilos';
    div1.id = nameid;
    document.getElementById('lista-ingresos').appendChild(div1);
  
    var descripcion = document.getElementById('descripcion').value;
  
    var div = document.createElement('div');
    div.className = 'elemento_descripcion';
    div.innerHTML = descripcion;
    div1.appendChild(div);
  
    var nameid2 = 'cantidad' + i;
  
    var div2 = document.createElement('div');
    div2.className = "derecha limpiarEstilos";
    div2.id = nameid2;
    div1.appendChild(div2);
  
    var div3 = document.createElement('div');
    div3.className = "elemento_valor";
    div3.innerHTML = document.getElementById("valor").value;
    div2.appendChild(div3);
  
    var nameid3 = 'eliminar' + i;
    var div4 = document.createElement('div');
    div4.className = "elemento_eliminar";
    div4.id = nameid3;
    div2.appendChild(div4);
  
    var boton = document.createElement("button");
    boton.textContent = "x";
    boton.className = "elemento_eliminar--btn";
    div4.appendChild(boton);
  } else if (document.getElementById("tipo").value === "egreso") {
    j = j + 1;

    var nameid = 'elemento' + j;
    var div1 = document.createElement('div');
    div1.className = 'elemento limpiarEstilos';
    div1.id = nameid;
    document.getElementById('lista-egresos').appendChild(div1);

    var descripcion = document.getElementById('descripcion').value;

    var div = document.createElement('div');
    div.className = 'elemento_descripcion';
    div.innerHTML = descripcion;
    div1.appendChild(div);

    var nameid2 = 'cantidad' + j;

    var div2 = document.createElement('div');
    div2.className = "derecha limpiarEstilos";
    div2.id = nameid2;
    div1.appendChild(div2);

    var div3 = document.createElement('div');
    div3.className = "elemento_valor";
    div3.innerHTML = document.getElementById("valor").value;
    div2.appendChild(div3);

    var nameid3 = 'eliminar' + j;
    var div4 = document.createElement('div');
    div4.className = "elemento_eliminar";
    div4.id = nameid3;
    div2.appendChild(div4);

    var boton = document.createElement("button");
    boton.textContent = "x";
    boton.className = "elemento_eliminar--btn";
    div4.appendChild(boton);
  }
  cargarCabecero();
});

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("elemento_eliminar--btn")) {
    var elementoEliminar = event.target.parentNode.parentNode.parentNode;
    var listaPadre = elementoEliminar.parentNode;
    listaPadre.removeChild(elementoEliminar);
    cargarCabecero();
  }
});

function cargarCabecero() {
  var presupuesto = totalIngresos() - totalEgresos();
  var porcentajeEgreso = totalEgresos() / totalIngresos();
  var totalIngresosValor = formatoMoneda(totalIngresos());
  document.getElementById('presupuesto_ingreso--valor').textContent = totalIngresosValor;
  var totalEgresosValor = formatoMoneda(totalEgresos());
  document.getElementById('presupuesto_egreso--valor').textContent = totalEgresosValor;

  var presupuestoFormateado = formatoMoneda(presupuesto);
  var presupuestoValorElemento = document.querySelector('.presupuesto_valor');
  var porcentajeEgresoElemento = document.getElementById('porcentaje_egreso');
  presupuestoValorElemento.innerHTML = presupuestoFormateado;
  var porcentajeEgreso = totalEgresos() / totalIngresos();
  var porcentajeEgresoElemento = document.getElementById('porcentaje_egreso'); 
  document.getElementById('porcentaje_egreso').textContent = formatoPorcentaje(porcentajeEgreso);
  porcentajeEgresoElemento.textContent = formatoPorcentaje(porcentajeEgreso);
}

function totalIngresos() {
  var totalIngresos = 0;
  var ingresos = document.getElementById('lista-ingresos').getElementsByClassName('elemento_valor');

  for (var i = 0; i < ingresos.length; i++) {
    totalIngresos += parseFloat(ingresos[i].innerHTML);
  }

  return totalIngresos;
}

function totalEgresos() {
  var totalEgresos = 0;
  var egresos = document.getElementById('lista-egresos').getElementsByClassName('elemento_valor');

  for (var i = 0; i < egresos.length; i++) {
    totalEgresos += parseFloat(egresos[i].innerHTML);
  }

  return totalEgresos;
}

function formatoMoneda(valor) {
  return valor.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
}

function formatoPorcentaje(valor) {
  return (valor * 100).toFixed(2) + '%';
}

cargarCabecero();
