<script setup>
import ImageBanner from "../partials/ImageBanner.vue";

import ContactForm from "../components/ContactForm.vue";
import Loading from "./Loading.vue";
import { ref } from "vue";

const active = ref(false);
const loadMessage = ref(false);

function changeNote(note) {
  active.value = !active.value;
}

function loader() {
  loadMessage.value = !loadMessage.value;
}
</script>

<template>
  <div class="contacto">
    <ImageBanner img="contacto" title="Contacto" />

    <div class="content">
      <div class="text-area">
        <h3>
          Estamos aquí para ayudarte. Completa el siguiente formulario para que
          podamos entrar en contacto lo antes posible.
        </h3>
      </div>
      <div class="time-line">
        <div class="frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3924.209568254147!2d-66.82226699740762!3d10.498471916768558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzU2LjMiTiA2NsKwNDknMDkuNyJX!5e0!3m2!1ses!2sus!4v1771860089375!5m2!1ses!2sus"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <header>
            <h2>Almacén Caracas</h2>

            <div class="text-box">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
              <!-- <font-awesome-icon :icon="['fab','whatsapp']"/> -->
              <p>
                Calle Vargas. Galpón F-4 Branza. Boleíta Norte. Caracas 1071.
                Distrito Capital.
              </p>
            </div>
          </header>
        </div>
      </div>
      <div class="time-line">
        <div class="frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.0627138440423!2d-67.95499702496646!3d10.175557989939023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEwJzMyLjAiTiA2N8KwNTcnMDguNyJX!5e0!3m2!1ses!2sus!4v1771860286351!5m2!1ses!2sus"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <header>
            <h2>Almacén Valencia</h2>

            <div class="text-box">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
              <p>
                Zona Industrial Municipal Norte Avenida Este-Oeste número 4
                Parcela No. 133, Galpón # 64-124. Valencia. Estado Carabobo.
              </p>
            </div>
          </header>
        </div>
      </div>
      <section class="form-section">
        <ContactForm class="form" @change-note="changeNote" @loader="loader">
          <template #title>
            <h2>Déjanos un mensaje</h2>
          </template>
        </ContactForm>
      </section>
    </div>
    <Transition name="bounce">
      <div v-if="active" class="send-alert">
        <div class="bg-alert">
          <div class="flex" v-if="loadMessage">
            <h2>El mensaje ha sido enviado exitosamente</h2>
            <button @click="changeNote()">Seguir navegando</button>
          </div>
          <Loading class="load" v-else />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

a {
  text-decoration: none;
  color: #30449b;
  padding-left: 5px;
}

a:hover {
  text-decoration: underline;
}
header {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #30449b;
}

.icon {
  color: #30449b;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

.no-show {
  display: none !important;
}

.send-alert {
  position: fixed;
  top: 0;
  background: rgba(48, 68, 155, 0.4);
  z-index: 50;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bg-alert {
  background: rgba(48, 68, 155, 1);
  color: white !important;
  height: 30%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  min-width: fit-content;
}

.load {
  width: 80%;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-box {
  display: flex;
  align-items: start;
  gap: 10px;
}

.bg-alert h2 {
  text-align: center;
  width: 80%;
  margin-bottom: 10px;
}

.form-section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.form {
  width: 80%;
  padding: 15px;
}

.bg-alert button {
  background: white;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: 400ms;
}

.bg-alert button:hover {
  background: #e3e3e3;
}

.text-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
}

.form-header,
.text-area {
  color: #30449b;
}

.text-area p {
  width: 60%;
  text-align: center;
}

.time-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: fit-content !important;
  gap: 5px;
  margin: 40px 0px;
  position: relative;
}
.time-line .frame {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;
}
.time-line .frame header {
  width: 30%;
}
.frame-glass {
  border: 3px solid #30449b;
  background: rgba(31, 38, 135, 0.75);
  box-shadow: 5px 5px 25px 0px rgba(31, 38, 135, 0.75);
  backdrop-filter: blur(19.5px);
  -webkit-backdrop-filter: blur(19.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.2s all ease-in-out;
  padding: 15px;

  transition: 0.2s;
}

h3 {
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  width: 80%;
}

iframe {
  width: 600px;
  height: 450px;
}

@media (max-width: 1100px) {
  .time-line {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }

  .time-line .frame {
    display: flex;
   flex-direction: column-reverse;
     gap: 10px;
  width: 100%;
  }

  .time-line .frame header {
    width: 90%;
  }

  .form {
    box-shadow: none;
  }

  iframe {
    width: 90vw;
  }

  h3 {
    font-size: 15px;
  }
}
</style>
