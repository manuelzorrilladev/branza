<script setup>
import { ref, watch } from "vue";

import ProductsList from '../products-small.json'

const emit = defineEmits(['activate-pop-up'])
const product = defineProps(["product"])

const referenceProduct = ref(product.product)
const showClass = ref("show")

let parsedProduct = ProductsList[product.product]

const emitPopUp = () => {
    emit('activate-pop-up', 0)
}

watch(product, () => {
    referenceProduct.value = product.product
    parsedProduct = ProductsList[product.product]
})
</script>

<template>
    <div v-if="referenceProduct != 0" class="container">
        <div class="pop-up-card">
            <div class="card">
                <div class="info">

                    <div class="img-side desktop-only">

                        <img :src="`/img/products/${parsedProduct.img}`" :alt="parsedProduct.name" class="product-img">

                        <div class="share-container">
                            <h4>Compartir en:</h4>

                            <div class="share-links">
                                <a href="https://www.facebook.com/branzafoods/" target="_blank" class="share-button">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="share-icons" />
                                </a>

                                <a href="https://www.instagram.com/branzafoods" target="_blank" class="share-button">
                                    <font-awesome-icon :icon="['fab', 'instagram']" class="share-icons" />

                                </a>

                                <a href="https://www.x.com/branzafoods" target="_blank" class="share-button">
                                    <font-awesome-icon :icon="['fab', 'x-twitter']" class="share-icons" />
                                </a>
                            </div>

                        </div>

                    </div>

                    <div class="text-side">
                        <div class="close">
                            <font-awesome-icon @click="emitPopUp" :icon="['fas', 'xmark']" class="close" />
                        </div>

                        <h1 class="title">{{ parsedProduct.name }}</h1>
                        <div class="img-side mobile-only">

                            <img :src="`/img/products/${parsedProduct.img}`" :alt="parsedProduct.name" class="product-img">

                            <div class="share-container">
                                <h4>Compartir en:</h4>

                                <div class="share-links">
                                    <a href="https://www.facebook.com/branzafoods/" target="_blank" class="share-button">
                                        <font-awesome-icon :icon="['fab', 'facebook-f']" class="share-icons" />
                                    </a>

                                    <a href="https://www.instagram.com/branzafoods" target="_blank" class="share-button">
                                        <font-awesome-icon :icon="['fab', 'instagram']" class="share-icons" />

                                    </a>

                                    <a href="https://www.x.com/branzafoods" target="_blank" class="share-button">
                                        <font-awesome-icon :icon="['fab', 'x-twitter']" class="share-icons" />
                                    </a>
                                </div>

                            </div>

                        </div>
                        <ul>
                            <li>
                                <img src="/img/icono-2.png" alt="icono" class="icon-img">
                                <div class="line-text">
                                    <h2><strong> Descripción: </strong></h2>
                                    <h3>{{parsedProduct.description}}</h3>
                                </div>
                           </li>


                            <li>
                                <img src="/img/icono-1.png" alt="icono" class="icon-img">
                                <div class="line-text">
                                    <h2><strong> Características: </strong></h2>
                                    <h3>{{ parsedProduct.type }}</h3>
                                </div>
                            </li>

                            <li>
                                <img src="/img/icono-3.png" alt="icono" class="icon-img">
                                <div class="line-text">
                                    <h2><strong> País: </strong></h2>
                                    <img :src="`/img/${parsedProduct.icon}`" alt="icono" class="icon-img">
                                </div>
                            </li>


                            <li class="socials">
                                <a href="https://wa.me/584142665125" class="green button">
                                    Contacta para Comprar <font-awesome-icon :icon="['fab', 'whatsapp']" />

                                </a>
                                <button @click="emitPopUp" class="blue button">
                                    Volver
                                    <font-awesome-icon :icon="['fas', 'backward']" />
                                </button>


                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer">
                <img src="/img/logo-blanco.png" alt="branza-logo">
                <h5>Branza &#8482; - Todos los derechos reservados</h5>
            </div>
        </div>
    </div>
</template>

<style scoped>


.mobile-only{
    display: none !important;
}
.pop-up-card {
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    border: 1px solid #bababa;
    padding: 20px 50px;
    border-radius: 15px;
}


.card .info {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #30449b;
}


.img-side {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

}

.img-side .product-img {
    filter: drop-shadow(10px 15px 20px rgba(0, 0, 0, 0.7));
    max-width: 300px;
    min-width: 300px;
}

.share-container {
    width: 100%;
    height: 1%;
}

.share-container h4 {
    text-align: center;
}

.share-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.share-button {
    height: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.4s ease-in-out;
    color: #30449b;
    cursor: pointer;
    background: #f0f0f0;
    padding: 10px 20px;
}

.share-button:hover {

    background: #30449b;
    color: white;
}

.card .info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #30449b;

}


.title {
    border-radius: 15px;
    line-height: 48px;
    padding: 10px 0px 10px 0px !important;

}

.text-side {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}


h1 {
    font-size: 30pt;
    font-weight: 900;
    text-align: center;

}

h2 {
    font-size: 15pt;
}

h3 {
    font-size: 10pt;
    font-weight: 400;
}


.text-side ul li {
    font-size: 14pt;
    font-weight: 400;
    list-style-type: none;
    padding: 3px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0px;
}

.socials {
    flex-direction: column;
    width: 100%;
}

.icon-img {
    width: 50px;
    height: 50px;
}

ul {
    width: 100%;
}

strong {
    font-weight: 900;
}







.button {
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.4s ease-in-out;
    color: #30449b;
    cursor: pointer;
    background: #f0f0f0;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-decoration: none;
    font-size: medium;
}

.button:hover {
    background: #30449b;
    color: white;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    cursor: pointer;
    color: white;
}

.close:hover {
    color: #30449b;
}

.active {
    display: block;
}


.show {
    display: block;
}

.country {
    width: 20px;
}

.none {
    display: none;
}

button {
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.4s ease-in-out;
    color: #30449b;
    cursor: pointer;
}

button:hover {
    background: #30449b;
    color: white;
}

.footer {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #30449b;
    color: white;
    padding: 5px;
    gap: 10px;
    z-index: 50;
    bottom: 0;
    left: 0;
    width: 100%;

}

.footer img {
    width: 100px;
    height: 50px;
}

@media (min-width: 2000px) {
    .img-side .product-img {
        max-width: 500px;
        min-width: 500px;
    }

    .text-side ul li {
        margin: 40px 0px;
    }

    .footer h5 {
        font-size: 20pt
    }

    .footer img {
        width: 150px;
        height: 75px;
    }

    .share-button {
        height: 35px;

    }

    .button {
        font-size: 15pt;
    }

    .share-icons {
        font-size: 35px;
    }

    h1 {
        font-size: 60pt;

    }

    h2 {
        font-size: 30pt;
    }

    h3 {
        font-size: 20pt;
        font-weight: 400;
    }

    h4 {
        font-size: 20pt;
    }



}


@media (max-width: 1100px) {
    .card-container {
        width: 90%;
    }

    .card-container .info {
        justify-content: space-evenly;
    }

    .title {
        font-size: 30pt !important;
    }

    h2 {
        font-size: 14pt !important;

    }

    h3 {
        font-size: 10pt !important;

    }

    .text-side {
        gap: 0px;
        justify-content: center;
    }

    .text-side ul li {
        margin: 0px;
    }

    .product-img {
        max-width: 180px !important;
        min-width: 180px !important;
    }

    .button {
        font-size: small;
    }

    .product {
        max-width: 15vw !important;
    }

}

@media (max-width: 650px) {
    .desktop-only{
        display: none !important;
    }
    .mobile-only{
    display: flex !important;
        
    }
    .card {
        border: none;

    }

    .card .info {
        flex-direction: column;

    }

    .share-container {
        display: none;
    }

    .text-side {
        width: 100%;
        height: fit-content;
    }

    .icon-img {
        width: 25px;
        height: 25px;
    }

    .button {
        height: 30px;
    }

    .img-side {
        flex-direction: row;
    }




    .title {
        font-size: 20pt !important;
    }


    h2 {
        font-size: 14pt !important;

    }

    h3 {
        font-size: 10pt !important;

    }

    .product-img {
        max-width: 140px !important;
        min-width: 140px !important;
    }
}</style>

