<template>
    <div class="o-graveyard">
        <a href="/graveyard">
            <img src="images/gravely.svg" style="width: 100%"/>
        </a>
    </div>
</template>
<style scoped lang="scss">
.o-graveyard {
    border-radius:3px;
    overflow:hidden;
    color: $green;
    width: 100%;
    @include mq(max, 600px){
        width: calc(100% - 30px);
        margin-left: 15px;
   }
}

h1 {
        font-family: 'Creepster', cursive;
        padding:0px;
        margin:0px;
        font-size:2rem;
        line-height:1.6rem;
        text-align:center;
        color:$green;
    }
</style>