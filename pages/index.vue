<template>
  <div class="wrapper">

    <TopHat :reformedData="this.reformedData" />  
    <!-- <span style="color:white">
    {{this.selectedDay}}
    {{this.today}}
    </span> -->
    <div class="horibazontabagal">
      <div class="main">
        <WeekView :selectedDay="this.selectedDay" />
        <Listings :selectedData="this.sortedData" />
      </div>
      <div class="side">
        <Calendar :availability="this.availability" :selectedDay="this.selectedDay" class="desktop" />  
        <ListingFilter  :sortedData="this.sortedData" :currentData="this.currentData" :selectedDay="this.selectedDay" class="desktop" />
        
        <!-- <HauntedDuluth /> -->
        <GrimCities />  
        <Twitter />
        <div id="top" @click="scrollTop()"><span class="material-symbols-outlined">arrow_upward</span>Scroll to top</div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listingData: 'this is everything before anything happens',
        allListingsData:[],
        reformedData:[],
        sortedData:[],
        selectedDay:'',
        today: '',
        currentData:[],
        availability:[]
      }
    },
    async fetch() {
      this.listingData = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/values/Sheet1?alt=json&key=AIzaSyBg1PKXrS96HD7eevWzVIvYw70TDdO9LLc").then(res => res.json())
    },
    mounted(){
      //date
      const date = new Date();
      this.today = `20${String(date.getYear()).slice(1,3) }-${(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1)}-${(date.getDate()<10 ? '0'+date.getDate(): date.getDate())}`
      this.selectedDay = `20${String(date.getYear()).slice(1,3) }-${(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1)}-${(date.getDate()<10 ? '0'+date.getDate(): date.getDate())}`


      //scroll event
      window.addEventListener("scroll", ()=>{
        if(window.pageYOffset > 1000){
          document.getElementById('top').classList.add("enable")
        }
        else {
          document.getElementById('top').classList.remove("enable")
        }
      });


      //rebuild data to object
      this.listingData.values.forEach((el) => {
        //remove first listing for imformation management 
        if(el[1] != "Title"){
          this.reformedData.push(
            {
              id: el[0],
              title: el[1],
              dates: el[2],
              displayDates: el[3],
              times: el[4],
              desc: el[5],
              costs: el[6],
              location: el[7],
              type: el[8].split(),
              age: el[9],
              image: el[10],
              website: el[11],
              url: el[12],
            }
          )
        }
      })
      //get the current date
      //this.today = "2022-09-22"

      //this.sortedData = this.reformedData.filter(x => x.dates == this.today)
      this.reformedData.forEach((el) => {
        if(el.dates.split(', ').filter(x => x == this.today).length > 0){
          this.sortedData.push(el)
          this.currentData.push(el)
        }
      })
      //get all days with stuff for calendar 
      //this.availability = [...new Set(this.availability.EventDates)];
      var alldatesCombined = []
     
      this.reformedData.forEach((el) => {
        //alldatesCombined = [...new Set(el.dates.split(", "))];
        this.availability = this.availability.concat(el.dates.split(", ")) //[...el.dates.split(", ")]
        //console.log(el.dates.split(', ')) 
      })
      this.availability =  [...new Set(this.availability)]

      /////////////////
      /////////////////
      //console.log(this.sortedData)
      //this.sortedData = this.sortedData.sort((a, b) => { return Math.floor(Math.random() * 3) } )
    },
    created() {
      this.$nuxt.$on('sortedData', ($event) => this.filter($event))
      this.$nuxt.$on('selectedDay', ($event) => this.select($event))
      
    },
    methods: {
      filter(e) {
        this.sortedData = e
      },
      select(e) { 
        this.selectedDay = e
      },
      scrollTop(){
        //window.scrollTo(0, 0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    watch: { 
        selectedDay: function(newVal, oldVal) { // watch it
          this.currentData = []
          this.sortedData = []
          //console.log(this.reformedData)
          this.reformedData.forEach((el) => {
            if(el.dates.split(', ').filter(x => x == this.selectedDay).length > 0){
              this.currentData.push(el)
              this.sortedData.push(el)
            }
          })
          //randomizes data
          this.sortedData = this.sortedData.sort((a, b) => { return Math.floor(Math.random() * 3) } )
        }
    }
  }
</script>
<style lang="scss" scoped>
  .wrapper {
    width:100%;
    max-width:900px;
    margin:auto;
  }
  .horibazontabagal {
    display: grid;
    grid-template-columns: clamp(300px, 100%, 600px) auto;
    gap: 25px;
    margin-top:100px;
    @include mq(max, 850px){
      grid-template-columns: 60% auto;
    }
    @include mq(max, 600px){
      grid-template-columns: 100%;
    }
  }
  .desktop {
    @include mq(max, 600px){
      display: none;
    }
  }
  #top {
    background-color: $green; 
    color: $purple;
    position: fixed;
    bottom:0px;
    margin-bottom:-50px;
    left:0px;
    width:100%;
    transition:all .5s;
    cursor:pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    padding:5px 0;
    .material-symbols-outlined {
      font-size: 1rem; 
      padding-right:3px;
    }
  }
  .enable {
    margin-bottom:0px!important;
  }
</style>