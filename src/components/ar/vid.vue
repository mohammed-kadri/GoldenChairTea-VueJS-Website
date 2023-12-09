<template>

  <!-- <div class="top-background-part"></div> -->
  
  <div class="vid-section">
    <div class="container-video">
  
      <iframe src="https://www.youtube.com/embed/mgJL-nbmD-g?rel=0&modestbranding=1&hl=ar" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>  </div>
  
  </div>
  
  
   </template>
  
  
    
    <style scoped>
  
  
  .vid-section {
    background-image: url(/src/assets/images/video-section-background.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      /* width: 100vw; */
      /* margin-bottom: 80px; */
      padding-top: 5.5vw;
      padding-bottom: 7.5vw;
      background-position: center;
  }
  
    .container-video {
  
    height: 39vw;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    overflow: hidden;
    margin: auto;
    }
  
    iframe {
      height: 36vw;
      width: 64vw;
  
    }
    body {
      background-color: transparent;
    }
  
  
  .spacer {
    height: 20vw;
  }
    /* .container {
    position: relative;
      width: 100%;
      height: 100px;
    }
    
    .background-image {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-image: url("../../assets/video-background.jpg");
      background-size: cover;
      background-position: center;
    }
    
    .video-container {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid black;
      overflow: hidden;
    }
    
    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    } */
    </style>
    