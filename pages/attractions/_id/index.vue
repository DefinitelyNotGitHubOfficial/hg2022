<template>

        <div>
            <!-- {{this.$route.params.id}} -->
            <input placeholder="put in date yyyy-mm-dd" id="in">
            <button @click="change()">fetch data</button>
            <br /><br />   
            <div class="block">{{this.thing}}</div> 
            
            
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

        const month = [
            {"01":'Jan'},
            {"02":'Feb'},
            {"03":'Mar'},
            {"04":'Apr'},
            {"05":'May'},
            {"06":'Jun'},
            {"07":'Jul'},
            {"08":'Aug'},
            {"09":'Sep'},
            {"10":'Oct'},
            {"11":'Nov'},
           { "12":'Dec'}
        ]

       
       var pre = month.map(month => {
           return month["01"]
       })
       .filter(x=>x)
       .join()
    
       // "returns Jan"



        //var result = pre

       // var result = month.map

        // case '01':
        //             return 'Jan ' + date.slice(8,10)
        //             break;
        //         case '02':
        //             return 'Feb ' + date.slice(8,10)
        //             break;
        //         case '03':
        //             return 'Mar ' + date.slice(8,10)
        //             break;
        //         case '04':
        //             return 'Apr ' + date.slice(8,10)
        //             break;
        //         case '05':
        //             return 'May ' + date.slice(8,10)
        //             break;
        //         case '06':
        //             return 'Jun ' + date.slice(8,10)
        //             break;
        //         case '07':
        //             return 'Jul ' + date.slice(8,10)
        //             break;
        //         case '08':
        //             return 'Aug ' + date.slice(8,10)
        //             break;
        //         case '09':
        //             return 'Sep ' + date.slice(8,10)
        //             break;
        //         case '10':
        //             return 'Oct ' + date.slice(8,10)
        //             break;
        //         case '11':
        //             return 'Nov ' + date.slice(8,10)
        //             break;
        //         case '12':
        //             return 'Dec ' + date.slice(8,10)




        
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
.block {
    background-color: $purple;
    padding:15px;
}
</style>