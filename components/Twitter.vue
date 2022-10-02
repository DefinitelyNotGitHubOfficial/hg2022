<template>
    <div class="twitter">
        <div class="header">
            <a href="https://twitter.com/HairyGhost" target="_blank">@HairyGhost</a>
        </div>
        <div class="scrollWindow">
            <div class="tweet" v-for="item in rendered">
                <div class="status"><span v-if="item.type"><img src="images/retweet.svg" />Retweeted</span></div>
                <div class="profile">
                    <img :src="item.profile" />
                </div>
                <div class="content">
                    <div class="name">{{item.name}}</div>
                    <div class="user"><span>@</span>{{item.userName}}</div>
                    <div class="date"><span>•</span> {{formatDate(item.date)}}</div>
                    <div class="message">
                        <a :href="`https://twitter.com/HairyGhost/status/${item.link}`" target="_blank">
                            {{item.text}}
                        </a>
                    </div>
                    <div class="meta">
                        <div>
                            <a :href="`https://twitter.com/HairyGhost/status/${item.link}`" target="_blank">
                                <img src="images/comment.svg" />{{formatNum(item.reply)}}
                            </a>
                        </div>
                        <div>
                            <a :href="`https://twitter.com/HairyGhost/status/${item.link}`" target="_blank">
                                <img src="images/retweet.svg" />{{formatNum(item.retweet)}}
                            </a>
                        </div>
                        <div>
                            <a :href="`https://twitter.com/HairyGhost/status/${item.link}`" target="_blank">
                                <img src="images/like.svg" />{{formatNum(item.like)}}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
const birdTemplate = {}
export default {
    data() {
      return {
        tweets: [],
        token: "AAAAAAAAAAAAAAAAAAAAAETyggEAAAAAO8K0UFyytldsaQ9YQpqcxFnB2pc%3DsHkNrBRRMuqjLjm6yFPx1iQCMd5PWpHbTaE1fDhqIJFcS3WpM9",
        altToken : "bjhQZ1dsU0xjaHB3SVVmRGNJOXVuZWE3Mm1wMmFYc3EwT3FYVkpfOEh1LUJZOjE2NjI2ODk2MTgyNTE6MTowOmF0OjE",
        rendered :[]
      }
    },
    async fetch() {
        this.tweets = await fetch(
            'https://api.twitter.com/2/users/768454222773833729/tweets?tweet.fields=created_at%2Cin_reply_to_user_id%2Cconversation_id%2Cauthor_id%2Cid%2Cpublic_metrics%2Centities&media.fields=type%2Curl%2Cpublic_metrics%2Cpreview_image_url&expansions=author_id%2Cin_reply_to_user_id%2Creferenced_tweets.id%2Creferenced_tweets.id.author_id&user.fields=profile_image_url%2Cusername%2Ccreated_at%2Cdescription%2Cid%2Cpublic_metrics%2Cname&max_results=10&place.fields=&exclude=replies&poll.fields=',{
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        ).then(res => res.json())
    },
    methods:{
         formatNum(num) {
            if(num < 1000){ 
                return num
            }
            if(num > 999 && num < 1100){
                return num.toString().slice(0,1)+"k"
            }
            if(num > 1099 && num < 10000){ 
                return num.toString().slice(0,1)+"."+num.toString().slice(1,2)+"k"
            }
            if(num > 9999 && num < 100000){
                return num.toString().slice(0,2)+"k"
            }
            if(num > 99999 && num < 1000000){
                return num.toString().slice(0,3)+"k"
            }
            if(num > 999999 && num < 10000000){
                return num.toString().slice(0,1)+"m"
            }
            if(num > 9999999){
                return num.toString().slice(0,2)+"m"
            }
        },
        formatDate(date){
            switch(date.slice(5,7)) {
                case '01':
                    return 'Jan ' + date.slice(8,10)
                    break;
                case '02':
                    return 'Feb ' + date.slice(8,10)
                    break;
                case '03':
                    return 'Mar ' + date.slice(8,10)
                    break;
                case '04':
                    return 'Apr ' + date.slice(8,10)
                    break;
                case '05':
                    return 'May ' + date.slice(8,10)
                    break;
                case '06':
                    return 'Jun ' + date.slice(8,10)
                    break;
                case '07':
                    return 'Jul ' + date.slice(8,10)
                    break;
                case '08':
                    return 'Aug ' + date.slice(8,10)
                    break;
                case '09':
                    return 'Sep ' + date.slice(8,10)
                    break;
                case '10':
                    return 'Oct ' + date.slice(8,10)
                    break;
                case '11':
                    return 'Nov ' + date.slice(8,10)
                    break;
                case '12':
                    return 'Dec ' + date.slice(8,10)
                    break;
                default:
                    // code block
            } 
        }
    },
    mounted(){
        const template = {}
        this.tweets.data.forEach((el)=>{
            var item = Object.create(template)
            item.text = el.text.slice(el.text.indexOf(':')+1, 1000000)
            item.author = el.author_id
            item.like = el.public_metrics.like_count
            item.reply = el.public_metrics.reply_count
            item.retweet = el.public_metrics.retweet_count
            item.date = el.created_at
            item.link = el.id
            if(typeof el.referenced_tweets != "undefined" ){
                item.type = true
                item.id = el.referenced_tweets[0].id
                this.tweets.includes.tweets.forEach((em)=>{
                    if(item.id == em.conversation_id){
                        item.author = em.author_id
                        item.like = em.public_metrics.like_count
                        item.reply = em.public_metrics.reply_count
                        item.retweet = em.public_metrics.retweet_count
                        item.date = em.created_at
                    }
                })

            } else {
                item.type = false
                item.id = el.id 
            }
            this.tweets.includes.users.forEach((em)=>{
                if(item.author == em.id){
                    item.userName = em.username
                    item.name = em.name
                    item.profile = em.profile_image_url
                }
            })
            this.rendered.push(item)
        })
    }
  }
</script>
<style lang="scss" scoped>
    .meta {
        font-size:.8rem;
        padding-top:3px;
        margin-top:3px;
        display:flex;
        gap:10%;
        //border-top:1px dashed $green;
        img {
            height:10px;
            padding-right:3px;
        }
        div {
            display:inline-block;
            padding-right:5px;
        }
        a {
            font-weight:100!important;
        }
    }
    .message {
        font-size:.9rem;
        padding-top:5px;
        a {
            font-weight:100!important;
        }
    }
    .date {
        padding-left:10px;
        span {
            font-size:.5rem;
            line-height:1rem;
            display:inline-block;
            //position: absolute;
            margin: 1px 0 0 -8px;
        }
    }
    .name, .user, .date {
        display:inline-block;   
    }
    .user, .date {
        font-size:.9rem;
    }
    .name {
        font-weight:400;
        padding-right:5px;
    }
    .user {
        padding-left:10px;
        span {
            //position: absolute;
            margin-left:-12px;
            margin-top:-1px;
            font-size:.8rem;
        }
    }
    .content {
        grid-area: content;
    }
    .status {
        grid-area: status;
        display: flex;
        justify-content: center;
        place-items: center;
        font-size:.8rem;
        font-weight:400;
        img {
            height:11px;
            padding-right:3px;
        }
        span {
            display:block;
        }

    }
    .profile {
        grid-area: profile;
    }
    .everything_else {
        grid-area: content;
    }
    .profile {
        img {
            width:35px;
            border-radius:40px;
            border:2px solid $green;
        }
    }
    .tweet {
        display: grid;
        grid-template-areas:
            'status status status status'
            'profile content content content';
        grid-template-columns: 50px auto;
        gap:3px;
        padding:7px 10px 20px 7px;
    }
    .twitter {
        padding-bottom:20px;
        background-color: $purple;
        color:$green;
        
        @include mq(max, 600px){
            max-width:calc(100% - 30px);
        }
        margin:auto;
        margin-bottom:20px;
        width:100%;
        min-width:250px;
        border-radius: 4px;
        a {
            color: $green;
            text-decoration: none;
            transition: color .3s;
            font-weight: 300;
            &:hover {
                color:$orange;
                transition: color .3s;
            }
        }
    }
    .scrollWindow {
         max-height:500px;
        overflow-y:scroll;
    }
    .header {
        padding:7px 0;
        text-align:center;
        border-bottom:1px dotted $green;
    }
</style>