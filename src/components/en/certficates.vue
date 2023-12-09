<template>
    <div class="certificates">

        <div class="texts">
            <div class="title">
                <!-- Title content goes here -->
                {{ content.landingPage.certificatesTitle }}
            </div>
            <div class="subtitles">
                <div class="subtitle">
                    <span class="square"></span>
                    <!-- First subtitle content goes here -->
                    {{ content.landingPage.cert1Title }}
                </div>

                <div class="subtitle">
                    <span class="square"></span>
                    <!-- Second subtitle content goes here -->
                    {{ content.landingPage.cert2TitleFirstLine }}
                    <div><span class="square" style="background-color: transparent;"></span> 
                    {{ content.landingPage.cert2TitleSecondLine }}
                    </div>
                </div>


            </div>
        </div>
        <div class="certs">
            <img src="../../assets/images/cert1.png" alt="Image 1">
            <img src="../../assets/images/cert2.png" alt="Image 2">
        </div>
    </div>
</template>

<script setup>
import content from '../../content/en.js'

</script>


<style scoped>
.certificates {
    display: flex;
    align-items: flex-end;
    margin-left: 7.5vw;
    margin-top: 2vw;
    margin-right: 8vw;
    /* Add margin to the right */
}

.certs {
    flex: 1;
    align-items: flex-end;
    margin-top: 4vw;
justify-items: flex-end;
display: grid;
    /* Add styling for your logo */
}

.title {
    /* Add styling for your title */
    direction: ltr;
    width: auto;
    color: rgba(49, 49, 49, 0.98);
    text-align: left;
    font-family: Cairo;
    line-height: 2vw;
    border-bottom: 2vw solid #D5A848;
    font-size: 5.1vw;
    font-style: normal;
    font-weight: 600;
    margin-top: 4.2vw;
    -webkit-text-stroke: 0.15vw rgba(49, 49, 49, 0.98);
  text-stroke: 0.15vw rgba(49, 49, 49, 0.98);
  letter-spacing: 0.3vw;
    /* 142.305% */
}

.subtitles {
    display: flex;
    flex-direction: column;
    margin-top: 3.5vw;
    direction: ltr;
    /* Add styling for your subtitles container */
}

.subtitle {
    flex: 1;
    color: rgba(49, 49, 49, 0.85);
    text-align: left;
    font-family: Cairo;
    font-size: 2vw;
    font-style: normal;
    font-weight: 500;
    line-height: 3vw;
    margin-bottom: 1.2vw;
    /* 145.833% */
    /* Add styling for your subtitles */
}

.square {
    width: 1.2vw;
    height: 1.2vw;
    background-color: #D5A848;
    display: inline-block;
    margin-right: 0.7vw;
    /* Add this line to make the square span visible */
}

.certs img {
    width: 15vw;
    box-shadow: 0px 0.2vw 0.2vw rgba(0, 0, 0, 0.1);
}

.certs img:last-child {
    margin-top: 1vw;
}
</style>
