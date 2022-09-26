<template>
    <div id="everything">
        <div class="copy">
          
        <a href="http://hauntedduluth.com/" target="_blank">
                To our friends in Duluth, check out <br /><span>www.hauntedduluth.com</span>
            
        </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #everything {
        background-image: url("/../../images/hauntedduluth.jpg");
        margin-bottom:30px;
        background-color: $black;
        min-height:180px;
        width:calc(100% - 30px);
        @include mq(max, 600px){
            max-width:calc(100% - 60px);
            margin:0 auto 25px auto;
            min-height:300px
        }
        background-size: 100%;
        padding:15px;
        background-repeat: no-repeat;
        background-color:$black;
        border-radius:3px;
        display:flex;
        justify-content: center;
        align-items:flex-end;
        font-weight:200;
         text-align: center;
        a {
            color:$orange;
            text-decoration: none;
            text-shadow: 3px 3px 3px rgba(0,0,0,0.7);
            span {
                font-weight:400;
            }
        }
    }
    .copy {
        background-color:rgba(0,0,0,0.5);
        padding:5px;
        border-radius: 4px;
    }
</style>