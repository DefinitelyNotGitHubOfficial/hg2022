<template>
 
  <div>
      <Display :everything="this.question"/>
      <!-- <button @click="right()">go team</button> -->
      <!-- {{this.question}} -->
     <!-- <span>{{this.showme}}</span> -->
  </div>
</template>

<script>
import { nextTick, ref } from 'vue';
export default {
  
  data(){
    return {
        sledPosition:0,
        newb:["this thing"],
        question: 'https://demo.jaredfuller.com/hg/index.php?dates=2022-09-10&type=event,movie,attraction',
        showme: null
    }
  },
  methods: {
    right(){
      this.question = 'https://demo.jaredfuller.com/hg/index.php?dates=2022-09-30&type=event,movie,attraction'
      //this.$forceUpdate()
      //use component //emit prop to parent //rerender
      //this.$fetch()
      //console.log('lets see this work for once')
    }
  },
   watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
      this.showme = await fetch(this.question).then(res => res.json())
     // console.log(data)
      //this.newb = data
  },
}
</script>
<style lang="scss" scoped>
  span {
    background-color:$purple;
    color:$green;
  }
  div {
    color:$green;
  }
</style> 
