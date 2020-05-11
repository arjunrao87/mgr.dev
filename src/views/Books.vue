<template>
    <!-- <div id="container">
        <h1>List of books for Engineering Managers</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Author</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" v-bind:key="book.book_id"> 
              <td><a :href="getBookURL(book)"> {{book.get("book_name")}}</a></td>
              <td>{{book.get("book_description")}}</td>
              <td>{{book.get("book_author")}}</td>
            </tr>
          </tbody>
        </table> 
    </div> -->
    <div id="container">
        <div class="row no-gutters" >
            <div class="col-md-2 no-gutters"> 
                <div class="leftPanel">
                </div>
            </div>
            <div class="col-md-8 no-gutters" >
                <div class="middlePanel">
                    <h2> Books </h2>
                    <ul v-for="book in books" v-bind:key="book.book_id">
                        <li><a :href="getBookURL(book)"> {{book.get("book_name")}}</a>  by <i>{{book.get("book_author")}}</i> </li>
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
    name: "Books",
    data() {
      return {
        books: null
      };
    },
    mounted: function(){
      var vm = this;
      let allBooks=[]
      base('books').select({
          maxRecords: 1000,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          records.forEach(function(record) {
            allBooks.push(record);
          });
          fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
            vm.books=allBooks
            return allBooks;
        });
    },
    methods: {
      getBookURL: function(book) {
        return book.get("book_url")
      }
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