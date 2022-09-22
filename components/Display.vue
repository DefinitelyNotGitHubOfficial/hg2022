<template>
    <div v-if='render'>
        <button @click="reload()">reload</button>
        this is the thing {{this.results.values}}</div>
</template>
<script>
    export default {
        methods: {
            selectDay(day, event){
                var allCurrent = document.querySelectorAll('.selected')
                allCurrent.forEach((el) => {
                    el.classList.remove('selected')
                })
                event.target.classList.add('selected')
                $nuxt.$emit('selectedDay', day)
            },
            reload() {
                this.render = false;
                this.where = 'https://demo.jaredfuller.com/hg/index.php?dates=2022-09-30&type=event,movie,attraction'
                this.$nextTick(() => {
                    this.render = true;
                });
                }
            
        },
        //'https://sheets.googleapis.com/v4/spreadsheets/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/values/Sheet1?alt=json&key=AIzaSyBg1PKXrS96HD7eevWzVIvYw70TDdO9LLc
        data(){
            return {
                results: ' //// ===>how about this',
                render: true,
                where: this.everything
            }
        },
        props:{
            everything:{
                type: String,
                required: true,
                default: () => {}
            }
        },
        async fetch() {
            //https://docs.google.com/spreadsheets/d/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/gviz/tq?
            this.results = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/values/Sheet1?alt=json&key=AIzaSyBg1PKXrS96HD7eevWzVIvYw70TDdO9LLc").then(res => res.json())
            //console.log(data)
            //this.newb = data
        },
        fetchOnServer: true,
        mounted(){
            //document.getElementById('sled').style.left = `${this.sledPosition}px`

            // this.goToDay();

            //console.log(month)
            //console.log(day)
            // if(  parseInt( this.selectedDay.slice(5,7) ) == 9){
            //     //do nothing
            // }

            //this.selectedDay
            
            // const date = new Date()
            // console.log(date.getMonth()+1, parseInt(this.selectedDay.slice(5,7)))
            // if(date.getMonth()+1 == parseInt(this.selectedDay.slice(5,7))){

            // }
            // addEventListener('resize', (event) => {
            //     var targetW = document.getElementById('window').offsetWidth 
            //     console.log(targetW)
            //     var changeDayWidth = document.querySelectorAll('.day')
            //     if(targetW >= 490){
            //         changeDayWidth.forEach((el)=>{
            //             el.style.width = '60px'
            //         })
            //     }
            //     else if (targetW < 490 && targetW > 300){
            //         changeDayWidth.forEach((el)=>{
            //             el.style.width = `${changeDayWidth/5}px`
            //         })
            //     }
            // });
        },
        // watch: { 
      	//     selectedDay: function(newVal, oldVal) { // watch it
        //         //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        //         this.goToDay();
        //     }
        // }
    }
//document.getElementById('sled').style.left = '0px'
</script>
<style lang="scss" scoped>
    div {
        color:$green;
    }
</style>