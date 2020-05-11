<template>
    <div class="row no-gutters" >
        <div> 
            <div class="leftPanel">
                <router-link to="/"><p  class="left-panel-item">👩🏾‍💻 Jobs</p></router-link>
                <router-link to="/links"><p  class="left-panel-item">🔗 Links</p></router-link>
                <router-link to="/books"><p  class="left-panel-item">📚 Books</p></router-link>
                <router-link to="/podcasts"><p  class="left-panel-item">🎧 Podcasts</p></router-link>
                <router-link to="/"><p  class="left-panel-item">🗣 Conferences</p></router-link>
                <router-link to="/"><p  class="left-panel-item">🤓 Courses</p></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoBar1"
}
</script>

<style>
  .leftPanel{
      height: 25vh;
      width: 100%;
  }
    @media screen and (min-width: 768px){
       .leftPanel{
           height:100vh;
       }
  }
  p{
    font-family: 'Inter', serif;
    text-align: left;
  }
  .leftPanel{
      background: lightyellow;
  }
  .left-panel-item{
      text-align: center;
      padding-top:8%;
  }
</style>