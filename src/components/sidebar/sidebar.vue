<script>
import RouterLink from "@/components/UI/RouterLink.vue";


export default {
  components: {
    RouterLink
  }
};
</script>

<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink to="agregar-estudiante">Agregar estudiante</RouterLink>
        </li>
        <li>
          <RouterLink to="ver-estudiantes">Ver estudiantes</RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped></style>
