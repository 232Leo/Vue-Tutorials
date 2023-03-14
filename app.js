const app = Vue.createApp({
    data() {
        return {
            showbooks: true,
            title: 'The final empire',
            author: 'brandon Sanderson',
            age: 45
        }
    },
    medthods: {
        toggleShowBooks() {
            this.showBooks = !this.showbooks
        }
    }
})

app.mount('#app')