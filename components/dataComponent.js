const dataComponent = {
    template: dataTemplate,
    data() {
        return {
            authors: Vue.ref([]),
            authorsCounter: 0,
            selectedAuthor: ""
        }
    },
    mounted() {
        this.fetchAuthors()
    },
    methods: {
        fetchAuthors() {
            let data = []
            colRef.get().then(snapshot => {
                snapshot.forEach(doc => {
                    const authorsData = doc.data()
                    authorsData.name = doc.id
                    data.push(authorsData)
                    data.sort((a, b) => a.name.localeCompare(b.name))
                    this.authorsCounter = data.length
                })
                this.authors.value = data
            })
        },
        sortByName() {
            this.authors.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByScore() {
            this.authors.sort((a, b) => b.media_final - a.media_final)
        },
        deleteAuthor(author) {
            colRef.doc(author).delete()
            .then(this.fetchAuthors())

            this.selectedAuthor = ""
            this.$refs.clearInput.focus()
            
        }
    }
}

exports = {dataComponent}