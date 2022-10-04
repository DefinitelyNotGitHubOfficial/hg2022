<template>

        <div>
            <!-- {{this.$route.params.id}} -->
            <input placeholder="put in date yyyy-mm-dd" id="in">
            <button @click="change()">fetch data</button>
            {{this.thing}}
            
        </div>
</template>
<script>
export default{
    data() {
      return {
          thing: "this is it"
      }
    },
    mounted(){
        // console.log(this.$route.params)
        // console.log('xxxxxxxxxxxx',this.$route.params.id)
        // console.log(`https://demo.jaredfuller.com/hg/index.php${this.$route.params.id}`)
        
    },
    methods: {
        change(){
            // console.log(
            //     document.getElementById('in').value 
            // )
           // console.log('please')
            // this.$router.push({path: this.localePath('search'), query: {q: this.q}});
            //this.$router.push({path: '/attractions/dates=2022-09-30%26type=event,movie'});
            //this.$router.go()
            //windows.history.go()
            self.location.href = `/attractions/dates=${document.getElementById('in').value }%26type=event,movie`

//this.$router.go()
        }
    },
    async fetch() {
    //   this.thing = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/values/Sheet1?alt=json&key=AIzaSyBg1PKXrS96HD7eevWzVIvYw70TDdO9LLc`).then(res => res.json())
      this.thing = await fetch(`https://demo.jaredfuller.com/hg/index.php?${this.$route.params.id}`).then(res => res.json())
      //http://localhost:3000/attractions/dates=2022-09-10%26type=event,movie
    },
}

</script>
<style lang="scss" scoped>
div {
    color:#fff;
    padding:20px;
}
</style>