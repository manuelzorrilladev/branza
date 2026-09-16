<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const emit = defineEmits(['change-note', 'loader'])

const name = ref('')
const message = ref('')
const email = ref('')
const phone = ref('')
const subject = ref('')


function clearAll() {
    name.value = ""
    message.value = ""
    email.value = ""
    phone.value = ""
    subject.value = ""
}


function sendEmail() {
    emit('change-note')

    emailjs.init("ZW9HU7fRsG4rIrQbu");
    emailjs.send("service_wgvla39", "template_eoolfrn", {
        name: name.value,
        message: message.value,
        email: email.value,
        phone: phone.value,
        subject: subject.value,
    })
        .then(function (response) {
            emit('loader')
            clearAll()
        }, function (error) {
            console.log('FAILED...', error);
        })
      
}




</script>

<template>
    <form action="" class="contact-form">
        <div class="form-header">
            <header>
                <slot name="title">

                </slot>

            </header>

        </div>
        <div class="form">
            <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Nombre" v-model="name">
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
            </div>

            <div class="form-group">
                <input type="text" class="form-control" id="subject" placeholder="Asunto" v-model="subject">
                <input type="text" class="form-control" id="phone" placeholder="Telefono" v-model="phone">
            </div>
            <div class="form-group">
                <textarea class=" textarea" placeholder="Escribe tu mensaje" id="message" v-model="message"></textarea>
            </div>
            <div class="form-group">
                <button type="button" @click="sendEmail">Enviar</button>
            </div>
        </div>
    </form>
</template>

<style scoped>
.form-group {
    margin-top: 10px;
    display: flex;
    gap: 5px;
}

header {
    color: #30449b;
    white-space: nowrap;
}


.form-group .form-control {
    width: 100%;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
    border: none;
    background: #f5f5f5;
}


.textarea {
    width: 100%;
    height: 150px;
    resize: none;
    padding: 5px;
    border-radius: 15px;
    border: none;
    background: #f5f5f5;
    padding: 10px;
}

button {
    padding: 10px 35px;
    border-radius: 10px;
    font-weight: 900;
    background: #30449b;
    border: none;
    color: white;
    transition: 0.5s;
}

button:hover {
    background: #4f66da;
}

@media (max-width: 1100px) {
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
    }

    .form-group {
        flex-direction: column;
    }

    .form-group .form-control {
        width: 90vw;
        margin: 3px 0px;
        height: 45px;
    }

    .textarea {
        max-width: 88vw;
        min-width: 88vw;

    }

    button {
        width: 90vw;
        margin: 3px 0px;
    }
}
</style>

