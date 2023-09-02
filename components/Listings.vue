<template>
    <div id="listings">
        <div v-if="selectedData.length > 0">
            <div class="listing" v-for="(item, i) in selectedData" :key="i">
                <div class="img" :style="{ backgroundImage: `url(${item.image})` }" :alt="item.title">
                    <div class="type" v-if="item.type == 'Attraction'"><div>{{item.type[0]}}</div></div>
                    <div class="type" v-if="item.type == 'Event'"><div>{{item.type[0]}}</div></div>
                    <div class="type" v-if="item.type == 'Movie'"><div>{{item.type[0]}}</div></div>
                </div>
                <div class="title">{{item.title}}</div>
                <!-- <div class="dates" v-if="item.displayDates">
                    <span class="material-symbols-outlined">calendar_today</span>{{item.displayDates}}  &nbsp;•&nbsp; 
                    {{item.times}}
                </div> -->
                <div class="location2" v-if="item.location">
                    <span class="material-symbols-outlined">location_on</span>{{item.location}}
                </div>
                
                <div class="desc" @click="expand($event)">{{item.desc}}</div>
                <div class="meta2" v-if="item.displayDates">
                    <div class="price2"><span class="material-symbols-outlined">payments</span>{{item.costs}}</div>
                    <div class="age2"><span class="material-symbols-outlined">escalator_warning</span>{{item.age}}</div>
                    <div class="link2"><span class="material-symbols-outlined">public</span><a :href="item.url" target="_blank">{{item.website}}</a></div>
                    <div class="dates2"><span class="material-symbols-outlined">calendar_today</span>{{item.displayDates}} &nbsp;•&nbsp; 
                    {{item.times}}</div>

                    <div class="tagzone" v-if="item.tags">
                        <div v-for="(tag, i) in modTags(item.tags)" :key="i" class="tag">
                            {{tag}}
                        </div>
                    </div>
                </div>
                <!-- <div class="link" v-if="item.website">
                    <span class="material-symbols-outlined mov">link</span>
                    <a :href="item.url" target="_blank">{{item.website}}</a>
                </div> -->
                <!-- <div class="meta">
                    <div class="pill" v-if="item.location">
                        <div><span class="material-symbols-outlined">location_on</span>{{item.location}}</div>
                    </div>
                    <div class="pill" v-if="item.costs">{{item.costs}}</div>
                    <div class="pill" v-if="item.age"><span class="material-symbols-outlined">escalator_warning</span>{{item.age}}</div>
                    <br />
                    <br />
                    
                </div> -->
                <br />
            </div>
        </div>
        <div v-else>
            <div class="message">
                <span class="material-symbols-outlined">report</span>
                Nothing showing up here.  Try changing the date or filters.</div>
        </div>
        <!-- <div v-else>no listings</div> -->
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
        },
        methods: {
            expand(event){
                if(Array.from(event.target.classList).some(x=>x == "expandme")){
                    event.target.classList.remove("expandme")
                }
                else{
                    event.target.classList.add("expandme")
                }
            },
            modTags(tags){
                return tags.split(",")
            }
        }
    }
</script>
<style lang="scss" scoped>
    #listings {
        color: $green;
         @include mq(max, 600px){
      width: calc(100% - 30px);
      margin:0 auto 20px auto;
    }
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
        font-size: 2rem;
        padding:10px 15px;
        font-weight: 400;
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
        // padding:0px 15px 15px 15px;
        padding:0px 15px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all .5s;
        cursor:pointer;
    }
    .expandme {
        -webkit-line-clamp: 100;
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
        margin-bottom:7px;
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
        padding:15px 15px 15px 15px;
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
    .message {
        color:$purple;
        background-color: $green;
        padding:15px;
        border-radius:4px;
        font-weight: 300;
        display:flex;
        align-items: center;
        .material-symbols-outlined {
            font-size:1.2rem;
            padding-right:3px;
        }
    }
    .tag {
        display: inline-block;
        background-color: $green;
        color: black;
        padding: 3px 10px;
        border-radius: 2px;
        margin: 0px 7px 7px 0px;
        text-transform: capitalize;
        font-weight: 400;
    }
    .location2 {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        font-weight: 400;
        opacity: 1;
        font-size: .9rem;
        .material-symbols-outlined {
            font-size: 1rem;
            padding: 0px 5px 0px 10px;
        }
    }
    .price2 {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        font-weight: 400;
        .material-symbols-outlined {
            font-size: 1rem;
            padding: 0px 10px 0px 0px;
        }
    }
    .age2 {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        font-weight: 400;
        .material-symbols-outlined {
            font-size: 1rem;
            padding: 0px 10px 0px 0px;
        }
    }
    .link2 {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        font-weight: 400;
        a {
            color: $green;
            text-decoration: none;
        }
        .material-symbols-outlined {
            font-size: 1rem;
            padding: 0px 10px 0px 0px;
        }
    }
    .dates2 {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        font-weight: 400;
        .material-symbols-outlined {
            font-size: 1rem;
            padding: 0px 10px 0px 0px;
        }
    }
    .meta2 {
        padding-top: 10px;
        padding-left: 15px;
    }
    .tagzone {
        padding: 10px 0 0 0;
    }
</style>