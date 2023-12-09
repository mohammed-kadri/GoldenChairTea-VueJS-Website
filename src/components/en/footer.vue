<template>
    <div class="footerSection">
        <h1 class="text-center section-title">{{ content.landingPage.contactUsTitle }} </h1>
        <div class="container mx-auto branches">
            <div class="flex flex-wrap justify-center">
                <div class="w-1/4  mb-8">
                    <h2 class="font-bold branch-title">{{content.landingPage.branch1 }}</h2>
                    <p class="text-gray-500 number">{{ content.landingPage.phoneNumber }} {{content.landingPage.branch1Tel }}</p>
                    <p class="text-gray-500 number">{{ content.landingPage.mobileNumber }} {{content.landingPage.branch1Phone }}</p>
                </div>
                <div class="w-1/4  mb-8">
                    <h2 class="font-bold branch-title">{{content.landingPage.branch2 }}</h2>
                    <p class="text-gray-500 number">{{ content.landingPage.phoneNumber }} {{content.landingPage.branch2Tel }}</p>
                    <p class="text-gray-500 number">{{ content.landingPage.mobileNumber }} {{content.landingPage.branch2Phone }}</p>
                </div>
                <div class="w-1/4  mb-8">
                    <h2 class="font-bold branch-title">{{content.landingPage.branch3 }}</h2>
                    <p class="text-gray-500 number">{{ content.landingPage.phoneNumber }} {{content.landingPage.branch3Tel }}</p>
                    <p class="text-gray-500 number">{{ content.landingPage.mobileNumber }} {{content.landingPage.branch3Phone }}</p>
                </div>
                <div class="w-1/4  mb-8">
                    <h2 class="font-bold branch-title">{{content.landingPage.branch4 }}</h2>
                    <p class="text-gray-500 number">{{ content.landingPage.phoneNumber }} {{content.landingPage.branch4Tel }}</p>
                    <p class="text-gray-500 number">{{ content.landingPage.mobileNumber }} {{content.landingPage.branch4Phone }}</p>
                </div>
                <div class="w-1/4  mb-8">
                    <h2 class="font-bold branch-title">{{content.landingPage.branch5 }}</h2>
                    <p class="text-gray-500 number">{{ content.landingPage.phoneNumber }} {{content.landingPage.branch5Tel }}</p>
                    <p class="text-gray-500 number">{{ content.landingPage.mobileNumber }} {{content.landingPage.branch5Phone }}</p>
                </div>
                <div class="w-1/4 mb-8">
                    <h2 class="font-bold branch-title">{{content.landingPage.branch6 }}</h2>
                    <p class="text-gray-500 number">{{ content.landingPage.mobileNumber }} {{content.landingPage.branch6Phone }}</p>
                </div>
                <div class="w-1/4  mb-8">
                    <h2 class="font-bold branch-title">{{content.landingPage.branch7 }}</h2>
                    <p class="text-gray-500 number">{{ content.landingPage.mobileNumber }} {{content.landingPage.branch7Phone }}</p>
                </div>
                <div class="w-1/4  mb-8">
                    <h2 class="font-bold branch-title">{{content.landingPage.branch8 }}</h2>
                    <p class="text-gray-500 number">{{ content.landingPage.mobileNumber }} {{content.landingPage.branch8Phone }}</p>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="bottom">
                <div class="bottom-content socialmedia">
                    <div class="icons">
                        <a :href="twitter" target="_blank">
                            <img src="../../assets/icons/twitter.png" alt="twitter">
                        </a>
                        <a :href="snapchat" target="_blank">
                            <img src="../../assets/icons/snapchat.png" alt="snapchat">
                        </a>
                        <a :href="tiktok" target="_blank">
                            <img src="../../assets/icons/tik-tok.png" alt="tiktok">
                        </a>
                        <a :href="facebook" target="_blank">
                            <img src="../../assets/icons/facebook.png" alt="facebook">
                        </a>
                        <a :href="instagram" target="_blank">
                            <img src="../../assets/icons/instagram.png" alt="instagram">
                        </a>
                    </div>
                    <div class="email">
                        {{ content.landingPage.email }}
                    </div>
                </div>
     
                <div class="bottom-content"><a :href="corpWebsite" target="_blank">
                        <img src="../../assets/images/corp-logo.png" alt="corp">
                    </a></div>
                    <div class="bottom-content adress">
                    <div class="bolded-adress">{{ content.landingPage.addressLine1 }}</div>

                    <div>{{ content.landingPage.addressLine2 }}</div>

                    <div>{{ content.landingPage.addressLine3 }}</div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import { ref } from 'vue';
import content from '../..//content/en.js'

const instagram = ref(content.landingPage.instagram);
const facebook = ref(content.landingPage.facebook);
const twitter = ref(content.landingPage.twitter);
const snapchat = ref(content.landingPage.snapchat);
const tiktok = ref(content.landingPage.tiktok);
const corpWebsite = ref(content.landingPage.corpWebsite);


</script>

<style scoped>
v-icon {
    color: white
}

.mb-8 {
  margin-bottom: 2vw;
}

.footerSection {
    margin-top: 9vw;
    background-image: url('../../assets/images/footer.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 35vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@-moz-document url-prefix() {
    /* Add your Mozilla Firefox specific styles here */
    .footerSection {
        /* Example style for h1 in Mozilla Firefox */
        background-attachment: local;
    }
}


h1 {
    text-align: center;
}

.section-title {
    color: #FFF;
    padding-top: 3vw;
    text-align: center;
    width: 16.8vw;
    text-shadow: 0px 0.34vw 0.1vw #695220c7;
    font-family: Cairo;
    font-size: 3.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: 2vw;
    border-bottom: 1.7vw solid #D5A848;
    -webkit-text-stroke: 0.1vw #FFF;
    text-stroke: 0.18vw #FFF;

}



.branches {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 4vw;

    /* padding-left: 7vw; */
    padding-left: 0vw;
    direction: ltr;
    /* margin-left: -0vw; */
}


@-moz-document url-prefix() {
  .branches {
    /* Styles specific to Firefox */
    padding-left: 5vw;
  }
}

/* Styles specific to Google Chrome */
@media screen and (-webkit-min-device-pixel-ratio:0) {
  .branches{
    /* Styles specific to Chrome */
    padding-left: 5vw;
  }
}



.branch-title {
    color: rgba(255, 255, 255, 0.95);
    text-align: left;
    text-shadow: 0px 0.2vw 0.1vw rgba(0, 0, 0, 0.25);
    font-family: Cairo;
    font-size: 1.48vw;
    font-style: normal;
    font-weight: 600;
    line-height: 2vw;
    /* 251.442% */
    padding-bottom: 0.8vw;
}

.number {
    color: rgba(255, 255, 255, 0.7);
    text-align: left;
    text-shadow: 0px 0.2vw 0.1vw rgba(0, 0, 0, 0.2);
    font-family: Cairo;
    font-size: 1.27vw;
    font-style: normal;
    font-weight: 300;
    line-height: 2vw;
    /* 301.73% */
}

.bottom {
    width: 80vw;
    display: flex;
    /* height: 10vw; */
    justify-content: space-between;
    color: white;
    direction: ltr;
    margin-bottom: 0.2vw;
}

/* css selector for the element number 2 */

.bottom-content:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom-content:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 14vw;
    padding-bottom: 0.4vw;
}

.bottom-content:nth-child(3) {
    display: flex;
    flex-direction: column;
    right: auto;
    text-align: right;
    justify-content: flex-end;
}

.adress {
    color: rgba(255, 255, 255, 0.70);
    font-family: Readex Pro Variable;
    font-size: 0.725vw;
    font-style: normal;
    font-weight: 400;
    line-height: 0.8vw;
    padding-bottom: 0.5vw;
}

.bolded-adress {
    color: rgba(255, 255, 255, 0.95);
    text-align: left;
    font-family: Readex Pro Variable;
    font-size: 0.9vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1vw;
    /* 108.182% */
}


.footer-bottom {
    margin-top: auto;
    /* width: 100%; */
}

.socialmedia .icons a {
    display: flex;
    flex-direction: row;
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 1.3vw;
}

.socialmedia {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13vw;
    padding-bottom: 0.3vw;
}


.socialmedia .icons a:not(:last-child) {
    margin-right: 0.92vw;
}

.socialmedia .email {
    color: rgba(255, 255, 255, 0.95);
    text-align: center;
    font-family: Readex Pro Variable;
    font-size: 0.66vw;
    font-style: normal;
    font-weight: 400;
    margin-top: 0;
    padding-top: 0;
    /* 108.182% */
}


.icons {
        display: flex;
    align-items: flex-end;
    padding-bottom: 0.2vw;
    margin-top: 0.5vw;
}
</style>
