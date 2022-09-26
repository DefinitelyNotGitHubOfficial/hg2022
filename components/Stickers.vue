<template>
    <div id="stickers">
        <div class="graphic"><img src="images/hg-sticker.png" /></div>
        <div class="copy">
            contact me to get a sticker :D

        </div>
        

        <!-- <div class="h">Check out the new Hairy Ghost stickers.</div>
        If you'd like me to send you one,  -->
        <!-- <nuxt-link to="/contact">let me know <span class="material-symbols-outlined">forum</span></nuxt-link> -->
    </div>
</template>
<style lang="scss" scoped>
    #stickers {
       margin-top:-10px;
        color: $green;
        margin-bottom:25px;
        text-align: center;
        img {
            max-width:100%;
        }
        .material-symbols-outlined {
            font-size:1rem;
            margin-bottom:-2px;
        }
        a {
            color:$green;
            text-decoration: none;
            font-weight: 300;
        }
    }
    .h {
        font-weight:300;
        font-size:1.1rem;
        max-width:100%;
        margin:auto;
    }
    .copy {
        background-color: $purple;
        width:70%;
        margin:auto;
        padding:30px 10px 15px 10px;
        margin-top:-40px;
        border-radius:4px;
    }
</style>