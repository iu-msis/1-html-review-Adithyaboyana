// <!-- ALL CODE IS TAKEN FROM IN CLASS CODE AND MODIFIED -->  

const book = {

    data() {

      return {

        "books": [],

        booksform:{}

        }

    },

    computed: {},

    methods: {

        prettyBirthday() {

            return dayjs(this.person.dob.date)

            .format('D MMM YYYY');

        },

        prettyDollar(n) {

            const d = new Intl.NumberFormat("en-US").format(n);

            return "$ " + d;

        },

        fetchBookData() {

            fetch('/api/books/')

            .then(response => response.json())

            .then((parsedJson) => {

                console.log(parsedJson);

                this.books = parsedJson;

            })

            .catch( err => {

                console.error(err)

            })

        },

        postNewBook(evt) {        

            fetch('api/books/create.php', {

                method:'POST',

                body: JSON.stringify(this.booksform),

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

                this.booksform = {};

            });

            }

        },

    created() {

        this.fetchBookData();

    }

  }

 

Vue.createApp(book).mount('#bookApp');