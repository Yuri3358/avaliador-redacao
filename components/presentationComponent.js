const cardComponent = {
    template: cardTemplate,
    data() {
        return {
            creatorData: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            fetch("https://api.github.com/users/Yuri3358")
            .then(res => res.json())
            .then(output => {
                this.creatorData = output
                console.log(this.creatorData)
            })
        }
    }
}

exports = {cardComponent}