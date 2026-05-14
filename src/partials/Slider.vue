<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import PopUp from '../partials/PopUp.vue'
import fetchProducts from '../fetchProducts'


const products = ref([]);
const isReady = ref(false);

const activeProduct = ref("none");

function activateProduct(object) {
  activeProduct.value = object;
}
const popUp = ref(0)
const filter = ref(false)

const activatePopUp = (index) => {

    if(popUp.value == 0){
        popUp.value = index
    } else {
        popUp.value = 0
    }
    
}



const breakpoints = {
    500:{
          // 500px and up
          itemsToShow: 1,
          snapAlign: 'center',
        }
        ,
        800: {
          // 700px and up
        itemsToShow: 3,
        snapAlign: 'center',
      },
      1024: {
          // 1024 and up
        itemsToShow: 4,
        snapAlign: 'start',
      }
    }


onMounted(async()=>{
    products.value = await fetchProducts().then((isReady.value = true));
    console.log(products.value);
})
</script>

<template>
    <div class="slider">
        <div class="slider-container">
            <PopUp v-if="activeProduct != 'none'" :product="activeProduct" @activate-pop-up="activateProduct"  />

            <Carousel  
                class="carousel-container" 
                :class="filter ? 'filter':'no-filter'"
                :wrap-around="true" 
                :breakpoints="breakpoints"
                :autoplay="1500"
                >
                <Slide v-for="(key,index) in products" :key="index">

                    <div class="normal" @click="activateProduct(key)">

                        <div class="card">
                            <div class="img">
                                <img :src="`/img/products/${key.img}`" :alt="key.name">

                            </div>
                            <div class="card-body">
                                <p class="card-title">Saco de {{ key.weight }}</p>
                                <h3 class="card-title">{{ key.type }} {{ key.name }}</h3>
                            </div>
                        </div>


                    </div>

                </Slide>
                <template #addons>
                    <Pagination />
                </template>

            </Carousel>


        </div>
    </div>
</template>

<style scoped>
.fixed{
    position: fixed;
    z-index: 100 ;
}
.filter{
    filter: blur(5px);
}
.slider-container {
    /* display: flex;
    justify-content: center;
    overflow: hidden; */
    width: 100%;
}
.normal{
    cursor: pointer;
}
.carousel-container {
    width: 95%;
}

.card {
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center
}

.card .img {
    height: 350px;
    width: 100%;
    display: flex;
}

.card img {
    width: 100%;
    filter: drop-shadow(10px 15px 10px rgba(0, 0, 0, 0.4));
}


.card-title{
    font-size: 17px;
}

.normal {
    display: flex;
}

</style>

