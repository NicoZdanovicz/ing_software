function validacion() {
 
    // Obtener los valores de los campos de entrada
    var producto = document.getElementById("producto").selectedIndex;
    var local = document.getElementById("local").selectedIndex;
    var marca = document.getElementById("marca").value;
    var peso = document.getElementById("peso").value;
    var precio = document.getElementById("precio").value;

    // Inicializar una variable de estado para controlar si hay errores
    var hayError = false;

    // Limpiar mensajes de error anteriores
    document.getElementById("mensaje-precio").innerHTML = "";
    document.getElementById("mensaje-peso").innerHTML = "";
    document.getElementById("mensaje-marca").innerHTML = "";
    document.getElementById("mensaje-seleccion-prod").innerHTML = "";
    document.getElementById("mensaje-seleccion-local").innerHTML = "";

    // Validar el producto
    if (producto == null || producto.length == 0 || producto == "") {
        document.getElementById("mensaje-seleccion-prod").innerHTML = "⚠️ Debe seleccionar un producto";
        hayError = true;
    }
    // Validar el local
    if (local == null || local.length == 0 || local == "") {
        document.getElementById("mensaje-seleccion-local").innerHTML = "⚠️ Debe seleccionar un local";
        hayError = true;
    }


      // Validar la marca
        if (marca == null || marca.length == 0) {
            document.getElementById("mensaje-marca").innerHTML = "⚠️ Debe escribir una marca";
            hayError = true;
        }
     
    // Validar el peso
    if (peso == null || peso.length == 0) {
        document.getElementById("mensaje-peso").innerHTML = "⚠️ Debe escribir un peso";
        hayError = true;
    }
    // Validar el precio
    if (precio == null || precio.length == 0) {
        document.getElementById("mensaje-precio").innerHTML = "⚠️ Debe escribir un precio";
        hayError = true;
    }

    // Devolver false si hay algún error para evitar el envío del formulario
    return !hayError;
}

// Fetch para cargar los productos desde el archivo JSON
fetch('../DB/productos.json')
    .then((respuesta) => respuesta.json())
    .then((data) => {
        // Llama a la función para poblar el select con los productos cargados
        contenedorProductos(data);
    })
    .catch((error) => {
        console.error('Error al cargar los productos:', error);
    });

// Función para poblar el select con los productos cargados desde el archivo JSON
function contenedorProductos(productos) {
    const selectProducto = document.getElementById('producto');

    // Itera sobre cada producto y crea una opción para cada uno
    productos.forEach((producto) => {
        const option = document.createElement('option');
        option.text = producto.producto;
        selectProducto.add(option);
    });
}

fetch('../DB/local.json')
    .then((respuesta) => respuesta.json())
    .then((data) => {
        // Llama a la función para poblar el select con los productos cargados
        contenedorLocal(data);
    })
    .catch((error) => {
        console.error('Error al cargar los locales:', error);
    });

// Función para poblar el select con los productos cargados desde el archivo JSON
function contenedorLocal(locales) {
    const selectLocal = document.getElementById('local');

    // Itera sobre cada producto y crea una opción para cada uno
    locales.forEach((local) => {
        const option = document.createElement('option');
        option.text = local.local;
        selectLocal.add(option);
    });
}
