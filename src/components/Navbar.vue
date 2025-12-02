<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import  router  from '../router.js';

const navStatus = ref('close')
const navFull = ref('nav-close')
const responsiveNavDetail = ref('deactivate-details')

const navChange = () => {
    navStatus.value === 'close' ? navStatus.value = 'open' : navStatus.value = 'close'
    navFull.value === 'nav-close' ? navFull.value = 'nav-open' : navFull.value = 'nav-close'

}
const showDetails = () => {
    responsiveNavDetail.value === 'deactivate-details' ? responsiveNavDetail.value = 'activate-details' : responsiveNavDetail.value = 'deactivate-details'
}

const send = () => {
    // if()
    // router.go()
}
</script>

<template>
    <nav>
        <div class="normal-nav">
            <div class="left-side">

                <ul>
                    <li>
                        <router-link to="/">

                            <img src="/img/logo.png" alt="branza-logo" class="logo" @click="send()" />
                            <!-- <img src="../assets/img/LOGO MOTION GRAPHIC.gif" alt="branza-logo" class="logo" /> -->
                        </router-link>
                    </li>

                    <li class="hover hover-underline-animation">
                        <div class="nav-heading">
                            Productos
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </div>

                        <div class="dropdown-content">

                            <router-link to="/industrial">Industrial</router-link>
                            <router-link to="/consumo-masivo">Consumo Masivo</router-link>


                        </div>

                    </li>

                    <li class="hover hover-underline-animation">

                        <router-link to="/nosotros">
                            <div class="nav-heading">
                                Sobre Nosotros
                                <font-awesome-icon :icon="['fas', 'angle-down']" />
                            </div>
                        </router-link>


                    </li>

                   

                    <li class="hover hover-underline-animation">
                        <router-link to="/contacto">
                            <div class="nav-heading">
                                Contacto
                                <font-awesome-icon :icon="['fas', 'angle-down']" />
                            </div>
                        </router-link>


                    </li>

                </ul>

            </div>

            <div class="right-side">
                <form>
                    <button @click="send">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                    <input type="text" placeholder="Buscar"  />
                </form>
                <div>
                    <p @click="send">
                        Siguenos en:
                        <a href="https://www.facebook.com/branzafoods/" target="_blank" class="socials">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>

                        <a href="https://www.instagram.com/branzafoods" target="_blank" class="socials">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a href="https://www.x.com/branzafoods" target="_blank"
                            class="socials">
                            <font-awesome-icon :icon="['fab', 'x-twitter']" />
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!-- **************** -->

        <div class="responsive-nav">
            <div @click="navChange" id="nav-icon1" :class="navStatus">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="navigate" :class="navFull">
                <div class="nav-item no-pointer">

                </div>

                <router-link to="/" class="nav-item" @click="navChange">

                    <img src="/img/logo.png" alt="branza-logo" class="logo" />
                </router-link>

                <div class="nav-item" @click="showDetails()">
                    Productos
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                </div>


                <div class="transition">
                    <div class="sub" :class="responsiveNavDetail">
                        <router-link to="/industrial" class="nav-item" @click="navChange">Industrial</router-link>
                        <router-link to="/consumo-masivo" class="nav-item" @click="navChange">Consumo Masivo</router-link>
                    </div>

                </div>



                <router-link to="/nosotros" class="nav-item" @click="navChange">

                    Sobre Nosotros
                    <font-awesome-icon :icon="['fas', 'angle-down']" />

                </router-link>



                <router-link to="/contacto" class="nav-item" @click="navChange">
                    Contacto
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                </router-link>



                <div class="nav-heading">
                    <a href="https://www.facebook.com/branzafoods/" target="_blank" class="socials">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" class="icons"/>
                    </a>

                    <a href="https://www.instagram.com/branzafoods" target="_blank" class="socials">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="icons"/>

                    </a>

                    <a href="https://www.x.com/branzafoods" target="_blank"
                        class="socials">
                        <font-awesome-icon :icon="['fab', 'x-twitter']" class="icons"/>
                    </a>
                </div>


            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    color: #273294  !important;
    position: fixed;
    z-index: 50;
    width: 98%;

}
a, a:visited{
    color: #273294  ;

}

.normal-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    width: 100%;
    background: white;

}

.transparent {
    background: transparent !important;
}


a {
    text-decoration: none;
}

.left-side {
    display: flex;
    gap: 20px;
    width: 60%;

}


ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    list-style: none;
    gap: 10px;
    transition: 0.5s;

}

ul .hover {
    color: #273294;
    display: inline-block;
    position: relative;
}

.nav- ul .hover:hover {
    color: #070f53;


}

img {
    min-width: 100px;
    min-height: 50px;
    max-width: 100px;
    max-height: 50px;
}

.hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.nav-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
}


.right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
}

form {
    background: #f5f5f5;
    color: #a2a2a2;
    padding: 5px;
    border-radius: 10px;
    width: 50%;

}

form button {
    background: none;
    border: none;
}

form button:hover {
    color: #6a6a6a;
}

input[type="text"] {
    padding: 0 5px;
    border: none;
    background: #f5f5f5;
    width: 80%;

}

input[type="text"]:focus {
    border: none;
}


p {

    color: #273294;
}


p a {
    padding: 0 10px;
    text-decoration: none;
    color: #273294;
}

p a:hover {
    color: #070f53;
}

.dropdown {
    position: fixed;

}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #30449b;
    min-width: 160px;
    width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 20;
    border-radius: 8px;
}

.dropdown-content a {
    color: white;
    padding: 10px 15px;
    transition: all 0.3s;

    text-decoration: none;
    display: block;
}


.dropdown-content a:hover {
    background-color: #2a3982;
    border-radius: 8px;


}

.hover:hover .dropdown-content {
    display: block;
}

.flex-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}





#nav-icon1 {
    display: none;
    position: fixed;
    top: 10px;

    z-index: 20;
    width: 50px;
    height: 50px;
    padding: 5px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;

}

#nav-icon1 span {
    display: block;
    position: absolute;

    height: 7px;
    width: 50px;
    border: 1px solid #fff9f3ff;
    background: #30449b;
    border-radius: 9px;
    opacity: 1;
    left: 10px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    z-index: 99;
}

#nav-icon1 span:nth-child(1) {
    top: 0px;
}

#nav-icon1 span:nth-child(2) {
    top: 18px;
}

#nav-icon1 span:nth-child(3) {
    top: 36px;
}


#nav-icon1.open span:nth-child(1) {
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
}

#nav-icon1.open span:nth-child(3) {
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}

.responsive-nav {
    margin: 0px;
    display: none;



}

.responsive-nav .navigate {
    display: flex;
    flex-direction: column;

    background: #fff9f3ff;
    width: 100vw;
    height: 100vh;
    transition: all 0.5s ease-out;
}

.nav-close {
    transform: translateX(-1000px);

}

.responsive-nav .navigate .nav-item {
    height: 80px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-out;
}

.responsive-nav .navigate .nav-item:hover {
    background: rgb(187, 170, 154);

}

.responsive-socials {
    display: none !important;

}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sub {
    height: 0px;
    overflow: hidden;
    transition: all 0.5s;
    background: white;

}

.activate-details {
    height: fit-content;

}

.no-pointer {
    cursor: context-menu;
}

.socials .icons {
    width: 25px;
    height: 25px;
    padding: 15px;
    border-radius: 15px;
    transition: 0.4s ease-in-out;
    color: #30449b;
}

.socials .icons:hover {
    background: #33baed;   

}


@media (max-width: 1100px) {

    nav {
        justify-content: center;
        width: 0%;
    }

    .normal-nav {
        display: none;
    }

    #nav-icon1 {
        display: block;
    }

    .nav-close {
        transform: translateX(-2000px);
        background: transparent !important;
    }


    form {
        display: none;
    }

    .right-side {
        display: none;
    }

    .responsive-nav {
        display: block;
        width: 0%;
    }


}


@media screen and (min-width: 1980px) {
    nav{
        width: 100%;
    }
}
</style>

