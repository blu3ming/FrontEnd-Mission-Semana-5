<template>
    <div id="pasteleroTablas">
      Pedido {{ $store.state.noPedido }} <br>
      Nombre: {{ $store.state.nombre }} <br>
      Teléfono: {{ $store.state.numero }} <br>
      Correo: {{ $store.state.correo }} <br>
    </div>
    <div class="table-responsive">
      <table class="table" style="width: 90%;">
        <thead>
          <tr>
            <th scope="col">Sabores</th>
            <th scope="col">Decorados</th>
            <th scope="col">Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ $store.state.saboresPedido }}</td>
            <td>{{ $store.state.decoradosPedido }}</td>
            <td>{{ $store.state.detallesPedido }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br><br>
</template>

<script></script>