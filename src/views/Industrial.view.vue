<script setup>
import ProductCard from "../partials/ProductCard.vue";
import PopUp from "../partials/PopUp.vue";
import BG1 from "../components/svgComponents/BG-1.vue";

import WhatsappButton from "../components/WhatsappButton.vue";

import { onMounted, ref } from "vue";
import fetchProducts from "../fetchProducts";

const products = ref([]);
const isReady = ref(false);
const popUp = ref(0);

const activeProduct = ref("none");

function activateProduct(object) {
  activeProduct.value = object;
}
onMounted(async () => {
  products.value = await fetchProducts().then((isReady.value = true));
});
</script>

<template>
  <PopUp
    v-if="activeProduct != 'none'"
    :product="activeProduct"
    @activate-pop-up="activateProduct"
  />

  <WhatsappButton />

  <div class="navbar-adjust"></div>

  <div class="industrial">
    <h1 class="white-text">Productos Industriales</h1>

    <div class="grid-container">
      <div class="products" v-if="isReady">
        <ProductCard
          v-for="key in products"
          :key="index"
          :product="key"
          @click="activateProduct(key)"
        />
      </div>
      <div v-else class="spin-container">
        <font-awesome-icon :icon="['fas', 'spinner']" class="spin-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-adjust {
  height: 10vh;
  background: white;
}

.grid-container {
  display: flex;
  justify-content: center;
}

.products {
  display: grid;
  width: 80%;
  grid-template-columns: repeat(
    auto-fill,
    minmax(clamp(100px, 45%, 300px), 1fr)
  );
  gap: 1rem;
  place-items: center;
}

.industrial {
  position: relative;
  z-index: 2;
  padding: 10px;
  background: white;
  min-height: 80vh;
}

h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #30449b;
}

.absolute {
  position: absolute;
  z-index: 1;
}

.bg-container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.spin-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
}
.spin-icon {
  font-size: 100px;
  color: #30449b;
  animation: spin 1.5s infinite ease-in-out;
  transition: 0.3s;
  animation-delay: 0.5s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .products{
      width: 100%;
  }
  h1{
    font-size: 2em;
  }
}
</style>
