<template>
    <nav class="bg-white p-6 flex items-center justify-between navbar ">
        <div class="relative">
            <button @click="dropdownOpen = !dropdownOpen" class="bg-white px-4 py-2 rounded flex items-center">
                <img src="../../assets/images/arabic.png" alt="Language" class="w-6 h-6 mr-2">
                <img src="../../assets/images/dropdown-tringle.png" alt="Your Image" class="">
            </button>
            <div v-show="dropdownOpen" class="absolute right-0 mt-2 w-28 bg-white rounded-md overflow-hidden shadow-lg">
                <a href="/en" class="block px-4 py-2 hover:bg-blue-500 flex justify-center dropdown-item">
                    <span class="flex items-center language-dropdown">
                        <img src="../../assets/images/english.png" alt="English" class="w-6 h-6 mr-2">
                        English
                    </span>
                </a>
            </div>
        </div>
        <div class="flex items-center ml-auto">
            <ul class="flex space-x-20">
  <li><a href="#section1" class="text-white titles whitespace-nowrap">إتصل بنا</a></li>
  <li><a href="#section2" class="text-white titles">الشهادات</a></li>
  <li><router-link :to="{name: 'LandingAr' , hash: '#section3'}" class="text-white titles whitespace-nowrap">حول الشاي</router-link></li>
  <li class="mr-20"><a href="" class="text-white selected">الرئيسية</a></li>
  <!-- Add more links as needed -->
</ul>
<a href="/">
<img src="../../assets/images/logo.png" alt="Logo" class="h-14 ml-48">
</a>

        </div>
    </nav>
</template>


<script setup>

import { ref } from 'vue';
const dropdownOpen = ref(false);
</script>



<style scoped>

template {
    direction: ltr;
}

.navbar {
  margin-right: 100px;
  margin-right: 100px;
  height: 95px;
}
.titles {
  color: rgba(49, 49, 49, 0.75);
  text-align: center;
  font-family: 'Cairo';
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
  transition:  0.3s ease;
}

li {
  width: 80px; /* Adjust this value as needed */
}

.selected {
    color: #D5A848;
text-align: center;
font-family: 'Cairo';
font-size: 20px;
font-weight: 700;
line-height: normal;
}

.titles:hover {
color: #D5A848;
text-align: center;
font-family: 'Cairo';
font-size: 20px;
font-weight: 600;

}


.dropdown-item:hover {
  background-color: white;


}

.language-dropdown {
  color: #313131cb;
  text-align: center;
  font-family: 'Cairo';
  /* font-size: 20px; */
  font-weight: 400;
}

</style>
