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
            showbooks: 'true',
            books: [
                {title: 'name of the wind' , author: 'patrick rothfuss'},
                {title: 'the way of kings' , author: 'brandon sanderson'},
                {title: 'the final empire' , author: 'brandon sanderson'},
            ]
        }
    },
    methods: {
        toggleShowbooks() {
            this.showbooks = !this.showbooks
        },

    }
})

app.mount('#app')