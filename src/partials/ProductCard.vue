<script setup>
const params = defineProps(["product"]);
const parsedProduct = params.product;
</script>

<template>
  <div class="card">
    <img
      v-if="parsedProduct.name == 'Adecoagro'"
      :src="`/img/products/${parsedProduct.img}`"
      :alt="parsedProduct.name"
    />
    <img
      v-else-if="parsedProduct.name == 'Formidable'"
      :src="`/img/products/${parsedProduct.img}`"
      :alt="parsedProduct.name"
    />
    <img
      v-else
      :src="`/img/products/${parsedProduct.img}`"
      :alt="parsedProduct.name"
    />

    <div class="card-text">
      <h1>{{ parsedProduct.type }} <br>Marca {{ parsedProduct.name }}</h1>
      <button>Ver más</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  border: 3px solid #30449b;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 5px 25px 0px rgba(31, 38, 135, 0.75);
  backdrop-filter: blur(19.5px);
  -webkit-backdrop-filter: blur(19.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.2s all ease-in-out;
  padding: 15px;
  width: 280px;
  height: 400px;
  transition: 0.2s;
}
.card:hover {
  transform: translate(-5px, -5px);
}
.card .card-text {
  display: flex;
  flex-direction: column;
  text-align: center;
}
h1 {
  color: #30449b;
  font-size: 16pt;
}
.card img {
  height: 250px;
  padding: 15px 0px;
}
.adecoagro {
  width: 225px !important;
}
.formidable {
  width: 150px !important;
}
button {
  border: none;
  background: #30449b;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 5px;
}
button:hover {
  background: #192753;
}

@media (max-width: 768px) {
  .card {
    width: 140px;
    height: 260px;
  }
  .card:hover{
    transform: translate(0px,0px);
  }
  .card img {
    height: 130px !important;
  }
  .card .text{
    text-align: start !important;
  }
  h1{
    font-size: 12pt;
  }
}
</style>
