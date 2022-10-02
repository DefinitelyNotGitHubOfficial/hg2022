<template>
    <div id="graveyard" @click="navTo()">Remembering Lost Atttactions</div>
</template>
<script>
    export default {
        methods:{
            navTo(){
                this.$router.push('/graveyard');
            }
        }
    }
</script>
<style lang="scss" scoped>
 #graveyard {
     background-image: url('/images/graveyard.jpg');
     min-height:250px;
     background-size:cover;
     border-radius:4px;
     color: $green;
     display:flex;
     justify-content: center;
     align-items: flex-end;
     padding-bottom:15px;
     @include mq(max, 600px){
            max-width:calc(100% - 30px);
            margin:0 auto 50px auto;
            min-height:400px
        }
 }
</style>