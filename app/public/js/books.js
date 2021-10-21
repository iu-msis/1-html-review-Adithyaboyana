const BooksData = {

    data() {

      return {
        "books":[],
        offerForm: {}
       }
    },

    methods:{
      fetchBooksData() {
        fetch('/api/books/')
        .then( response => response.json())
        .then( (responseJson) => {
          console.log(responseJson);
          this.books = responseJson;
        })
        .catch( (err) => {
          console.error(err);
      })         
      },
      postNewBook(evt) {
        console.log("Posting!", this.offerForm);
        fetch('api/books/create.php', {
          method:'POST',
          body: JSON.stringify(this.offerForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.books = json;         
          // reset the form
          this.handleResetEdit();
        });   
    }
    },

    created(){
     this.fetchBooksData();
    //  this.postNewBook()
    }

}
Vue.createApp(BooksData).mount('#BooksData1');