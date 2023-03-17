// const app = Vue.createApp({
//     data() {
//         return {
//             showbooks: 'true',
//             title: 'The final empire',
//             author: 'brandon Sanderson',
//             age: 45,
//             x: 0,
//             y: 0
//         }
//     },
//     methods: {
//         toggleShowbooks() {
//             this.showbooks = !this.showbooks
//         },
//         handleEvent(e, data) {
//             console.log(e, e.type)
//             if (data) {
//                 console.log(data)
//             }
//         },
//         handleMousemove(e) {
//             this.x = e.offsetX
//             this.y = e.offsetY
//         }
//     }
// })

// app.mount('#app')

const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.thenetninja.co.uk',
            showbooks: 'true',
            books: [
                {title: 'name of the wind' , author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
                {title: 'the way of kings' , author: 'brandon sanderson', img: 'assets/2.jpg', isFav:  false },
                {title: 'the final empire' , author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
            ]
        }
    },
    methods: {
        toggleShowbooks() {
            this.showbooks = !this.showbooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')