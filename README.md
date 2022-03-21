# Funcionamiento general del sitio web

El proyecto consiste en desarrollar una página web con ayuda del framework Vue empleando a su vex Vuex para guardar estados como lo son el llenado del formulario de pedido para, de esta manera, reducir los inventarios conforme varios decorados o sabores son requeridos por los clientes.

Esta página web, además, hace uso del routing de Vue, por lo cual tenemos dos ubicaciones:
- El sitio web del usuario donde este realizará su pedido.
- El sitio web del pastelero desde el cual puede ver los inventarios restantes, así como los pedidos entrantes.

# Página principal para ordenar
En esta ruta tenemos un formulario desde el cual el usuario puede seleccionar de entre una variedad de sabores para su pastel, así como decorados y observar el costo de cada uno de ellos.

![1]

Al finalizar, el cliente podrá llenar un formulario de contacto con su nombre, teléfono, correo y una descripción a detalle de lo que requiere en el pastel que está ordenando, esto con el objetivo de poder entablar una comunicación con él y dar seguimiento a su pedido.

![2]

Al finalizar, el cliente podrá hacer clic en el botón de "Enviar pedido", el cual tomará todo el formulario junto con sus elecciones para llevarlas al panel del pastelero, desde el cual se reducirán los inventarios con base en lo que el cliente eligió, así como mostrar el pedido junto con los datos de contacto.

# Página del pastelero
Desde aquí, una vez llevado a cabo un pedido, el pastelero puede observar cómo sus inventarios se redujeron (Todos se inicializan en 10 para este ejemplo).

![3]

Además, podemos ver el estatus del pedido así como los datos de contacto del cliente y las especificaciones de su pastel.

![4]

Nota: La página no cuenta con validación de entrada, por lo que un cliente podría realizar una órden vacía o introducir datos incorrectos en el formulario de contacto. Queda como tarea a futuro realizar las validaciones correctas para evitar errores del lado del pastelero. Además, el sistema solo es capaz de mostrar un pedido a la vez, por lo que cualquiera que llegue sobreescribirá al anterior.

[1]:/images/1.png
[2]:/images/2.png
[3]:/images/3.png
[4]:/images/4.png
