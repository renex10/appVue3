<template>
  <div class="container w-full h-full grid">
    <div class="grid grid-cols-5">
      <div class="col-span-1">
        <sidebar></sidebar>
      </div>
      <div class="col-span-4 flex justify-center ">
        <div class=" mt-4 w-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import auxbar from "../navigation/auxbar.vue";
import sidebar from '../sidebar/sidebar.vue';
</script>

<style>
</style>


  
