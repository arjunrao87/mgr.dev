<template>
    <div id="container">
        <div class="row no-gutters" >
            <div class="col-md-2 no-gutters"> 
                <div class="leftPanel">
                    <router-link to="/"><p  class="left-panel-item">👩🏾‍💻 Jobs</p></router-link>
                    <router-link to="/links"><p  class="left-panel-item">🔗 Links</p></router-link>
                    <router-link to="/books"><p  class="left-panel-item">📚 Books</p></router-link>
                    <router-link to="/podcasts"><p  class="left-panel-item">🎧 Podcasts</p></router-link>
                    <router-link to="/"><p  class="left-panel-item">🗣 Conferences</p></router-link>
                    <router-link to="/"><p  class="left-panel-item">🤓 Courses</p></router-link>
                </div>
            </div>
            <div class="col-md-8 no-gutters" >
                <div class="middlePanel">
                    <h2> Links </h2>
                    <ul v-for="datum in data.slice(0, 10)" :key="datum.id">
                        <li><a href=#>{{datum.title}}</a></li>
                    </ul>
                    
                </div>
            </div>
            <div class="col-md-2 no-gutters" >
                <div class="rightPanel">
                    <div>
                        <form class="form-inline my-2 my-lg-0 text-center justify-content-center align-items-center right-panel-item">
                            <input class="form-control w-75 mr-sm-2 " type="search" placeholder="💬" aria-label="Search">
                            <button class="btn-sm btn-outline-secondary my-2 my-sm-0 btn-custom text-center justify-content-center align-items-center" type="submit">Search</button>
                        </form>
                        <!-- <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Links",
    data: function(){
        return {
            data: null
        }
    },
    created: function() {
      axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
          this.data = res.data;
        })
    }
}

</script>

<style>
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
  .left-panel-item{
      text-align: center;
      padding-top:8%;
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
  .right-panel-item{
    padding-top:8%;
    padding-left: 3%;
    padding-bottom: 3%;
  }
  .btn-custom{
      margin-top: 100%;
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