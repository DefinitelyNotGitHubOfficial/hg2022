<template>
 
  <div>
      <button @click="right()">go team</button>
     <span>{{this.showme}}</span>
  </div>
</template>

<script>
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
      this.$fetch()
      //console.log('lets see this work for once')
    }
  },
  async fetch() {
      var data = await fetch(this.question).then(res => res.json())
     // console.log(data)
     this.showme = data
      //this.newb = data
  },
}
</script>
<style lang="scss" scoped>
  span {
    background-color:$purple;
    color:$green;
  }
</style> 
