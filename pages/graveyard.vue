<template>
 
  <div class="graveyard">
    <div v-for="item in items" class="item">
      {{item.title}}
    </div>
  </div>
</template>
<script>
  export default {
     data() {
      return {
        items:[
          {
            title: "ValleyScare",

            desc: "this was pretty cool",


            image: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/vf-en-us/blogs/2017/september/valleyscare-blog-2.png",
          },
          {
            title: "Haunted Basement"
          }
          // {
          //   id: 1,
          //   title: "Haunted Basement",
          //   dates: "-2021?",
          //   displayDates: "-2021?",
          //   times: "1",
          //   desc: "this was pretty cool",
          //   costs: "?",
          //   location: "Shakopee",
          //   type: "Attraction",
          //   age: "13+",
          //   image: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/vf-en-us/blogs/2017/september/valleyscare-blog-2.png",
          //   website: "?",
          //   url: "?",
          // },
          // {
          //   id: 1,
          //   title: "drive thru thing",
          //   dates: "-2021?",
          //   displayDates: "-2021?",
          //   times: "1",
          //   desc: "this was pretty cool",
          //   costs: "?",
          //   location: "Shakopee",
          //   type: "Attraction",
          //   age: "13+",
          //   image: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/vf-en-us/blogs/2017/september/valleyscare-blog-2.png",
          //   website: "?",
          //   url: "?",
          // },
          // {
          //   id: 1,
          //   title: "frightmares",
          //   dates: "-2021?",
          //   displayDates: "-2021?",
          //   times: "1",
          //   desc: "this was pretty cool",
          //   costs: "?",
          //   location: "Shakopee",
          //   type: "Attraction",
          //   age: "13+",
          //   image: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/vf-en-us/blogs/2017/september/valleyscare-blog-2.png",
          //   website: "?",
          //   url: "?",
          // },
          // {
          //   id: 1,
          //   title: "FRIGHT FARM",
          //   dates: "-2021?",
          //   displayDates: "-2021?",
          //   times: "1",
          //   desc: "this was pretty cool",
          //   costs: "?",
          //   location: "Shakopee",
          //   type: "Attraction",
          //   age: "13+",
          //   image: "https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/vf-en-us/blogs/2017/september/valleyscare-blog-2.png",
          //   website: "?",
          //   url: "?",
          // },
        ]
      }
  }
  }
</script>
<style lang="scss" scoped>
  .graveyard {
    width: clamp(300px, 100%, 600px);
    margin:auto;
    
  }
  .item {
    background-color: $purple;
    color: $green;
    padding:15px;
    margin-bottom:20px;
  }
</style> 
