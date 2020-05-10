<template>
    <div id="container">
        <div class="row no-gutters" >
            <div class="col-md-2 no-gutters"> 
                <div class="leftPanel">
                </div>
            </div>
            <div class="col-md-8 no-gutters" >
                <div class="middlePanel">
                    <router-link class="nav-link" to="/podcasts">Podcasts</router-link>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit. Sit amet risus nullam eget felis. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Justo eget magna fermentum iaculis. Tortor vitae purus faucibus ornare suspendisse. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc mattis enim ut tellus elementum. Laoreet sit amet cursus sit amet dictum sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et. Risus sed vulputate odio ut enim. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Fringilla est ullamcorper eget nulla. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Massa tempor nec feugiat nisl pretium fusce id. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit. Sit amet risus nullam eget felis. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Justo eget magna fermentum iaculis. Tortor vitae purus faucibus ornare suspendisse. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Nunc mattis enim ut tellus elementum. Laoreet sit amet cursus sit amet dictum sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et. Risus sed vulputate odio ut enim. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Fringilla est ullamcorper eget nulla. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Massa tempor nec feugiat nisl pretium fusce id.
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
export default {
    name: "Links",
}

</script>

<style>
  h1 {
    margin-bottom: 5%;
    font-family: 'inter'
  }
  .leftPanel{
      height: 25vh;
      width: 100%;
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