<template>
    <div class="calendar">
        <div class="title"><span class="material-symbols-outlined">today</span>October</div>
        <div class="days">
            <div class="dayOfTheWeek">Sun</div>
            <div class="dayOfTheWeek">Mon</div>
            <div class="dayOfTheWeek">Tue</div>
            <div class="dayOfTheWeek">Wed</div>
            <div class="dayOfTheWeek">Thu</div>
            <div class="dayOfTheWeek">Fri</div>
            <div class="dayOfTheWeek">Sat</div>
            <div class="day september" data="2022-09-25" @click="selectDay('2022-09-25', $event)">25</div>
            <div class="day september" data="2022-09-26" @click="selectDay('2022-09-26', $event)">26</div>
            <div class="day september" data="2022-09-27" @click="selectDay('2022-09-27', $event)">27</div>
            <div class="day september" data="2022-09-28" @click="selectDay('2022-09-28', $event)">28</div>
            <div class="day september" data="2022-09-29" @click="selectDay('2022-09-29', $event)">29</div>
            <div class="day september" data="2022-09-30" @click="selectDay('2022-09-30', $event)">30</div>
            <div class="day october" data="2022-10-01" @click="selectDay('2022-10-01', $event)">1</div>
            <div class="day october" data="2022-10-02" @click="selectDay('2022-10-02', $event)">2</div>
            <div class="day october" data="2022-10-03" @click="selectDay('2022-10-03', $event)">3</div>
            <div class="day october" data="2022-10-04" @click="selectDay('2022-10-04', $event)">4</div>
            <div class="day october" data="2022-10-05" @click="selectDay('2022-10-05', $event)">5</div>
            <div class="day october" data="2022-10-06" @click="selectDay('2022-10-06', $event)">6</div>
            <div class="day october" data="2022-10-07" @click="selectDay('2022-10-07', $event)">7</div>
            <div class="day october" data="2022-10-08" @click="selectDay('2022-10-08', $event)">8</div>
            <div class="day october" data="2022-10-09" @click="selectDay('2022-10-09', $event)">9</div>
            <div class="day october" data="2022-10-10" @click="selectDay('2022-10-10', $event)">10</div>
            <div class="day october" data="2022-10-11" @click="selectDay('2022-10-11', $event)">11</div>
            <div class="day october" data="2022-10-12" @click="selectDay('2022-10-12', $event)">12</div>
            <div class="day october" data="2022-10-13" @click="selectDay('2022-10-13', $event)">13</div>
            <div class="day october" data="2022-10-14" @click="selectDay('2022-10-14', $event)">14</div>
            <div class="day october" data="2022-10-15" @click="selectDay('2022-10-15', $event)">15</div>
            <div class="day october" data="2022-10-16" @click="selectDay('2022-10-16', $event)">16</div>
            <div class="day october" data="2022-10-17" @click="selectDay('2022-10-17', $event)">17</div>
            <div class="day october" data="2022-10-18" @click="selectDay('2022-10-18', $event)">18</div>
            <div class="day october" data="2022-10-19" @click="selectDay('2022-10-19', $event)">19</div>
            <div class="day october" data="2022-10-20" @click="selectDay('2022-10-20', $event)">20</div>
            <div class="day october" data="2022-10-21" @click="selectDay('2022-10-21', $event)">21</div>
            <div class="day october" data="2022-10-22" @click="selectDay('2022-10-22', $event)">22</div>
            <div class="day october" data="2022-10-23" @click="selectDay('2022-10-23', $event)">23</div>
            <div class="day october" data="2022-10-24" @click="selectDay('2022-10-24', $event)">24</div>
            <div class="day october" data="2022-10-25" @click="selectDay('2022-10-25', $event)">25</div>
            <div class="day october" data="2022-10-26" @click="selectDay('2022-10-26', $event)">26</div>
            <div class="day october" data="2022-10-27" @click="selectDay('2022-10-27', $event)">27</div>
            <div class="day october" data="2022-10-28" @click="selectDay('2022-10-28', $event)">28</div>
            <div class="day october" data="2022-10-29" @click="selectDay('2022-10-29', $event)">29</div>
            <div class="day october" data="2022-10-30" @click="selectDay('2022-10-30', $event)">30</div>
            <div class="day october" data="2022-10-31" @click="selectDay('2022-10-31', $event)">🎃</div>
            <div class="day november" data="2022-11-01" @click="selectDay('2022-11-01', $event)">1</div>
            <div class="day november" data="2022-11-02" @click="selectDay('2022-11-02', $event)">2</div>
            <div class="day november" data="2022-11-03" @click="selectDay('2022-11-03', $event)">3</div>
            <div class="day november" data="2022-11-04" @click="selectDay('2022-11-04', $event)">4</div>
            <div class="day november" data="2022-11-05" @click="selectDay('2022-11-05', $event)">5</div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    availability:{
        //type: Array, throws an error no matter type
        required: true,
        default: () => {}
    },
    selectedDay:{
        type: String,
        required: true,
        default: () => {}
    }
  },
  mounted(){

    var allDays = document.querySelectorAll('.day')

    setTimeout(() => {
        allDays.forEach((em)=>{
            //selects current Day on load from parent
            if(em.getAttribute('data') == this.selectedDay){
                em.classList.add('current')
            }
            //adds bold text to available days
            this.availability.forEach((el)=>{
                if(em.getAttribute('data') == el){
                    em.classList.add('avail')
                }
                
            })
        })
    }, "300")
  },
  methods: {
      selectDay(day, event){
          if(Array.from(event.target.classList).filter(x=>x == "avail").length > 0){
              var allCurrent = document.querySelectorAll('.current')
              allCurrent.forEach((el) => {
                  el.classList.remove('current')
              })
              event.target.classList.add('current')
              $nuxt.$emit('selectedDay', day)
          }else{
              //do nothing! console.log('no')
          }
      }

  },
  watch: { 
    selectedDay: function(newVal, oldVal) { // watch it
       var allDays = document.querySelectorAll('.day')
       var allCurrent = document.querySelectorAll('.current')
              allCurrent.forEach((el) => {
                  el.classList.remove('current')
              })
       allDays.forEach((em)=>{
            //selects current Day on load from parent
            if(em.getAttribute('data') == this.selectedDay){
                em.classList.add('current')
            }
            //adds bold text to available days
            this.availability.forEach((el)=>{
                if(em.getAttribute('data') == el){
                    em.classList.add('avail')
                }
                
            })
        })
    }
}
}
</script>
<style lang="scss" scoped>

    .calendar {
        //max-width:300px;
        width:100%;
        background-color:$purple;
        color: $green;
        border-radius:3px;
        padding:2px;
        aspect-ratio: 1/1;
        margin-bottom:20px;
    }
    .title {
        text-align:center;
        padding:3px 5px;
        font-weight:300;
        display:flex;
        align-items: center;
        justify-content: center;
        border-bottom:1px dotted $green;
        .material-symbols-outlined {
            font-size:1rem;
            padding-right:3px;
            margin-top:-2px;
        }
    }
    .days {
        display:grid;
        grid-template-columns: 14% 14% 14% 14% 14% 14% 14%;
        gap:1px;
        padding-top:4px;
        //background-color:$green;
    }
    .day {
        font-size:.7rem;
        // border:1px solid $green;
        // border-bottom-width: 0px;
        // border-right-width: 0px;
        display:flex;
        // height:20px;
        // width:20px;
        color: $g-light;
        background-color:$black;
        aspect-ratio: 1/1;
        align-items: center;
        justify-content: center;

    }
    .september, .november {
        background-color:rgba(66, 60, 97, .3);
    }
    .dayOfTheWeek {
        font-size:.7rem;
        text-align: center;
    }
    .avail {
        font-weight: 700;
        color:$green;
        &:hover {
            background-color: $green;
            color:$black;
            cursor:pointer;
        }
    }
    .current {
        background-color: $green;
        color:$black;
    }
</style>