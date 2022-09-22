<template>
    <div id="listings">
        <div class="listing" v-for="item in selectedData">
            <div class="img" :style="{ backgroundImage: `url(${item.image})` }">
                <div class="type" v-if="item.type == 'Attraction'"><div><span class="material-symbols-outlined">attractions</span>{{item.type}}</div></div>
                <div class="type" v-if="item.type == 'Event'"><div><span class="material-symbols-outlined">festival</span>{{item.type}}</div></div>
                <div class="type" v-if="item.type == 'Movie'"><div><span class="material-symbols-outlined mov">movie</span>{{item.type}}</div></div>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="dates">
                <span class="material-symbols-outlined">calendar_today</span>{{item.displayDates}}  &nbsp;•&nbsp; 
                {{item.times}}
                </div>
            
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
        margin-bottom:30px;
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
        box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
        .material-symbols-outlined {
            font-size:1rem;
            margin-right:4px;
        }
        .mov {
            font-size:1.1rem;
            margin-top:0px;
        }
        div {
            display:flex;
        }
    }
    .dates {
        padding:0px 15px 10px 15px;
        display:flex;
        .material-symbols-outlined {
            font-size: .9rem;
            margin-top:1px;
            padding-right:3px;
        }
    }
</style>