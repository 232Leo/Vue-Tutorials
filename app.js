const app = Vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: 'brandon Sanderson',
            age: 45
        }
    },
    medthods: {
        changeTitle(title) {
            //this.title = 'Words of Radiance'
            this.title = title
        }
    }
})

app.mount('#app')