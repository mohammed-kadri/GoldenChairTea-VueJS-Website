<template>
    <div class="slider">
        <div class="slider-content">

            <div class="top-slider-right">
<div class="slider-right">
  <img src="../../assets/images/ar/slide1.jpg" alt="Slider Image" class="slider-image" :key="currentImage"> 

</div>
            </div>

            <div class="slider-left">
                <div class="slider-title">

                    <h1>{{ content.landingPage.sliderTitleFirstLine }}<br>{{ content.landingPage.sliderTitleSecondLine }}</h1>
                    <span class="title-bar"></span>
                </div>
                <p data-v-88f92089="">{{ content.landingPage.sliderParagraphe }}</p>
            </div>

        </div>
    </div>
</template>



<script setup >

import content from '../..//content/en.js'


</script>

<style scoped>
.slider {
    width: 100%;
    height: 45vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('../../assets/images/en/slider-background.jpg');

    /* Additional styles for the slider div */
}

.slider-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.slider-left {
    color: #fff;
    text-align: left; /* Add this line */
    padding: 1vw 7vw 1vw 11vw;
    flex: 1;
    /* padding: 0px; */
    
    text-align: left; /* Add this line */
}

.slider-right {
 /* Add this line for right border */
 
}

.slider-image {
    height: 31.8vw;
    object-fit: cover; 
    border-right: 0.8vw solid #D5A848;
    /* border-right: 5px solid red; */

}



.slider-left p[data-v-88f92089] {
    text-align: justify;
    text-align-last: left;}
.top-slider-right {
    border-right: 2.8vw solid rgb(255, 255, 255); /* Add this line for right border */
    border-bottom: 3.9vw solid rgb(255, 255, 255); /* Add this line for right border */
}


.slider-left h1 {
  color: rgba(255, 255, 255, 0.95);
  text-align: left;
  font-family: Cairo;
  font-size: 4.5vw;
  font-style: normal;
  font-weight: bold;
  line-height: 5vw; /* 142.305% */
  padding-left: 3vw;
  margin-left: -3.4vw;
  position: relative;
  -webkit-text-stroke: 0.12vw rgba(255, 255, 255, 0.95);
  text-stroke: 0.12vw rgba(255, 255, 255, 0.95);

}
.slider-left h1::after {
  content: "";
  position: absolute;
  top: 8%; /* To center the border vertically */
  bottom: 9%; /* To center the border vertically */
  left: 0;
  width: 0.8vw;
  background-color: #D5A848;
}

.slider-left p {
    color: rgba(255, 255, 255, 0.85);
font-family: Cairo;
font-size: 1.6vw;
font-style: normal;
font-weight: 300;
line-height: 3.3vw; /* 159.375% */   
margin-top: 2vw;
padding-right: 0vw;
text-align: justify;
text-align-last: left;
/* width: 615px; */
}



</style>
