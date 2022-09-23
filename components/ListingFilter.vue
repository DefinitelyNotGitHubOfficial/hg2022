<template>
    <div id="filter">
        <!-- listings filter loaded
        <button @click="sort()">sort</button> -->
        <div class="title"><span class="material-symbols-outlined">tune</span>Filter</div>
        <div class="selections">
            <form>
                <input type="checkbox" class="check" value="Attraction" checked @click="sort('Attraction', $event)">
                <label> Attractions</label><br>
                <input type="checkbox" class="check" value="Event" checked @click="sort('Event', $event)">
                <label> Events</label><br>
                <input type="checkbox" class="check" value="Movie" checked @click="sort('Movie', $event)">
                <label> Movies</label><br>
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
            }
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
                types:['Attraction', 'Event', 'Movie'],
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
    padding:10px 0px;
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
    padding:15px;
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
</style>