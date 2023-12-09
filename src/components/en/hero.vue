<template>
  <section class="hero">
    <div class="hero-content">
        <p class="hero-description">{{ content.landingPage.heroSubtitle }}</p>
        <h1 class="hero-title"> {{ content.landingPage.heroTitleFirstLine }} <div></div> {{ content.landingPage.heroTitleSecondLine }} <span class="bolded-word">{{ content.landingPage.heroBoldedTitleWord }}</span></h1>
        <div class="button-spacer"></div>
        <div class="button-container" @click="scrollToElement('details')">
         
    <button class="hero-button">
      <img src="../../assets/images/ar/cup-icon.png" alt="Button Image" />
    </button>
   <span class="button-text">
                <div class="more-info">{{ content.landingPage.heroButton }}</div></span>
  </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';
import content from '../..//content/en.js'

function scrollToElement(elementId) {
  console.log('scrolling');
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
// const heroSubtitle = ref(content.landingPage.heroSubtitle);

console.log(content.landingPage.heroSubtitle);

</script>

<style scoped>
.hero {
  background-image: url('../../assets/images/en/main-background.jpg');
  background-size: cover;
  background-position: center;
  height: 46vw;
}

.button-spacer {
    height: 3.2vw;
}

.bolded-word {
    color: #D5A848;
font-family: Cairo;
font-size: 5vw;
font-style: normal;
font-weight: 700;

}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 1vw;
  height: 90%;
  margin-left: 6vw;
}

.hero-title {
color: #454544;
text-align: left;
font-family: Cairo;
font-size: 5vw;
font-style: normal;
font-weight: 400;
line-height: 5.2vw; /* 107.812% */
}

.hero-description {
color: rgba(49, 49, 49, 0.5);
text-align: center;
font-family: 'Cairo';
font-size: 1.7vw;
font-style: normal;
font-weight: 200;
margin-left: 0.3vw;
margin-bottom: -0.5vw;
line-height: normal;
}

.hero-button {
  width: 3.78vw; /* Adjust as needed */
  height: 3.78vw; /* Adjust as needed */
  background: transparent;
  border: 0.25vw solid #D5A848; /* Replace #color with your color */
  display: flex;
  align-items: center;
  justify-content: center;
  transition:  0.3s ease;
  margin-left: 0.3vw;
}

.hero-button img {
  transform: scaleX(-1);
padding: 0.5vw 0.3vw 0.5vw 0.5vw;   
}


.button-text {
text-align: center;
font-family: 'Cairo';
font-size: 1.5vw;
font-weight: 500;
line-height: normal;
display: flex;
padding-right: 1.7vw;
padding-left: 1.6vw;
/* padding-top: 13px;
padding-bottom: 13px; */
height: 100%;
background-color: #D5A848;
align-items: center;
color: #fff;
transition:  0.3s ease;
}

.button-container:hover  .button-text {
text-align: center;
font-family: 'Cairo';

font-weight: 500;
line-height: normal;
display: flex;

padding-right: 1.8vw;
padding-right: 1.7vw;
/* padding-top: 13px;
padding-bottom: 13px; */
background-color: #cfa344;
align-items: center;
color: #fff;

}

.button-container:hover {
    box-shadow: 0.2vw 0.3vw 0.2vw rgba(0, 0, 0, 0.1);
    transition:  0.5s ease;
    cursor: pointer;
}

.more-info {
margin-bottom: 0.1vw;
}
.button-container {
display: flex;
margin-top:-0.8vw ;
align-items: flex-start;
justify-content: flex-start;
}
</style>
