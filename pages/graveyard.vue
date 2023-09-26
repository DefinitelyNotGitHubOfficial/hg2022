<template>
    <div class="wrapper">
         <TopHat :reformedData="this.reformedData" /> 
        <div class="brand">
            <div class="goback">
                <a href="/">
                    <span class="material-symbols-outlined">arrow_back</span>Back to the hauntings
                </a>
            </div>
            <div id="gravely">
 <h1>The Graveyard</h1>
            <p>Gone but not forgotten: the bygone Halloween haunts of yesteryears! Where ghostly attractions once had us trembling in our boots, we now only have chilling memories (and the occasional phantom candy wrapper). Let's pour out a little witch's brew in memory of those spooktacular spectacles now resting in Halloween history!</p>
            </div>
           
            <Listings :selectedData="this.sortedData"/>
            <div class="goback">
                <a href="/">
                    <span class="material-symbols-outlined">arrow_back</span>Back to the hauntings
                </a>
            </div>
        </div>
        
    </div>
</template>
<script>
  export default {
    data() {
      return {
        reformedData:[],
        listingData:[],
        sortedData:[
            {
                desc: "Originally in the basement of the Soap Factory (rip), was widely considered to the best haunted attraction in town. The Haunted Basement was infamous for pushing boundaries and providing an immersive and psychologically intense experience for its attendees. Some of it's characteristics include: Artist-Designed: The Haunted Basement wasn't your typical haunted house. Each year, artists and designers were commissioned to craft the scares, resulting in a more avant-garde, surreal, and often deeply unsettling experience. Waivers: Due to its intensity, attendees were required to sign a waiver before entering. This was not a mere formality; the experience was designed to be psychologically challenging. Safe Word: Given the extreme nature of the attraction, participants were given a \"safe word\" they could shout out if they needed to be escorted out before completing the experience. This was occasionally used by attendees who found the experience too overwhelming. Interactive & Personal: The Haunted Basement was more interactive than many haunted attractions. Participants might be separated from their group, forced to crawl, or even interact with the actors in various scenarios. Not Just Jump Scares: While many haunted houses rely on jump scares, the Haunted Basement was known for its deeply eerie atmosphere, psychological manipulation, and sometimes even disturbing imagery. The Soap Factory's Haunted Basement gained a reputation as one of the most intense and artistically unique haunted attractions in the country. Over time, it developed a cult following, drawing attendees from all over who wanted to experience its unique brand of horror.  After it separated from The Soap Factory, it moved to the 2010 builing and then The Rosedale Mall. It operated until 2019 as a haunted house.",
                id: "7666",
                image: "https://dwgaaoggymvqqcevpzxh.supabase.co/storage/v1/object/public/images/aae2f97c-88d2-4c1f-9dd6-c603fdc6adb6/9b392306-523d-4f21-8b3e-edc780f3da7d",
                title: "The Haunted Basement",
                url: "https://hauntedbasement.org/",
                website: "hauntedbasement.org"
            },
            {
                desc: "The Trail of Terror in Minnesota was one of the state's premier Halloween attractions. Located in Shakopee, it has drawn countless visitors over the years for its variety of spooky and entertaining offerings during the Halloween season.  The Trail of Terror featured a variety of haunted attractions, including haunted mazes, walkthroughs, and themed areas that aim to provide scares for all levels of bravery.  Beyond the haunted attractions, the Trail of Terror offered several interactive activities, such as the Zombie Paintball and more, where attendees can engage in themed fun.  The event typically had live entertainment ranging from stage shows to roaming performers, keeping visitors entertained throughout their visit. Various food vendors are usually present, offering both regular and Halloween-themed treats and drinks.",
                id: "7667",
                image: "https://dwgaaoggymvqqcevpzxh.supabase.co/storage/v1/object/public/images/aae2f97c-88d2-4c1f-9dd6-c603fdc6adb6/9d38e82d-79be-405f-9c93-c014926a2a8c",
                title: "The Trail of Terror"
            },
            {
                desc: "Frightmares at Buck Hill, discontinued after the 2013 season, was at held at Buck Hill, which is primarily known as a ski area located in Burnsville. For a number of years, during the Halloween season, Buck Hill was transformed into a collection of haunted attractions that aimed to entertain and scare visitors.  Frightmares typically consisted of multiple haunted houses and haunted trails, each with its own theme. The nature of these attractions often changed from year to year, with some favorites returning and new additions popping up.  The setting of Buck Hill, with its natural woodlands and hills, offered a unique backdrop for these haunted attractions, making the scares even more immersive. Along with the main haunted attractions, there were usually other seasonal activities and entertainment options available.",
                id: "7668",
                image: "https://dwgaaoggymvqqcevpzxh.supabase.co/storage/v1/object/public/images/aae2f97c-88d2-4c1f-9dd6-c603fdc6adb6/3d0e394a-eb08-4a26-a349-d1cca92f8188",
                title: "Frightmares at Buck Hill"
            },
            {
                desc: "ValleySCARE, discontinued after the 2022 season, was located at Valleyfair in Shakopee, Minnesota, hosted annual event during the Halloween season known as \"Halloween Haunt.\" This event transformed the amusement park into a large-scale haunted attraction with various themed areas, mazes, scare zones, and entertainment.  During Halloween Haunt, the park is filled with fog, creepy lighting, and scare actors who roam freely to provide unexpected frights. The attraction typically offers a mix of indoor haunted mazes, outdoor scare zones, live entertainment, and Halloween-themed shows.  In addition to the haunted attractions, many of the park's regular rides and roller coasters remain operational, offering a mix of thrills for attendees.  It was great riding on a rollercoaster in the dark flying through clouds of fog.",
                id: "7669",
                image: "https://dwgaaoggymvqqcevpzxh.supabase.co/storage/v1/object/public/images/aae2f97c-88d2-4c1f-9dd6-c603fdc6adb6/1630bbca-1ec7-4d0f-92d1-d721321ec3da",
                title: "Halloween Haunt at ValleyScare"
            },
            {
                desc: "The Deadly Drive-In was a short lived attaction at the Rosedale Mall.  Flip Phone events hosted an experience where you drive your car into an atmospheric space where actors would do their best to scare you.  The flashing lights, fog and creepy sounds made it a unique and fun experience.",
                id: "7610",
                image: "https://dwgaaoggymvqqcevpzxh.supabase.co/storage/v1/object/public/images/aae2f97c-88d2-4c1f-9dd6-c603fdc6adb6/0d97c5ce-1742-477a-9e38-af444ab0cd38",
                title: "Deadly Drive-In"
            },
            {
                desc: "Twin Cities Zombie Pub Crawl (ZPC) was an annual event that lasted until 2019.  Over the years, it had become one of the largest zombie-themed gatherings and has attracted significant attention both locally and nationally. Here are some highlights about the event: Zombie Transformation: Participants, affectionately referred to as \"zombies,\" dress up in gory makeup and costumes. Many attendees go all out with their costumes, showcasing incredibly detailed and gruesome zombie looks. Multiple Venues: The crawl traditionally involves several bars, clubs, and venues in the Warehouse District of Minneapolis. Attendees can move from one venue to another, enjoying drink specials and various entertainments. Live Entertainment: Beyond just a pub crawl, the event has featured live music acts, DJs, carnival rides, and other entertainment options. Some notable artists have performed at ZPC over the years. World Record: In its heyday, the Zombie Pub Crawl made an attempt to break the Guinness World Record for the \"largest gathering of zombies.\"",
                id: "7611",
                image: "https://dwgaaoggymvqqcevpzxh.supabase.co/storage/v1/object/public/images/aae2f97c-88d2-4c1f-9dd6-c603fdc6adb6/15db6e50-81a3-4829-aaa5-700fcfdb8943",
                title: "The Zombie Pub Crawl"
            },
            {
                desc: "The Minnesota Science Museum had been known to host a variety of special events, including those themed around holidays or specific subjects. One of these events is \"Social Science,\" an adults-only evening where attendees can explore the museum, engage in hands-on science activities, enjoy drinks, and occasionally experience themed entertainment, such as the Halloween season.  Attendees had spooky science demonstrations, crafts and experiments.",
                id: "7612",
                image: "https://dwgaaoggymvqqcevpzxh.supabase.co/storage/v1/object/public/images/aae2f97c-88d2-4c1f-9dd6-c603fdc6adb6/c389c465-8c23-4cb8-92f3-8ca11b915bea",
                title: "Social Science"
            },
            {
                desc: "The legendary horror experience! Consistently named by local media among the best and scariest haunted attractions in Minnesota. For more than two decades, Fright Farm has provided frightening scenes in a blend of horror, local legend, and folklore for tens of thousands of people. Located among the relics of the Ramsey County Poor Farm and Cemetery in a massive, historic barn, Fright Farm was in the heart of the east metro just one mile south of Highway 36 at White Bear Avenue in Maplewood, Minnesota.",
                id: "7613",
                image: "https://dwgaaoggymvqqcevpzxh.supabase.co/storage/v1/object/public/images/aae2f97c-88d2-4c1f-9dd6-c603fdc6adb6/ee530f71-71ba-42b0-9cd0-5ea662b364b1",
                title: "Fright Farm"
            }
        ]
      }

      //police run haunted house?
    },
    async fetch() {
      this.listingData = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1WYlDRdtdIXw4Td7wPqKIEajothVgaRakk58ircwPm7U/values/Sheet1?alt=json&key=AIzaSyBg1PKXrS96HD7eevWzVIvYw70TDdO9LLc").then(res => res.json())
    },
    mounted(){
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
              age: el[9],
              image: el[10],
              website: el[11],
              url: el[12],
            }
          )
        }
      })
    }
}
</script>
<style lang="scss" scoped>
  .wrapper {
    width:100%;
    max-width:900px;
    margin:auto;
  }
  .brand {
      margin-top: 90px;
      color: $green;
      width: 100%;
      max-width: 600px;
      margin: 90px auto 0px auto;
      p {
          font-size: 1.1rem;
          line-height: 1.5rem;
     
      }
  }
  h1 {
        font-family: 'Creepster', cursive;
        padding:0px;
        margin:0px;
        font-size:3rem;
        line-height:4rem;
        text-align:center;
        color:$green;
    }
    .goback {
        display: flex;
        justify-content: left;
        align-items: center;
        line-height: 3rem;
        padding: 0px 15px;
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
    }
    #gravely {
      background-color: rgb(29, 24, 45);
      padding: 15px 15px 5px 15px;
      border-radius: 5px;
      margin-bottom: 20px;
      // width: calc(100% - 60px);
      // margin: auto auto 20px auto;
   }
  
  </style>