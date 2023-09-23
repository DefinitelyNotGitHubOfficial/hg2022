<template>
  <div class="wrapper">
    <!-- <Countdown /> -->
   
    <TopHat :reformedData="this.reformedData" />  
    
    <div class="updatemessage">
      <img src="images/ghosty.svg" />
      Hey Spooky Enthusiasts! Welcome to Hairy Ghost - the official Twin Cities guide to Halloween.<br />
      Our Halloween list of events, movies, and attractions may seem a bit on the slender side right now, but don't let that ghostly appearance fool you! We're working tirelessly behind the scenes, updating it regularly. As the shadows grow longer and we inch closer to October, you can expect to see the list swell with more ghoulish delights. <br />Stay tuned, and thank you for your eerie patience! 
    </div>
    <div class="horibazontabagal">
      <div class="main">
        <WeekView :selectedDay="this.selectedDay" />
        <Listings :selectedData="this.sortedData" />
      </div>
      <div class="side">
        <Calendar :availability="this.availability" :selectedDay="this.selectedDay" class="desktop" />  
        <ListingFilter  :sortedData="this.sortedData" :currentData="this.currentData" :selectedDay="this.selectedDay" class="desktop" />
        
        <!-- <div class="c23">
          <a href="https://www.crypticonminneapolis.com" target="_blank">
            <img src="images/crypticon23.jpg" />
          </a>
        </div> -->
        <Graveyard />
        <News /> 
        <!-- <HauntedDuluth /> -->
        <GrimCities />  
        <!-- <Twitter /> -->
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
        availability:[],
        tags:[]
      }
    },
    async fetch() {
      this.listingData = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/values/Sheet1?alt=json&key=AIzaSyBg1PKXrS96HD7eevWzVIvYw70TDdO9LLc").then(res => res.json())
    },
    mounted(){
      //date
      let date = new Date();


      // this.today = `20${String(date.getYear()).slice(1,3) }-${(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1)}-${(date.getDate()<10 ? '0'+date.getDate(): date.getDate())}`
      this.today = "2022-09-26" 
      // this.selectedDay = `20${String(date.getYear()).slice(1,3) }-${(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1)}-${(date.getDate()<10 ? '0'+date.getDate(): date.getDate())}`
      this.selectedDay = "2022-09-26"
      console.log(this.today)
      console.log(this.selectedDay)

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
              tags: el[13]
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
      console.log(this.sortedData)
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
    // margin-top:100px;
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
  .temp {
    width:400px;
    margin:auto;
    padding:40px 0 0 0;
    color:white;
    h1 {
      text-align: center;
    }
  }
  .c23 {
    margin-bottom: 15px;
    img {
      width: 100%;
    }
    @include mq(max, 600px){
        width: calc(100% - 30px);
        margin-left: 15px;
   }
  }
  .updatemessage {
    margin: 95px 0 15px 0;
    color: $green;
    font-weight: 400;
    line-height: 1.6rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 1);
    font-size: 1.1rem;
    background-color: $purple;
    padding: 15px;
    border-radius: 3px;
    img {
      height: 100px;
      float: left;
      padding-right: 15px;
      padding-bottom: 30px;
      padding-top: 15px;
      animation: flaoton 4s infinite;
    }
  }
  @keyframes flaoton {
            0% {
                padding-top: 0px;
            }
            50% {
                padding-top: 15px;
            }
            100% {
                padding-top: 0px;
            }
        }
</style>