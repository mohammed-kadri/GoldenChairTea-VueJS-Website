<template>
    <div class="slider">
        <div class="slider-content">
            <div class="slider-left">
                <div class="slider-title">

                    <h1>{{ content.landingPage.sliderTitleFirstLine }}<br>{{ content.landingPage.sliderTitleSecondLine }}</h1>
                    <span class="title-bar"></span>
                </div>
                <p data-v-88f92089="" style="direction: rtl;"> {{ content.landingPage.sliderParagraphe }} ! </p>
            </div>
            <div class="top-slider-right">
<div class="slider-right">
  <img src="../../assets/images/ar/slide1.jpg" alt="Slider Image" class="slider-image" :key="currentImage"> </div>

            </div>
        </div>
    </div>
</template>


<script setup>

import content from '../../content/ar.js'



// var myIndex = 0;

// var img1 = true
// var img2 = false
// var img3 = false


// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//     if (i == 0) {
//       img2 = false
//       img3 = false
//     } else if (i == 1) {
//       img1 = false
//       img3 = false
//     } else if (i == 2) {
//       img1 = false
//       img2 = false
//     }
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
// //   x[myIndex-1].style.display = "block";  
// if (i == 0) {
//     img1=true

//     } else if (i == 1) {
//         img2=true

//     } else if (i == 2) {
// img3=true
//     }
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

// carousel();

// export default {
//   data() {
//     return {
//       images: [image1, image2, image3],
//       currentImageIndex: 0,
//     };
//   },
//   computed: {
//     currentImage() {
//       return this.images[this.currentImageIndex];
//     },
//   },
//   mounted() {
//     setInterval(() => {
//       this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
//     }, 3000);
//   },
// };
</script>

<style scoped>
.slider {
    width: 100%;
    height: 45vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('../../assets/images/ar/slider-background.jpg');
    /* Additional styles for the slider div */
}

.slider-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.slider-left {
    flex: 2;
    color: #fff;
    text-align: right; /* Add this line */
    padding: 1vw 12vw 1vw 8vw;
}

.slider-right {
    flex: 1;
    /* padding: 0px; */
    text-align: right; /* Add this line */
    border-left: 0.8vw solid #D5A848; /* Add this line for left border */
}

.slider-image {
    height: 31.8vw;
    object-fit: cover;
}

.top-slider-right {
    border-left: 2.8vw solid rgb(255, 255, 255); /* Add this line for left border */
    border-bottom: 3.9vw solid rgb(255, 255, 255); /* Add this line for left border */
}


.slider-left h1 {
  color: rgba(255, 255, 255, 0.95);
  text-align: right;
  font-family: Readex Pro Variable;
  font-size: 3.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: 5.8vw; /* 142.305% */
  padding-right: 3vw;
  margin-right: -3.4vw;
  position: relative;
}
.slider-left h1::after {
  content: "";
  position: absolute;
  top: 8%; /* To center the border vertically */
  bottom: 9%; /* To center the border vertically */
  right: 0;
  width: 0.8vw;
  background-color: #D5A848;
}

.slider-left p {
    color: rgba(255, 255, 255, 0.85);
text-align: justify;
text-align-last: right ;
font-family: Readex Pro Variable;
font-size: 1.6vw;
font-style: normal;
font-weight: 300;
line-height: 3.3vw; /* 159.375% */   
margin-top: 2vw;
padding-left: 0vw;
/* width: 615px; */
}



</style>
