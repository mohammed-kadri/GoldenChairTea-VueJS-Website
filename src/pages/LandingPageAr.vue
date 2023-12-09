<template>
    <nav class="bg-white p-6 flex items-center justify-between navbar">
        <div class="relative">
            <button @click="dropdownOpen = !dropdownOpen" class="bg-white px-4 py-2 rounded flex items-center">
                <img src="../assets/images/arabic.png" alt="Language" class="w-6 h-6 mr-2 lang">
                <img src="../assets/images/dropdown-tringle.png" alt="" class="lang-tringale">
            </button>
            <div v-show="dropdownOpen" class="absolute right-0 mt-2 w-28 bg-white rounded-md overflow-hidden shadow-lg">
                <a href="/en" class="block px-4 py-2 hover:bg-blue-500 flex justify-center dropdown-item">
                    <span class="flex items-center language-dropdown" style="font-family: Cairo;">
                        <img src="../assets/images/english.png" alt="English" class="w-6 h-6 mr-2">
                        English
                    </span>
                </a>
            </div>
        </div>
        <div class="flex items-center ml-auto">
            <ul class="flex space-x-20">
                <li><a href="#contactus" class="text-white titles whitespace-nowrap">{{ content.landingPage.contactUs }}</a></li>
                <li><a href="#certificates" class="text-white titles">{{ content.landingPage.certificates }}</a></li>
                <li><a href="#details" class="text-white titles whitespace-nowrap">{{ content.landingPage.details }}</a></li>
                <li class="mr-20"><a href="" class="text-white selected">{{ content.landingPage.home }}</a></li>
                <!-- Add more links as needed -->
            </ul>
            <a href="/">
                <img  src="../assets/images/logo.png" alt="Logo" class="h-14 ml-48 logo">
            </a>

        </div>
    </nav>

    <div class="landing">
        <hero />
        <vid />
        <slider id="details" />
        <more />
        <certs id="certificates" />
        <footerSection id="contactus" />
        <!-- Add more HTML here for your Arabic landing page -->
    </div>
</template>

<script setup>
import navbar from '../components/ar/navbar.vue';
import hero from '../components/ar/hero.vue';
import vid from '../components/ar/vid.vue';
import slider from '../components/ar/slider.vue';
import more from '../components/ar/more.vue';
import certs from '../components/ar/certficates.vue'
import footerSection from '../components/ar/footer.vue';
import content from '../content/ar.js'
import { ref } from 'vue';
const dropdownOpen = ref(false);


</script>

<style scoped>
template {
    direction: rtl;
}

/* This will change the scrollbar track color */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #832a2a;
    /* Change this to your desired track color */
}

/* This will change the scrollbar handle color */
::-webkit-scrollbar-thumb {
    background: #e01414;
    /* Change this to your desired handle color */
}

/* Change the scrollbar handle color on hover */
::-webkit-scrollbar-thumb:hover {
    background: #ee3535;
    /* Change this to your desired hover color */
}




template {
    direction: rtl;
}

.navbar {
    margin-left: 6vw;
    margin-right: 5.7vw;
    height: 6vw;

}

.logo {
    height: 3.2vw;
    /* margin-left: 0vw; */
    width: 12vw;
}

.titles {
    color: rgba(49, 49, 49, 0.75);
    text-align: center;
    font-family: 'Readex Pro Variable';
    font-size: 1.25vw;
    font-weight: 300;
    line-height: normal;
    transition: 0.3s ease;
}

.space-x-20 {
    margin-left: 0vw;
    margin-right: 0vw;
}
.lang {
    width: 2.5vw;
    height: 1.9vw;
    margin-right: 0;
    padding-right: 0.5vw;
}

.lang-tringale {
    width: 0.7vw;
    height: 0.6vw;
    padding: 0.07vw;
    margin-left: 0px;
}

.space-x-20 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 6vw;
}

li {
    width: 5vw;
    /* Adjust this value as needed */
}

.ml-48 {
    margin-left: 8vw;
}

.ml-48[data-v-02c6175e] {
    margin-left: 8vw;

}

.selected {
    color: #D5A848;
    text-align: center;
    font-family: 'Readex Pro Variable';
    font-size: 1.25vw;
    font-weight: 700;
    line-height: normal;
}

.titles:hover {
    color: #D5A848;
    text-align: center;
    font-family: 'Readex Pro Variable';
    font-size: 1.25vw;
   

}


.dropdown-item:hover {
    background-color: white;
}

.language-dropdown {
    color: #313131cb;
    text-align: center;
    font-family: 'Readex Pro Variable';
    /* font-size: 20px; */
    font-weight: 400;

}</style>