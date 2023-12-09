<template>
    <div class="more">
        <h1 class="title">{{ content.landingPage.moreTitle }}</h1>
        <div class="underline-bar"></div>
        <p class="paragraph">{{ content.landingPage.moreParagraph }}</p>
    </div>
    <!-- <div class="more-image">
    </div> -->
</template>

<script setup>

import content from '../../content/ar.js'



</script>

<style scoped>
.more {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 97vw;
    width: 100%;
    align-items: center;
    background-image: url('../../assets/images/ar/more-bg.jpg');
    background-position: center;
    background-size: cover;
    position: relative;
  overflow: hidden; 
}


.title {
    margin-top: 11vw;
    color: rgba(49, 49, 49, 0.98);
    text-align: right;
    font-family: Readex Pro Variable;
    font-size: 4.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1vw;
    border-bottom: 2vw solid #D5A848; /* 2 pixels thick, red underline */
    padding-bottom: 0.4vw; /* 5 pix

    /* 142.305% */
}

.paragraph {
    background: linear-gradient(250deg, rgba(49, 49, 49, 0.81) 26.5%, rgba(49, 49, 49, 0.64) 72.96%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Readex Pro Variable;
    font-size: 1.9vw;
    font-style: normal;
    font-weight: 500;
    line-height: 3.6vw;
    width: 50vw;
    flex-shrink: 0;
    text-align: center;
    margin-top: 2vw;
}



.more-image {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 54vw;
    background-position: center;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-image: url('../../assets/images/ar/more-picture.jpg');
    background-size: cover;
}




</style>
