<template>
    <div id="grim">
        <div class="copy">
            <a href="https://anchor.fm/thegrimcities" target="_blank">
            Frights, terrors, haunts, and spoops; two Minnesota friends explore paranormal history in the Twin Cities and beyond.
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
   #grim {
       background-image: url("/../../images/grim.jpg");
       background-size:100%;
       width:calc(100% - 30px);
       aspect-ratio: 1/1;
       margin-bottom: 20px;
       border-radius:3px;
       display:flex;
       justify-content: center;
       align-items:flex-end;
       color: #fff;
       font-weight: 300;
       padding:15px;
       text-align: center;
       text-shadow: 2px 2px 5px rgba(0,0,0,0.8);
       @include mq(max, 600px){
           max-width:calc(100% - 60px);
           margin:0 auto 20px auto; 
       }
   }
   .copy {
       background-color: rgba(0,0,0,0.6);
       padding:10px;
       border-radius: 5px;
       a {
           color:#fff;
           text-decoration: none;
       }
   }
</style>