<template>
    <div id="weekViewParent"> 
        <div id="weekView">
            <div id="left" @click="left()"><span class="material-symbols-outlined">arrow_forward_ios</span></div>
            <div id="window">
                <div id="sled">
                    <div class="day" data="2022-09-25" @click="selectDay('2022-09-25', $event)">Sun<br />Sep 25</div>
                    <div class="day" data="2022-09-26" @click="selectDay('2022-09-26', $event)">Mon<br />Sep 26</div>
                    <div class="day" data="2022-09-27" @click="selectDay('2022-09-27', $event)">Tue<br />Sep 27</div>
                    <div class="day" data="2022-09-28" @click="selectDay('2022-09-28', $event)">Wed<br />Sep 28</div>
                    <div class="day" data="2022-09-29" @click="selectDay('2022-09-29', $event)">Thu<br />Sep 29</div>
                    <div class="day" data="2022-09-30" @click="selectDay('2022-09-30', $event)">Fri<br />Sep 30</div>
                    <div class="day" data="2022-10-01" @click="selectDay('2022-10-01', $event)">Sat<br />Oct 1</div>
                    <div class="day" data="2022-10-02" @click="selectDay('2022-10-02', $event)">Sun<br />Oct 2</div>
                    <div class="day" data="2022-10-03" @click="selectDay('2022-10-03', $event)">Mon<br />Oct 3</div>
                    <div class="day" data="2022-10-04" @click="selectDay('2022-10-04', $event)">Tue<br />Oct 4</div>
                    <div class="day" data="2022-10-05" @click="selectDay('2022-10-05', $event)">Wed<br />Oct 5</div>
                    <div class="day" data="2022-10-06" @click="selectDay('2022-10-06', $event)">Thu<br />Oct 6</div>
                    <div class="day" data="2022-10-07" @click="selectDay('2022-10-07', $event)">Fri<br />Oct 7</div>
                    <div class="day" data="2022-10-08" @click="selectDay('2022-10-08', $event)">Sat<br />Oct 8</div>
                    <div class="day" data="2022-10-09" @click="selectDay('2022-10-09', $event)">Sun<br />Oct 9</div>
                    <div class="day" data="2022-10-10" @click="selectDay('2022-10-10', $event)">Mon<br />Oct 10</div>
                    <div class="day" data="2022-10-11" @click="selectDay('2022-10-11', $event)">Tue<br />Oct 11</div>
                    <div class="day" data="2022-10-12" @click="selectDay('2022-10-12', $event)">Wed<br />Oct 12</div>
                    <div class="day" data="2022-10-13" @click="selectDay('2022-10-13', $event)">Thu<br />Oct 13</div>
                    <div class="day" data="2022-10-14" @click="selectDay('2022-10-14', $event)">Fri<br />Oct 14</div>
                    <div class="day" data="2022-10-15" @click="selectDay('2022-10-15', $event)">Sat<br />Oct 15</div>
                    <div class="day" data="2022-10-16" @click="selectDay('2022-10-16', $event)">Sun<br />Oct 16</div>
                    <div class="day" data="2022-10-17" @click="selectDay('2022-10-17', $event)">Mon<br />Oct 17</div>
                    <div class="day" data="2022-10-18" @click="selectDay('2022-10-18', $event)">Tue<br />Oct 18</div>
                    <div class="day" data="2022-10-19" @click="selectDay('2022-10-19', $event)">Wed<br />Oct 19</div>
                    <div class="day" data="2022-10-20" @click="selectDay('2022-10-20', $event)">Thu<br />Oct 20</div>
                    <div class="day" data="2022-10-21" @click="selectDay('2022-10-21', $event)">Fri<br />Oct 21</div>
                    <div class="day" data="2022-10-22" @click="selectDay('2022-10-22', $event)">Sat<br />Oct 22</div>
                    <div class="day" data="2022-10-23" @click="selectDay('2022-10-23', $event)">Sun<br />Oct 23</div>
                    <div class="day" data="2022-10-24" @click="selectDay('2022-10-24', $event)">Mon<br />Oct 24</div>
                    <div class="day" data="2022-10-25" @click="selectDay('2022-10-25', $event)">Tue<br />Oct 25</div>
                    <div class="day" data="2022-10-26" @click="selectDay('2022-10-26', $event)">Wed<br />Oct 26</div>
                    <div class="day" data="2022-10-27" @click="selectDay('2022-10-27', $event)">Thu<br />Oct 27</div>
                    <div class="day" data="2022-10-28" @click="selectDay('2022-10-28', $event)">Fri<br />Oct 28</div>
                    <div class="day" data="2022-10-29" @click="selectDay('2022-10-29', $event)">Sat<br />Oct 29</div>
                    <div class="day" data="2022-10-30" @click="selectDay('2022-10-30', $event)">Sun<br />Oct 30</div>
                    <div class="day" data="2022-10-31" @click="selectDay('2022-10-31', $event)">Mon<br />Oct 31</div>
                    <div class="day" data="2022-11-01" @click="selectDay('2022-11-01', $event)">Tue<br />Nov 1</div>
                    <div class="day" data="2022-11-02" @click="selectDay('2022-11-02', $event)">Wed<br />Nov 2</div>
                    <div class="day" data="2022-11-03" @click="selectDay('2022-11-03', $event)">Thu<br />Nov 3</div>
                    <div class="day" data="2022-11-04" @click="selectDay('2022-11-04', $event)">Fri<br />Nov 4</div>
                    <div class="day" data="2022-11-05" @click="selectDay('2022-11-05', $event)">Sat<br />Nov 5</div>
                
                </div>
            </div>
            <div id="right" @click="right()"><span class="material-symbols-outlined">arrow_forward_ios</span></div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            right(){
                this.sledPosition = this.sledPosition - 71;
                document.getElementById('sled').style.left = `${this.sledPosition}px` 
            },
            left(){
                this.sledPosition = this.sledPosition + 71;
                document.getElementById('sled').style.left = `${this.sledPosition}px` 
            },
            selectDay(day, event){
                var allCurrent = document.querySelectorAll('.selected')
                allCurrent.forEach((el) => {
                    el.classList.remove('selected')
                })
                event.target.classList.add('selected')
                $nuxt.$emit('selectedDay', day)
            },
            setDate(){
                console.log('hey dude')
                //this.question = 'https://demo.jaredfuller.com/hg/index.php?dates=2022-09-30&type=event,movie,attraction'
                this.$fetch()
                //var updatedDay = fetch('https://demo.jaredfuller.com/hg/index.php?dates=2022-09-10&type=event,movie,attraction').then(res => res.json())

                //console.log(updatedDay)
                //$nuxt.$emit('everything', updatedDay)
            },
            goToDay(){
                var month = parseInt(this.selectedDay.slice(5,7))
                var day = parseInt(this.selectedDay.slice(8,10))
                if(month == 9){  
                    var movement = (day - 25) 
                    if(movement == 0){
                        this.sledPosition = 0
                    }
                    else {
                        this.sledPosition = -(movement * 71)
                    }
                    document.getElementById('sled').style.left = `${this.sledPosition}px`
                }
                if(month == 10){
                    var movement = -426 
                    this.sledPosition = movement - ((day * 71) - 71)
                    document.getElementById('sled').style.left = `${this.sledPosition}px`
                }
                if(month == 11){
                    var movement = -2627
                    this.sledPosition = movement - ((day * 71) - 71)
                    document.getElementById('sled').style.left = `${this.sledPosition}px`
                }


                var allCurrent = document.querySelectorAll('.selected')
                allCurrent.forEach((el) => {
                    el.classList.remove('selected')
                })

                const allDays = document.querySelectorAll('.day')
                allDays.forEach((el)=>{
                    if(el.getAttribute('data') == this.selectedDay){
                        el.classList.add('selected')
                    }
                })
            }
        },
        data(){
            return {
                sledPosition:0,
                newb:["this thing"],
                question: 'https://demo.jaredfuller.com/hg/index.php?dates=2022-09-10&type=event,movie,attraction'
            }
        },
        props:{
            selectedDay:{
                type: String,
                required: true,
                default: () => {}
            },
            // data:{
            //     //type: Array,
            //     required: true,
            //     default: () => {}
            // }
        },
        // async fetch() {
        //     var data = await fetch(this.question).then(res => res.json())
        //     console.log(data)
        //     //this.newb = data
        // },
        // fetchOnServer: true,
        mounted(){
            document.getElementById('sled').style.left = `${this.sledPosition}px`

            this.goToDay();

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
        watch: { 
      	    selectedDay: function(newVal, oldVal) { // watch it
                //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
                this.goToDay();
            }
        }
    }
//document.getElementById('sled').style.left = '0px'
</script>
<style lang="scss" scoped>
    #weekViewParent {
        margin-bottom:15px;
         @include mq(max, 600px){
            width: calc(100% - 30px);
            margin:0 auto 20px auto; 
        }
    }
    #weekView {
        background-color:$purple;
        color: $green;
        display:inline-block;
        width: 100%;
        display: grid;
        grid-template-columns: 40px auto 40px;
        height:55px;
    }
    #left {
        transform: rotate(180deg);
    }
    #left, #right {
        //background-color: red;
        display:flex;
        align-items: center;
        justify-content: center;
        padding:5px;
        cursor:pointer;
    }
    #window {
        //background-color:
        width:100%;
        overflow:hidden;
    }
    #sled {
        width:4000px;
        display:flex;
        flex-direction: row;
        position: relative;
        left:0;
        transition: all .5s;
    }
    .day {
        width:65px;
        //background-color:lightcoral;
        //border:1px solid $green;
        display:flex;
        aspect-ratio: 5/4;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height:1rem;
        margin-right: 6px;
        font-size:.9rem;
        //padding: 3px 0px;
        cursor: pointer;
    }
    .selected {
        font-weight: 500;
        border-bottom:2px solid $green;
    }
    .testbutton {
        display: inline-block;
        padding:10px;
        border-radius:5px;
        margin:10px;
        background-color: $green;
    }
</style>