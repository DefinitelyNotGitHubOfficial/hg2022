<template>
    <div id="listings">
        <div class="listing" v-for="item in selectedData">
            <div class="img" :style="{ backgroundImage: `url(${item.image})` }">
                <div class="type" v-if="item.type == 'Attraction'"><span class="material-symbols-outlined">attractions</span>{{item.type}}</div>
                <div class="type" v-if="item.type == 'Event'"><span class="material-symbols-outlined">festival</span>{{item.type}}</div>
            </div>
            <div class="title">{{item.title}}</div>
            
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            selectedData:{
                type: Array,
                required: true,
                default: () => {}
            }
        }
    }
</script>
<style lang="scss" scoped>
    .listing {
        background-color: $purple;
        width:100%;
        border-radius:3px;
        overflow: hidden;
        margin-bottom:20px;
    }
    .img {
        height:200px;
        background-position: center;
        background-size:cover;
    }
    .title {
        font-weight:200;
        font-size: 1.8rem;
        padding:5px 15px;
    }
    .type {
        background-color: $green;
        padding:5px 15px;
        display:inline-block;
        color:$purple;
        font-weight:300;
        margin-top:20px;
        .material-symbols-outlined {
            font-size:.9rem;
            margin-right:4px;
        }
    }
</style>