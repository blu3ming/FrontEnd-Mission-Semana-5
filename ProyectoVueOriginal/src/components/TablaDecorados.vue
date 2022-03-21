<template>
    <h3 id="pasteleroTablas">Decorados</h3>
    <div class="table-responsive" style="margin-bottom: 100px;width: 90%;">
      <table class="table" style="width: 90%;">
        <thead>
          <tr>
            <th scope="col">Cerezas</th>
            <th scope="col">Chocolates</th>
            <th scope="col">Duraznos</th>
            <th scope="col">Decorado Chantilly</th>
            <th scope="col">Nueces</th>
            <th scope="col">Fresas</th>
            <th scope="col">Azucar glas</th>
            <th scope="col">Lunetas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ $store.state.cerezas }}</td>
            <td>{{ $store.state.chocolates }}</td>
            <td>{{ $store.state.duraznos }}</td>
            <td>{{ $store.state.chantilly }}</td>
            <td>{{ $store.state.nueces }}</td>
            <td>{{ $store.state.fresas }}</td>
            <td>{{ $store.state.glas }}</td>
            <td>{{ $store.state.lunetas }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script></script>