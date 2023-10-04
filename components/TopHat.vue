<template>
    <div id="float-header">
        <header>
            <div class="brand"><a href="/"><h1>Hairy Ghost</h1></a></div>
            <div class="search">
                <form>
                    <span class="material-symbols-outlined">search</span>
                    <input id="search" placeholder="Search for Haunts, Houses, Attractions & Movies" />
                </form>
            </div>
            <div class="contact">
                <!-- <nuxt-link to="/contact">
                    <span class="material-symbols-outlined">forum</span>
                </nuxt-link> -->
                <!-- <Countdown /> -->
                <Contact />
            </div>
        </header>


         <!-- <div><span style="color:white">{{reformedData.length}}</span></div> -->
        <div class="searchModal" v-bind:class="{ visible: visible }">
            <div class="searchwindow">
                <div class="searchwindowTop">
                    <div class="closesearch" @click="close()">  
                        <span class="material-symbols-outlined">close</span>
                    </div>
                    <div class="totals">
                    <span class="material-symbols-outlined">equalizer</span>
                    <em>{{this.results.length}}&nbsp;</em> matches out of <em>&nbsp;{{reformedData.length}}&nbsp;</em> listings
                    </div>
                </div>
                 
                
                <br /><br />
                <Listings :selectedData="this.results" />
            </div>
        </div>



    </div>
</template>
<script>
    export default {
        mounted(){
            document.addEventListener("keyup", (e) => {
                
                if(document.getElementById('search').value.length > 2){
                    this.visible = true
                    this.results = []
                    this.reformedData.forEach((el) => {
                        if(el.title.toUpperCase().indexOf(document.getElementById('search').value.toUpperCase()) > -1){
                            this.results.push(el)
                        }
                    });
                } else {
                 this.visible = false
                }
            });
        },
        props:{
            reformedData:{
                type: Array,
                required: true,
                default: () =>{}
            }
        },
        data(){
            return {
                visible: false,
                results: []
            }
        },
        methods: {
            close(){
                this.visible = false;
                document.getElementById('search').value = ''
                console.log('close dinwo')
            }
        }
    }

</script>
<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
    // @import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0';
    
    #float-header {
        position:fixed;
        top:0;
        left:0;
        width:100vw;
        z-index:3000;
    }

    header {
        display: grid;
        z-index:2000;
        grid-template-columns: 90px auto 50px;
        gap: 10px;
        width:100%;
        max-width:900px;
        margin: 0 auto 20px auto;
        min-width:350px;
        width:100%;
        background-color:$purple;
        //border-bottom-left-radius: $sm-rad;
        //border-bottom-right-radius: $sm-rad;
        border-bottom:1px dotted $green;
        div {
            //border:1px solid red;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        a {
            color:$purple;
            text-decoration: none;
        }
    }
    h1 {
        font-family: 'Creepster', cursive;
        padding:0px;
        margin:0px;
        font-size:2rem;
        line-height:1.6rem;
        text-align:center;
        color:$green;
    }
    .contact{
        .material-symbols-outlined {
            background-color:$green;
            padding:7px;
            border-radius: 50px;
            cursor: pointer;
        }
    }
    .search{
        .material-symbols-outlined {
            position: absolute;
            margin-top:5px;
            margin-left:10px;
        }
    }
    
    form {
        width:calc(100% - 60px);
        margin-left:-50px;
        }
    input {
        border:none;
        outline: none;
        padding:10px 10px 10px 40px;
        width:100%;
        background-color: $green;
        border-radius: 20px;
        text-overflow: ellipsis;
    }
    .brand {
        padding:15px 0 15px 15px;
    }
    .contact {
        padding:15px 15px 15px 0;
    }
    .contactModal {
        position:fixed;
        margin-right:0px;
        width:100vw;
        height:100vh;
        left:0;
        background-color:rgba(0,0,0,0.9);
        z-index:100;
        display:flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        display:none;
    }
    .visible.contactModal {
        display:flex;
    }
    
    .inner {
        background-color:$purple;
        color:$green;
        padding:15px;
        border-radius:3px;
        box-shadow:1px 1px 5px 2px rgba(20, 254, 114, 0.6);
        width:40vw;
        height:52vh;
        display:block;
        font-size:1.2rem;
        position:relative;
        form {
            margin:0;
            width:100%;
        }
        input, textarea {
            border-radius:3px;
            margin:10px 0;
            background-color:#fff;
            padding: 10px 15px;
            outline:none;
            border:none;
            width:calc(100% - 30px);
        }
        textarea {
            //width:100%;
            height:70px;
            width:calc(100% - 30px);
        }
        button {
            background-color:$green;
            border:none;
            outline:none;
            width:100%;
            padding:15px;
            border-radius:3px;
            margin:10px auto;
        }
    }
    .close{
        position: absolute;
        width:calc(100% - 30px);
        text-align: right;
        color:$green;
        font-weight:400;
        font-size:1rem;
        display:block;
        cursor: pointer;
    }
    // @media only screen and (max-width: 600px) {
    //     .inner {
    //         width:70vw;
    //         height:50vh;
    //     }
    // }
    .searchModal {
        position: fixed;
        top:0px;
        left:0;
        height:100%;
        width:100%;
        z-index:-1;
        background-color:rgba(0,0,0,0.7);
        display: none;

    }
    .searchwindow {
        width:85%;
        max-width:800px;
        margin:15px auto 0 auto;
        color:white;
        background-color:$purple;
        padding:15px;
        border-radius:3px;
        overflow-y: scroll;
        height:70%;
        position: relative;
        border:1px solid $green;
        margin-top:100px;
    }
    .closesearch {
        left:calc(100% - 30px);
        top:10px;
        font-weight: 400;
        cursor:pointer;
        position: absolute;
        z-index:1001;
        //color: $purple;
        color: $green;
        //background-color: $green;
        //padding:10px 7px 14px 7px;
        font-size:1.4rem;
        border-radius:50%;
        line-height:0;  
        //border:2px solid $white;
        //box-shadow:2px 2px 2px 2px rgba(0,0,0,0.2);
    }
    .visible {
        display:block;
    }
    .totals {
        color:$green;
        padding: 0 0 15px 0;
        display:flex;
        justify-items: center;
        em {
            font-style: normal;
            font-weight:400;
        }
        .material-symbols-outlined {
            font-size: 1rem;
            padding-right:3px;
            margin-top:1px;
        }
    }
    .searchwindowTop {
        position: fixed;
        background-color: rgb(29, 24, 45);
        // background-color:gray;
        width:calc(85% - 10px);
        max-width:790px;
        padding: 15px 15px 0px 15px;
        margin-top:-15px;
        margin-left: -10px;
    }
</style>