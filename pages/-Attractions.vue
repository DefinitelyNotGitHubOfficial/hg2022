<template>
    <div class="attractions">
        <h1>All Attractions hidden super secret special page plus.</h1>
    </div>
</template>
<script>
export default{
    mounted(){
        console.log(this.$route.params)
    }
}
</script>
<style lang="scss" scoped>
 .attractions {
     color:$green;
 }
</style>