<template>
    <div id="container">
        <div class="row no-gutters" >
            <div class="col-md-2 no-gutters"> 
                <div class="leftPanel">
                </div>
            </div>
            <div class="col-md-8 no-gutters" >
                <div class="middlePanel">
                    <h2> Podcasts </h2>
                    <ul v-for="podcast in podcasts" v-bind:key="podcast.podcast_id">
                        <li><a :href="getEpisodeURL(podcast)"> '{{podcast.get("episode_description")}}'</a>  on <i> {{podcast.get("podcast_name")}} </i> </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2 no-gutters" >
                <div class="rightPanel">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.VUE_APP_AIRTABLE_API_KEY}).base(process.env.VUE_APP_AIRTABLE_MGR_DEV_BASE);
export default {
    name: "Podcasts",
    data() {
      return {
        podcasts: null
      };
    },
    mounted: function(){
      var vm = this;
      let allPodcasts=[]
      base('podcasts').select({
          maxRecords: 1000,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          records.forEach(function(record) {
            allPodcasts.push(record);
          });
          fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
            vm.podcasts=allPodcasts;
            return allPodcasts;
        });
    },
    methods: {
      getEpisodeURL: function(podcast) {
        return podcast.get("episode_url")
      }
    }
}

</script>

<style scoped>
  h1 {
    margin-bottom: 5%;
    font-family: 'inter'
  }
  h2 {
      text-align: center;
  }
  .leftPanel{
      height: 25vh;
      width: 100%;
  }
  ul{
      list-style: " - ";
  }
  a{
      color: #333333
  }
  a:hover {
    color: red;
    }
  .rightPanel{
    height: 0vh;
    width: 100%;
  }
  .middlePanel{
      height: 75vh;
      width:100%;
      font-family:'Karla';
  }
  nav{
      background: lightyellow
  }

  @media screen and (min-width: 768px){
       .leftPanel,.rightPanel{
           height:100vh;
       }
       .middlePanel{
           height: 100vh;
       }
  }
  p{
    /* font-family: 'Comic Sans MS'; */
    font-family: 'Inter', serif;
    text-align: left;
  }
  .leftPanel{
      background: lightyellow;
  }
  .rightPanel{
      background: lightyellow;
  }
  .middlePanel{
      background:whitesmoke
  }

</style>