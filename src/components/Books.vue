<template>
    <div id="container">
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
    </div>
</template>

<script>
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keytaFveWwlPvHFjw'}).base('appylwBgblBsAmQEc');
export default {
    name: "Books",
    data() {
      return {
        books: null
      };
    },
    created: function(){
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
  }
</style>