<template>
    <div  class="lazy-parent">
        <div class="graphic"><img src="images/grave.svg" /></div>
        <div>
            <p>Hairy ghost is your guide to the Twin Cities Halloween scene.</p>
            <h1>Hairy Ghost is resting for now. <br /> He'll be back this fall.</h1>
            <!-- Yeah, we're feeling it too...  but don't worry, Holloween will return next year, and with it, Hairy Ghost!<br /> -->
            <h2><span id="cake"></span> until Halloween.</h2>
        </div>

    
    </div>
</template>
<script>
  export default {
    mounted(){
        var countDownDate = new Date("Oct 10, 2023 0:0:0").getTime()





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
        document.getElementById("cake").innerHTML = days + " days " + hours + " hours "
        + minutes + " minutes ";
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
        document.getElementById("cake").innerHTML = days + " days " + hours + " hours "
        + minutes + " minutes ";
            
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
        color: #fff;
        max-width:800px;
        margin: auto;
        padding: 20px;
        display: flex;
        @media screen and (max-width: 800px){
            flex-direction: column-reverse;
        }
    }
    #cake {
        display: inline-block;
    }
    .graphic {
        height: 100px;
        img {
            min-height: 400px;
            max-height: 550px;
        }
    }
</style>