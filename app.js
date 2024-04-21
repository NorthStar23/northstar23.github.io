let app = Vue.createApp({
    data() {
        return {
            tickets: []
        }
    },
    created() {
        this.getData()
    },
        methods: {
        async getData() {
            const response = await fetch('tickets1.json')
            this.tickets = await response.json()
        },
    }   
    })

app.mount('#ticketApp')