<template>
    <div class="wrapper">
        <TopHat :reformedData="this.reformedData" />  
        <div class="offset">
            
        </div>
        <h1>EVERYTHING</h1>
        <div class="spec">All {{this.reformedData.length}} Things</div> 
        <div class="goback">
                <a href="/">
                    <span class="material-symbols-outlined">arrow_back</span>Back calendar view
                </a>
            </div>
        <div class="horibazontabagal">
          
            <div class="main">
                <Listings :selectedData="this.reformedData" />
            </div>
            <div class="side">
              <div id="filter">
                <div class="title"><span class="material-symbols-outlined">tune</span>Filter</div>
                <div class="selections">
                  <form>
                      <label class="container">Attractions
                      <input type="checkbox" checked="checked"  @click="sort('Attraction')">
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">Events
                      <input type="checkbox" checked="checked"  @click="sort('Event')">
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">Movies
                      <input type="checkbox" checked="checked" @click="sort('Movie')">
                      <span class="checkmark"></span>
                    </label>
                    <hr />
                    <label class="container">All Ages/ Family Friendly
                      <input type="checkbox"  @click="sort('all')">
                      <span class="checkmark"></span>
                    </label>
                  </form>
                </div>
              </div>
              <Graveyard class="mobs" />
              <News class="mobs" /> 

            </div>
        </div>
                <div id="top" @click="scrollTop()"><span class="material-symbols-outlined">arrow_upward</span>Scroll to top</div>

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
        tags:[],
        sorts: ['Attraction', 'Event', 'Movie'],
        dataBackUp: []
      }
    },
    async fetch() {
      this.listingData = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/values/Sheet1?alt=json&key=AIzaSyBg1PKXrS96HD7eevWzVIvYw70TDdO9LLc").then(res => res.json())
    },
    mounted(){
      this.dataBackUp = this.reformedData
      //console.log('this is is dude',this.reformedData)
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
              age: el[9].toLowerCase(),
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
      //console.log(this.sortedData)
    },
    created() {
      this.$nuxt.$on('sortedData', ($event) => this.filter($event))
      this.$nuxt.$on('selectedDay', ($event) => this.select($event))
      
    },
    methods: {
      filter(e) {
        this.sortedData = e
      },
      sort(e){
        let newCollection = []
        if(this.sorts.includes(e)){
          this.sorts = this.sorts.filter(x=>x !== e)
        } else {
          this.sorts.push(e)
        }

        // console.log(this.sorts)

        this.dataBackUp.forEach(e => {

          if(this.sorts.includes(e.type.join(""))){
            newCollection.push(e)
          }
        })


        //check for family friendly
        if(this.sorts.includes('all')){
          let familyFiltered = []
          newCollection.forEach(e => {
            if(e.age.includes('all')){
              familyFiltered.push(e)
            }
          })
          newCollection = familyFiltered
        }


        this.reformedData = newCollection


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
   .offset {
          height: 80px;
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
  .side {
    @include mq(max, 600px){
      order: -1;
      padding: 0px 15px;
    }
  }
  .mobs {
    @include mq(max, 600px){
      display: none;
    }
  }
  h1 {
      color: $green;
      font-family: 'Creepster', cursive;
      font-size: 5rem;
      line-height: 2rem;
      text-shadow: 3px 3px 5px rgba(0, 0, 0, .9);
      text-align: center;
      margin-bottom: 20px;
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

/* filter stuff*/
#filter {
    background-color: $purple;
    margin-bottom:20px;
    border-radius:3px;
    overflow:hidden;
    color: $green;
    @include mq(max, 600px){
      margin-bottom: 0px;
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
form {
    padding:10px 15px;
    line-height: 1.5rem;
    input {
        height:50px;
    }
}
.check {
    height:18px;
    width:18px;
    margin-right:3px;
}




/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 1 rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:last-child {
      margin-bottom:0px;
  }
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: $green;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 2px;
  width: 4px;
  height: 10px;
  border: solid $purple;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.goback {
        display: flex;
        justify-content: left;
        align-items: center;
        line-height: 3rem;
        //padding: 0px 15px;
        .material-symbols-outlined {
            padding-right: 5px;
            font-size: 1rem;
        }
        a {
            color: $green;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
   @include mq(max, 600px){
        padding: 0px 15px;
   }
    }
  .selections {
    hr {
      height:0px;
      // background-color: $green;
      padding:0px;
      border: none;
      border-bottom:1px dotted $green;
      opacity: .7;
    }
  }
  .spec {
    color: $green;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Creepster', cursive;
    letter-spacing: 1px;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, .9);
  }
  </style>