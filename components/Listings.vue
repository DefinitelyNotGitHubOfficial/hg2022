<template>
    <div id="listings">
        <div class="listing" v-for="item in selectedData">
            <div class="img" :style="{ backgroundImage: `url(${item.image})` }" :alt="item.title">
                <div class="type" v-if="item.type == 'Attraction'"><div><span class="material-symbols-outlined">attractions</span>{{item.type[0]}}</div></div>
                <div class="type" v-if="item.type == 'Event'"><div><span class="material-symbols-outlined">festival</span>{{item.type[0]}}</div></div>
                <div class="type" v-if="item.type == 'Movie'"><div><span class="material-symbols-outlined mov">movie</span>{{item.type[0]}}</div></div>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="dates">
                <span class="material-symbols-outlined">calendar_today</span>{{item.displayDates}}  &nbsp;•&nbsp; 
                {{item.times}}
            </div>
            <div class="desc">{{item.desc}}</div>
            <div class="link">
                <span class="material-symbols-outlined mov">link</span>
                <a :href="item.url" target="_blank">{{item.website}}</a>
            </div>
            <div class="meta">
                <div class="pill">
                    <div><span class="material-symbols-outlined">location_on</span>{{item.location}}</div>
                </div>
                <div class="pill">{{item.costs}}</div>
                <div class="pill"><span class="material-symbols-outlined">escalator_warning</span>{{item.age}}</div>
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
    #listings {
        color: $green;
    }
    .listing {
        background-color: $purple;
        width:100%;
        border-radius:4px;
        overflow: hidden;
        margin-bottom:30px;
    }
    .img {
        height:200px;
        background-position: center;
        background-size:cover;
    }
    .title {
        font-size: 1.8rem;
        padding:10px 15px;
        font-weight: 300;
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
        font-weight:400;
        .material-symbols-outlined {
            font-size: .9rem;
            margin-top:1px;
            padding-right:3px;
        }
    }
    .location {
        display:inline-block;
        font-size:1rem;
        padding:0px 15px 10px 15px;
        .material-symbols-outlined {
            font-size:1rem;
            padding-right:2px;
        }
    }
    .desc {
        font-size:1.1rem;
        line-height:1.5rem;
        padding:0px 15px 15px 15px;
    }
    .meta {
        padding:0px 15px 15px 15px;
    }
    .pill {
        background-color: $green;
        color: $purple;
        padding:5px 15px;
        border-radius:15px;
        display:inline-block;
        font-weight:300;
        margin-right:5px;
        .material-symbols-outlined {
            font-size:1rem;
            padding-right:2px;
        }
        div {
            display:flex;
            .material-symbols-outlined {
                font-weight: 900;
            }
        }
    }
    .link {
        padding:0px 15px 15px 15px;
        display:flex;
        a {
            color: $green;
            font-weight:400;
            text-decoration: none;
            transition:color .5s;
            &:hover {
                color:$orange;
            }
        }
        .material-symbols-outlined {
            margin-top:-2px;
            padding-right:3px;
        }
    }
</style>