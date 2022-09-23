<template>
    <div id="twitter">
        <div class="title">@HairyGhost</div>
    </div>
</template>
<style lang="scss" scoped>
#twitter {
    background-color: $purple;
    margin-bottom:20px;
    border-radius:3px;
    overflow:hidden;
    color: $green;
}
.title {
    padding:10px 0px;
    text-align:center;
    border-bottom:1px dotted $green;
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight:300;
    &::first-letter {
        font-size:2rem;
    }
}
</style>