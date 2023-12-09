<template>
  <section class="hero">
    <div class="hero-content">
        <p class="hero-description">{{ content.landingPage.heroSubtitle }}</p>
        <h1 class="hero-title"> {{ content.landingPage.heroTitleFirstLine }} <div></div> {{ content.landingPage.heroTitleSecondLine }} <span class="bolded-word">{{ content.landingPage.heroBoldedTitleWord }}</span></h1>
        <div class="button-spacer"></div>
        <div class="button-container" @click="scrollToElement('details')">
            <span class="button-text">
                <div class="more-info">{{ content.landingPage.heroButton }}</div></span>
    <button class="hero-button">
      <img src="../../assets/images/ar/cup-icon.png" alt="Button Image" />
    </button>

  </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';
import content from '../../content/ar.js'

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
  background-image: url('../../assets/images/ar/main-background.jpg');
  background-size: cover;
  background-position: center;
  height: 46vw;
}

.button-spacer {
    height: 3.2vw;
}

.bolded-word {
    color: #D5A848;
font-family: Readex Pro Variable;
font-size: 5vw;
font-style: normal;
font-weight: 700;

}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 1vw;
  height: 90%;
  margin-right: 6vw;
}

.hero-title {
color: #454544;
text-align: right;
font-family: Readex Pro Variable;
font-size: 5vw;
font-style: normal;
font-weight: 400;
line-height: 5.2vw; /* 107.812% */
}

.hero-description {
color: rgba(49, 49, 49, 0.65);
text-align: center;
font-family: 'Readex Pro Variable';
font-size: 1.6vw;
font-style: normal;
font-weight: 200;
margin-right: 0.3vw;
margin-bottom: 0.5vw;
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
  margin-right: 0.3vw;
}

.hero-button img {
padding: 0.5vw 0.3vw 0.5vw 0.5vw;   
}


.button-text {
text-align: center;
font-family: 'Readex Pro Variable';
font-size: 1.4vw;
font-weight: 500;
line-height: normal;
display: flex;
padding-left: 1.8vw;
padding-right: 1.7vw;
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
font-family: 'Readex Pro Variable';

font-weight: 500;
line-height: normal;
display: flex;

padding-left: 1.8vw;
padding-right: 1.7vw;
/* padding-top: 13px;
padding-bottom: 13px; */
height: 100%;
background-color: #cfa344;
align-items: center;
color: #fff;


}

.button-container:hover {
    box-shadow: -0.2vw 0.3vw 0.2vw rgba(0, 0, 0, 0.1);
    transition:  0.5s ease;
    cursor: pointer;
}

.more-info {
margin-bottom: 0.3vw;
}
.button-container {
display: flex;
align-items: center;
}
</style>
