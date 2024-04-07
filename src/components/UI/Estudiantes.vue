<template>
    <tr>
      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
        {{ estudiante.name }}
      </th>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {{ estudiante.lastName }}  </td>
      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {{ estudiante.dni }}
      </td>
    </tr>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Define the prop "estudiante" with the correct type
  defineProps({
    estudiante: {
      type: Object,
      required: true, // You can set this to true if the prop is required
    },
  });
  </script>