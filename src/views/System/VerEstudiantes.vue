<template>
  <MainLayout>
    <h2>Estudiantes</h2>

    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
    />
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />

    <section class="py-1 bg-blueGray-50">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
          <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-blueGray-700">
                  Page Visits
                </h3>
              </div>
              <div
                class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
              >
                <button
                  class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
          </div>

          <div class="block w-full overflow-x-auto" v-if="existenEstudiantes">
            <table class="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    NOMBRE
                  </th>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    APELLIDO
                  </th>
                  <th
                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    RUT
                  </th>
                </tr>
              </thead>

              <tbody>
                <Estudiantes
                  v-for="estudiante in estudiantes"
                  :key="estudiante.id"
                  :estudiante="estudiante"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer class="relative pt-8 pb-6 mt-16">
        <div class="container mx-auto px-4">
          <div
            class="flex flex-wrap items-center md:justify-between justify-center"
          >
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Made with
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                  >Notus JS</a
                >
                by
                <a
                  href="https://www.creative-tim.com"
                  class="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  Creative Tim</a
                >.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </MainLayout>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import MainLayout from "@/components/layouts/MainLayout.vue";
// Importando el componente de estudiantes
import Estudiantes from "@/components/UI/Estudiantes.vue";

// Variable reactiva para almacenar los datos de los estudiantes
const estudiantes = ref([]);

// Se ejecuta después de que el componente se ha montado
onMounted(() => {
  // Realizar una solicitud GET a la API de estudiantes
  axios
    .get("http://localhost:8080/api/students")
    .then((response) => {
      // Asignar los datos de los estudiantes a la variable estudiantes
      estudiantes.value = response.data;
      // Mostrar los datos en la consola para verificar
      console.log("Datos de los estudiantes:", estudiantes.value);
    })
    .catch((error) => {
      // Capturar y manejar cualquier error en la solicitud
      console.error("Error en la solicitud:", error);
    });
});

// Calcula si existen estudiantes basado en la longitud de la lista de estudiantes
const existenEstudiantes = computed(() => {
  return estudiantes.value.length > 0;
});
</script>
