<template>
    <div id="listings">
        <div v-if="selectedData.length > 0">
        <div class="item" v-for="(item, i) in selectedData" :key="i">
            <!-- recommended feature -->
            <div v-if="item.tags">  
                <div v-for="(tag, i) in modTags(item.tags)" :key="i" style="position: relative;">
                    <div class="recommended" v-if="tag.indexOf('recommended') > -1"><span class="material-symbols-outlined">thumb_up</span>Recommended</div>
                </div>
            </div>

            <img :src="item.image" class="item_hero" loading="lazy"/>
          
            <div class="inner_item">
                <div class="item_title">{{item.title}}</div>
                <div class="time">
                        <span class="material-symbols-outlined">date_range</span>{{item.displayDates}}  &nbsp;•&nbsp; {{item.times}}
                    </div>
                <div class="item_desc">
                    {{item.desc}}
                </div>
                <!-- <div class="expand" v-if="item.desc.length > 245 && width > 400"> -->
                <div class="expand" 
                    v-if="
                        (item.desc.length > 185 && width < 401)
                        ||
                        (item.desc.length > 220 && width < 536)
                        ||
                        (item.desc.length > 300 && width > 401)
                    "
                >
                    <div class="expand_button" @click="expand($event)">Read More</div>
                </div>
                <div class="meta">
                    <div class="item_location"><span class="material-symbols-outlined">pin_drop</span> <a :href="'http://www.google.com/maps/search/'+item.location" target="_blank">{{item.location}}</a></div>
                    <div class="ageprice">
                        <span class="material-symbols-outlined">payments</span>{{item.costs}}
                        &nbsp;
                        <span class="material-symbols-outlined slight">escalator_warning</span>{{item.age}}
                    </div>
                    
                    <div class="web">
                        <span class="material-symbols-outlined">laptop_chromebook</span><a :href="'http://'+item.url" target="_blank">{{item.website}}</a>
                    </div>
                    
                </div>
                <div class="tagzone" v-if="item.tags">
                    <div v-for="(tag, i) in modTags(item.tags)" :key="i" class="tag">
                        {{tag}}
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div v-else>
            <div class="message">
                <span class="material-symbols-outlined">report</span>
                Nothing showing up here.  Try changing the date or filters.</div>
                <div class="youtube">
                    Enjoy this video for a toy monster from the '80s in the  meantime.<br /><br />
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/kwqTiKCoFyM?si=oQuAtQ4DO6CvAg9_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
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
        data() {
          return {
              width: 0
            }
        },   
        mounted() {
            this.width = window.innerWidth
             window.addEventListener('resize', ()=>{
                 this.width = window.innerWidth
             });
        },
        // destroyed() {
        //     window.removeEventListener('resize', this.handleResize);
        // },
        methods: {
            checkVal(e){
                if(e.indexOf('rec') > 0){
                    return "fuck"
                } else {
                    return "didn't work"
                }
            },
            handleResize() {
                window.width = window.innerWidth;
                window.height = window.innerHeight;
            },
            expand(event){
                event.target.parentNode.previousElementSibling.classList.add('open')
                // event.target.display = "none"
                event.target.parentNode.style.display = "none"
            },
            modTags(tags){
                return tags.split(",")
            }
        }
    }
</script>
<style lang="scss" scoped>
    .item {
        width: 100%;
        background-color: rgba(19, 14, 25, 0.5);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 30px;
        backdrop-filter: blur(2px);
        @include mq(max, 600px){
            width: calc(100% - 30px);
            margin:0 auto 20px auto;
        }
    }
    .item_hero {
        min-height:100px;
        max-height: 300px;
        width: 100%;
        object-fit: cover;
        background-color: black;
    }
    .inner_item {
        padding: 5px 20px 15px 20px;
        color: $green;
    }
    .item_title {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.8rem;
        padding: 5px 0 10px 0;
        @include mq(max, 600px){
            font-size: 1.5rem;
        }
    }
    .item_location {
        display: flex;
        align-items: center;
        padding-bottom: 15px;
        font-size: 1rem;
        font-weight: 400;
        .material-symbols-outlined {
            font-size: 1.2rem;
            padding-right: 7px;
        }
        a {
            color: $green;
            text-decoration: none;
            transition: all .5s;
            cursor: pointer;
            &:hover {
                color: salmon;
            }
        }
    }
    .item_desc {
        font-size: 1rem;
        line-height: 1.6rem;
         -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
    }
    .expand {
        text-align: center;
        margin-top: 10px;
    }
    .expand_button {
        border: 1px solid $green;
        padding: 5px 10px;
        border-radius: 4px;
        display: inline-flex;
        align-items: center;
        font-size: .9rem;
        transition: all .5s;
        cursor: pointer;
        font-weight: 400;
        &:hover {
            background-color: $green;
            color: #1d182d;
        }
    }
    .more {
        animation: open 0.5s ease-in-out;
        animation-fill-mode: forwards;
    }
    .open {
        animation: open 0.5s ease-in-out;
        animation-fill-mode: forwards;
    }
    @keyframes open {
        from {
            -webkit-line-clamp: 4;
        }
        to {
            line-clamp: initial;
            -webkit-line-clamp: 40;
        }
    }
    .ageprice, .web, .time {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 1rem;
        padding-bottom: 15px;
        .material-symbols-outlined {
            font-size: 1.2rem;
            padding-right: 7px;
        }
        a {
            color: $green;
            text-decoration: none;
            transition: all .5s;
            cursor: pointer;
            &:hover {
                color: salmon;
            }
        }
    }
    .time {
        padding-bottom: 10px;
    }
    .ageprice {
        text-transform: capitalize;
    }
    .meta {
        padding: 20px 0 15px 0;
    }
    .tag {
        display: inline-block;
        background-color: $green;
        color: #1d182d;
        padding: 5px 10px;
        margin: 0px 10px 10px 0px;
        border-radius: 3px;
        text-transform: capitalize;
        font-weight: 300;
        opacity: .9;
        font-size: .8rem;
        font-weight: 400;
    }
    .slight {
        transform: scale(-1, 1);
        padding:0 0 0 5px;
    }
    .recommended {
        position: absolute;
        background-color: $green;
        margin-top: 20px;
        padding: 8px 20px 8px 15px;
        font-weight: 400;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        display: inline-flex;
        align-items: center;
        opacity: .8;
        .material-symbols-outlined {
            font-size: 1rem;
            padding-right: 5px;
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
    .youtube {
        padding: 15px 0;
        color: $green;
    }
</style>