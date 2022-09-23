<template>
  <div class="wrapper">
    <br /> <br /> <br /> <br /> <br />
    <div class="horibazontabagal">
      <div class="main">
        <Listings :selectedData="this.sortedData" />
      </div>
      <div class="side">
        <ListingFilter  :sortedData="this.sortedData" :currentData="this.currentData"/>
        <Calendar />
        <Twitter />
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
        selectedDay:'nothing',
        today: '',
        currentData:[]
      }
    },
    async fetch() {
      this.listingData = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/values/Sheet1?alt=json&key=AIzaSyBg1PKXrS96HD7eevWzVIvYw70TDdO9LLc").then(res => res.json())
    },
    mounted(){
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
      this.today = "2022-09-22"
      //this.sortedData = this.reformedData.filter(x => x.dates == this.today)
      this.reformedData.forEach((el) => {
        if(el.dates.split(', ').filter(x => x == this.today).length > 0){
          this.sortedData.push(el)
          this.currentData.push(el)
        }
      })
    },
    created() {
      this.$nuxt.$on('sortedData', ($event) => this.select($event))
    },
    methods: {
      select(e) {
        this.sortedData = e
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
    grid-template-columns: clamp(200px, 100%, 600px) auto;
    gap: 25px;
  }
 
</style>