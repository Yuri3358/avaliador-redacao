const dataComponent = {
    template: dataTemplate,
    data() {
        return {
            authors: []
        }
    },
    mounted() {
        this.fetchAuthors()
    },
    methods: {
        fetchAuthors() {
            colRef.get().then(snapshot => {
                snapshot.forEach(doc => {
                    const authorsData = doc.data()
                    authorsData.name = doc.id
                    this.authors.push(authorsData)
                    this.authors.sort((a, b) => a.name.localeCompare(b.name))
                })
            })
        },
        sortByName() {
            this.authors.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByScore() {
            this.authors.sort((a, b) => b.media_final - a.media_final)
        }
    }
}

exports = {dataComponent}