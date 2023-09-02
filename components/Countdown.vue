<template>
    <div  class="lazy-parent">

            <span id="cake"></span>
   

    
    </div>
</template>
<script>
  export default {
    mounted(){
        var countDownDate = new Date("Oct 31, 2023 0:0:0").getTime()





        //sloppy for now but it gets the job done.
        // Get today's date and time
        var now = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("cake").innerHTML = (days+1) + " days until Halloween";
        var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        // document.getElementById("cake").innerHTML = days + " days " + hours + " hours " + minutes + " minutes ";
        document.getElementById("cake").innerHTML = (days+1) + " days until Halloween";
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("cake").innerHTML = "EXPIRED";
        }
        }, 60000);
    }
  }
</script>
<style lang="scss" scoped>
.lazy-parent {
    color: $green;
    font-size:.8rem;
}  
#cake {
    text-align: center;
    font-size: .9rem;
    font-weight: 500;
    width: 100%;
    display: block;
    padding: 5px 0px;
}
</style>