function agregarProducto() {
    var cuerpo = document.getElementById("cuerpo_tabla");
    var prod = {
        codigo: obtenerValor("codigo"),
        descripcion: obtenerValor("descripcion"),
        precio: obtenerValor("precio"),
        stock: obtenerValor("stock")
    };

    cuerpo.innerHTML += generarFila(prod);
}
function generarFila(prod) {
    return `<tr>
                <td>${prod.codigo}</td>
                <td>${prod.descripcion}</td>
                <td>${prod.precio}</td>
                <td>${prod.stock}</td>
                <td><button onclick="eliminar()">X</button></td>
            </tr>`;
}

function eliminar(){
    console.log("Soy la funcion");
}
function obtenerValor(elementID) {
    return document.getElementById(elementID).value;
}

function cargarProductos() {
    var cuerpo = document.getElementById("cuerpo_tabla");
    var productos = [
        { codigo: 1, descripcion: "Tablet", precio: "15000", stock: "100" },
        { codigo: 2, descripcion: "Celular", precio: "100000", stock: "25" },
        { codigo: 3, descripcion: "Heladera", precio: "150000", stock: "15" },
    ];

    for (var i = 0; i < productos.length; i++) {
        cuerpo.innerHTML += generarFila(productos[i]);
    }
}