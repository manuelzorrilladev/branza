<script setup>
import { ref } from "vue";
import ProductsList from '../products-small.json'

const product = defineProps(["product"])
const parsedProduct = ProductsList[product.product]
</script>

<template>
    <div class="card">

        <div class="img">
            <img :src="`/img/products/${parsedProduct.img}`" :alt="parsedProduct.name">
        </div>
        
        <div class="card-text">
            <h1>
                 {{ parsedProduct.name }}
            </h1>
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
    background: rgba(255, 255, 255, .8);

    box-shadow: 5px 5px 25px 0px rgba(31,38,135,0.75);
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
.card:hover{
    transform: translate(-5px, -5px);
}
.img{
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card .card-text{
    display: flex;
    flex-direction: column;
    text-align: center;

}
h1{
    color: #30449b;
    font-size: 16pt;
}
.card img {
    width: 170px;
    padding: 15px 0px;
}
.adecoagro{
    width: 225px !important;
}
.formidable{
    
    width: 150px !important;
}
button{
    border: none;
    background: #30449b;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    transition: 0.3s;
    margin-top: 5px;
}
button:hover{
    background: #192753;
}

</style>

