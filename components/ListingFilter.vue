<template>
    <div id="filter">
        <!-- listings filter loaded
        <button @click="sort()">sort</button> -->
        <div class="title"><span class="material-symbols-outlined">tune</span>Filter</div>
        <div class="selections">
            <form>
                <!-- <input type="checkbox" class="check" value="Attraction" checked @click="sort('Attraction', $event)">
                <label> Attractions</label><br>
                <input type="checkbox" class="check" value="Event" checked @click="sort('Event', $event)">
                <label> Events</label><br>
                <input type="checkbox" class="check" value="Movie" checked @click="sort('Movie', $event)">
                <label> Movies</label><br> -->



                <label class="container">Attractions
  <input type="checkbox" checked="checked"  @click="sort('Attraction', $event)">
  <span class="checkmark"></span>
</label>
<label class="container">Events
  <input type="checkbox" checked="checked"  @click="sort('Event', $event)">
  <span class="checkmark"></span>
</label>
<label class="container">Movies
  <input type="checkbox" checked="checked" @click="sort('Movie', $event)">
  <span class="checkmark"></span>
</label>
            </form>





        </div>
    </div>
</template>
<script>
    export default {
        props:{
            sortedData:{
                type: Array,
                required: true,
                default: () =>{}
            },
            currentData:{
                type: Array,
                required: true,
                default: () =>{}
            },
            selectedDay:{
                type: String,
                required: true,
                default: () => {}
            },
        },
        methods: {
            adjust(array, value) {
                var index = array.indexOf(value);

                if (index === -1) {
                    array.push(value);
                } else {
                    array.splice(index, 1);
                }
            },
            sort(type, event){
                //console.log('hit button')
                var updated = [];
                //console.log(type, event)
                this.adjust(this.types, type)
                //console.log(this.types)



                this.currentData.forEach((el) => {
                    //if(el.type == "Movie"){
                    if(el.type.some(r=> this.types.indexOf(r) >= 0)){
                        updated.push(el)
                    }
                })
                $nuxt.$emit('sortedData', updated)
            }
        },
        data(){
            return {
                types:['Attraction', 'Event', 'Movie']
            }
        },
        watch: { 
      	    selectedDay: function(newVal, oldVal) { // watch it
                //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
                this.types = ['Attraction', 'Event', 'Movie']
                // source.checked
                var boxes = document.querySelectorAll('input')
                // /console.log(boxes)
                boxes.forEach((el) => {
                    el.checked = true
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
#filter {
    background-color: $purple;
    margin-bottom:20px;
    border-radius:3px;
    overflow:hidden;
    color: $green;
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
</style>