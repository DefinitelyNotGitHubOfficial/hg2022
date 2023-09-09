<template>
    <div id="filter">
        <!-- listings filter loaded
        <button @click="sort()">sort</button> -->
        <div class="title"><span class="material-symbols-outlined">news</span>Updates</div>
        <div class="updates">
            <div class="post" @click="goTweet()">
                <div class="avatar"><img src="https://pbs.twimg.com/profile_images/770340660226306048/m0BySiKD_x96.jpg" /></div>
                <div class="rest">
                    <div class="at"><span>Hairy Ghost</span> 
                    @HairyGhost</div>
                    <!-- @HairyGhost&nbsp;•  Sept 2</div> -->
                    <!-- <div class="content">
                        Hairy Ghost has launched a little early this year. The list of events, movies, and attractions may seem a bit on the slender  side right now, but don't let that ghostly appearance fool you! We're  working tirelessly behind the scenes, updating it regularly.
        
                         <a href="https://twitter.com/hashtag/SDCC2023?src=hashtag_click" target="_blank">#SDCC2023</a><br />
                        <a href="https://twitter.com/hashtag/inthemouthofmadness?src=hashtag_click" target="_blank">#inthemouthofmadness</a><br />
                        <a href="https://twitter.com/hashtag/suttercane?src=hashtag_click" target="_blank">#suttercane</a><br />
                        <a href="https://twitter.com/hashtag/horrormovie?src=hashtag_click" target="_blank">#horrormovie</a><br />
                        <br />
                        <div class="timage" style="background-image:url('https://pbs.twimg.com/media/F1fo8PuaUAErPzc?format=jpg&name=small')"></div>
                        <div class="meta">
                            <div class="sup"><img src="/images/comment.svg" class="icon"/> 0</div>
                            <div class="sup"><img src="/images/retweet.svg" class="icon"/> 0</div>
                            <div class="sup"><img src="/images/like.svg" class="icon"/> 0</div>
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- <div class="retweet">
                <img src="/images/retweet.svg" class="icon"/> Retweet
            </div>
            <div class="post" @click="goTweet()">
                <div class="avatar"><img src="https://pbs.twimg.com/profile_images/3605739295/3b263103307763f948f3e1fd494a095e_x96.jpeg" /></div>
                <div class="rest">
                    <div class="at"><span>John Carpenter</span><br />
                    @JohnCarpenter&nbsp;•  Jul 20</div>
                    <div class="content">
                        If you are at SDCC this year, be sure to stop by booth 1935 and visit Meatball from the film In The Mouth Of Madness(1994). Meatball was designed by KNB EFX under the direction of the great Greg Nicotero!
 
              
                        <a href="https://twitter.com/hashtag/SDCC2023?src=hashtag_click" target="_blank">#SDCC2023</a><br />
                        <a href="https://twitter.com/hashtag/inthemouthofmadness?src=hashtag_click" target="_blank">#inthemouthofmadness</a><br />
                        <a href="https://twitter.com/hashtag/suttercane?src=hashtag_click" target="_blank">#suttercane</a><br />
                        <a href="https://twitter.com/hashtag/horrormovie?src=hashtag_click" target="_blank">#horrormovie</a><br />
                        <br /> 
                        <div class="timage" style="background-image:url('https://pbs.twimg.com/media/F1fo8PuaUAErPzc?format=jpg&name=small')"></div>
                        <div class="meta">
                            <div class="sup"><img src="/images/comment.svg" class="icon"/> 35</div>
                            <div class="sup"><img src="/images/retweet.svg" class="icon"/> 186</div>
                            <div class="sup"><img src="/images/like.svg" class="icon"/> 1179</div>
                        </div>
                    </div>
                </div>
            </div> -->



                




        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            goTweet() {
                window.open('https://twitter.com/HairyGhost', '_blank')
            }
        }
    }
</script>
<style lang="scss" scoped>
.sup {
    padding-right: 15px;
    display: inline-block;
}
.meta {
    padding-top: 5px;
}
.timage {
    height: 200px;
    background-size: cover;
}
.retweet {
    padding: 0px 0px 5px 30px;
}
.icon {
    height: 10px;
}
.content {
    padding-top: 6px;
    line-height: 1.2rem;
}
.at {
    font-size: .9rem;
    line-height:1.2rem;
    span {
        font-weight: 500;
    }
}
.post {
    display: grid;
    grid-template-columns: 40px auto;
    font-size: .9rem;
    cursor: pointer;
    // padding-bottom: 15px;
}
.avatar {
    
    img {
        width: 90%;
        border-radius: 50%;
        border: 1px solid $green;
    }
}
.rest {
    padding-left: 10px;
    display: flex;
    align-items: center;
}
#filter {
    background-color: $purple;
    margin-bottom:20px;
    border-radius:3px;
    overflow:hidden;
    color: $green;
    width: 100%;
    @include mq(max, 600px){
        width: calc(100% - 30px);
        margin-left: 15px;
    }
}
.title {
    padding:4px 0px;
    text-align:center;
    border-bottom:1px dotted $green;
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight:300;
    .material-symbols-outlined {
        font-size: 1rem;
        padding-right:3px;
        font-weight:400;
    }
}
.updates {
    padding: 10px 10px 10px 10px;
    a {
        color: $green;
        font-size: 1rem;
        font-weight: 400;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
}


</style>