<script setup>
import ImageBanner from "../partials/ImageBanner.vue";
import ContactForm from "../components/ContactForm.vue";
import Loading from "./Loading.vue";
import { ref } from "vue";

const active = ref(false);
const loadMessage = ref(false);

function changeNote() {
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

      <div class="time-line-container">
        <div class="time-line">
          <!-- Item 1 -->
          <div class="frame">
            <div class="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3924.209568254147!2d-66.82226699740762!3d10.498471916768558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzU2LjMiTiA2NsKwNDknMDkuNyJX!5e0!3m2!1ses!2sus!4v1771860089375!5m2!1ses!2sus"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/6ZzgBFVReBAcjWG49"
                target="_blank"
                class="map-link"
              >
                Ver en Google Maps
              </a>
            </div>

            <header>
              <h2>Almacén Caracas</h2>
              <div class="text-box">
                <font-awesome-icon
                  :icon="['fas', 'location-dot']"
                  class="icon"
                />
                <p>
                  Calle Vargas. Galpón F-4 Branza. Boleíta Norte. Caracas 1071.
                  Distrito Capital.
                </p>
              </div>
              <div class="button-group">
                <a href="tel:584142665125" target="_blank" class="phone-button">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  <p>Llamar</p>
                </a>
                <a
                  href="http://wa.me/584142665125"
                  target="_blank"
                  class="whatsapp-button"
                >
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  <p>Contactar</p>
                </a>
              </div>
            </header>
          </div>

          <!-- Item 2 -->
          <div class="frame reverse">
            <div class="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.0627138440423!2d-67.95499702496646!3d10.175557989939023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEwJzMyLjAiTiA2N8KwNTcnMDguNyJX!5e0!3m2!1ses!2sus!4v1771860286351!5m2!1ses!2sus"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/ufc3oX7mdVSAfnkdA"
                target="_blank"
                class="map-link"
              >
                Ver en Google Maps
              </a>
            </div>

            <header>
              <h2>Almacén Valencia</h2>
              <div class="text-box">
                <font-awesome-icon
                  :icon="['fas', 'location-dot']"
                  class="icon"
                />
                <p>
                  Zona Industrial Municipal Norte Avenida Este-Oeste número 4
                  Parcela No. 133, Galpón # 64-124. Valencia. Estado Carabobo.
                </p>
              </div>

              <div class="button-group">
                <a href="tel:584142665125" target="_blank" class="phone-button">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  <p>Llamar</p>
                </a>
                <a
                  href="http://wa.me/584142665125"
                  target="_blank"
                  class="whatsapp-button"
                >
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  <p>Contactar</p>
                </a>
              </div>
            </header>
          </div>

          <!-- Item 3 -->
          <div class="frame">
            <div class="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3928.359889205589!2d-69.39507872496793!3d10.069568690039414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA0JzEwLjUiTiA2OcKwMjMnMzMuMCJX!5e0!3m2!1ses!2sve!4v1789493854701!5m2!1ses!2sve"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
              <a
                href="http://google.com/maps/place/10%C2%B004'10.5%22N+69%C2%B023'33.0%22W/@10.0695687,-69.3950787,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.0695687!4d-69.3925038?hl=es&entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                class="map-link"
              >
                Ver en Google Maps
              </a>
            </div>

            <header>
              <h2>Almacén Barquisimeto</h2>
              <div class="text-box">
                <font-awesome-icon
                  :icon="['fas', 'location-dot']"
                  class="icon"
                />
                <p>
                  Avenida Carlos Giffoni con Carrera 1. Local Almacenadora Nueva
                  Segovia. Nro 1. Zona Industrial III. Barquisimeto Estado Lara.
                  Zona Postal 3001
                </p>
              </div>
              <div class="button-group">
                <a href="tel:584142665125" target="_blank" class="phone-button">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  <p>Llamar</p>
                </a>
                <a
                  href="http://wa.me/584142665125"
                  target="_blank"
                  class="whatsapp-button"
                >
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  <p>Contactar</p>
                </a>
              </div>
            </header>
          </div>
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
          <div v-if="loadMessage" class="flex">
            <h2>El mensaje ha sido enviado exitosamente</h2>
            <button @click="changeNote()">Seguir navegando</button>
          </div>
          <Loading v-else class="load" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* 1. Root & Estilos Globales de la Vista */
a {
  text-decoration: none;
  color: #30449b;
  padding-left: 5px;
}

a:hover {
  text-decoration: underline;
}

.no-show {
  display: none !important;
}

/* 2. Sección Principal / Contenido */
.text-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  color: #30449b;
}

.text-area h3 {
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  width: 80%;
}

.text-area p {
  width: 60%;
  text-align: center;
}

/* 3. Time-line y Tarjetas de Ubicación */
.time-line-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 0px;
}

.time-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 50px;
  position: relative;
  margin: 0 auto;
}

/* Fila de 2 columnas centradas */
.time-line .frame {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  width: 100%;
  gap: 30px;
}

/* Inversión de columnas para layout intercalado */
.time-line .frame.reverse .map-box {
  order: 2;
}

.time-line .frame.reverse header {
  order: 1;
}

/* Bloque 1: Mapa */
.time-line .frame .map-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.time-line .frame .map-box iframe {
  width: 100%;
  max-width: 500px;
  height: 350px;
  border-radius: 12px;
}

.time-line .frame .map-link {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: #30449b;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
}

/* Bloque 2: Header / Información */
.time-line .frame header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  color: #30449b;
  width: 100%;
  max-width: 450px;
}

.time-line .frame header .text-box {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.time-line .frame header .icon {
  color: #30449b;
  margin-top: 3px;
}

.time-line .frame header .button-group {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.time-line .frame header .phone-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  padding: 10px 0px;
  background: #30449b;
  color: white;
  width: 50%;
  transition: 0.3s;
}

.time-line .frame header .phone-button:hover {
  box-shadow: 2px 2px 5px #30449b9a;
}

.time-line .frame header .whatsapp-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  padding: 10px 0px;
  background: #02c502;
  color: white;
  width: 50%;
  transition: 0.3s;
}

.time-line .frame header .whatsapp-button:hover {
  box-shadow: 2px 2px 5px #02c50296;
}

/* Estilo Glass opcional si se reutiliza */
.frame-glass {
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(31, 38, 135, 0.75);
  box-shadow: 5px 5px 25px 0px rgba(31, 38, 135, 0.75);
  backdrop-filter: blur(19.5px);
  -webkit-backdrop-filter: blur(19.5px);
  border-radius: 10px;
  padding: 15px;
  transition: 0.2s all ease-in-out;
}

/* 4. Sección Formulario */
.form-section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.form-header {
  color: #30449b;
}

.form {
  width: 80%;
  padding: 15px;
}

/* 5. Modal / Alerta de Envío & Animaciones */
.send-alert {
  position: fixed;
  top: 0;
  left: 0;
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
  padding: 20px;
}

.bg-alert h2 {
  text-align: center;
  width: 80%;
  margin-bottom: 10px;
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

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.load {
  width: 80%;
}

/* Animaciones */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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

/* 6. Media Queries (Responsivo) */
@media (max-width: 1100px) {
  .text-area h3 {
    font-size: 15px;
  }

  .time-line-container {
    padding: 10px 0px;
  }

  .time-line {
    gap: 30px;
  }

  .time-line .frame {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* En móvil el mapa pasa a estar abajo y la info arriba */
  .time-line .frame .map-box,
  .time-line .frame.reverse .map-box {
    order: 2;
    max-width: 100%;
  }

  .time-line .frame header,
  .time-line .frame.reverse header {
    order: 1;
    max-width: 90%;
  }

  .time-line .frame .map-box iframe {
    width: 95vw;
    height: 300px;
  }

  .time-line .frame .map-link {
    right: 15px;
  }

  .form {
    box-shadow: none;
  }
}
</style>