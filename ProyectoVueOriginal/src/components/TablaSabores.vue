<template>
    <h3 id="pasteleroTablas">Sabores de pan</h3>
    <table class="table" style="width: 50%;">
      <thead>
        <tr>
          <th scope="col">Chocolate</th>
          <th scope="col">Vainilla</th>
          <th scope="col">Fresa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ $store.state.panChocolate }}</td>
          <td>{{ $store.state.panVainilla }}</td>
          <td>{{ $store.state.panFresa }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script></script>