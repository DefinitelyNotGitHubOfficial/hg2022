<template>
    <div id="calendar">
        <div class="title"><span class="material-symbols-outlined">calendar_today</span>Calendar</div>
    </div>
</template>
<style lang="scss" scoped>
#calendar {
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
</style>