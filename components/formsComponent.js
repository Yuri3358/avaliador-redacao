const formsComponent = {
    template: formsTemplate,
    data() {
        return {
            authorName: "",
            def: 0, 
            ct: 0,
            cr: 0,
            ml: 0,
            rdh: 0
        }
    },
    methods: {
        async saveEssay() {
            let variables = [this.def, this.ct, this.cr, this.ml, this.rdh]
            let parsedVariables = variables.map(variable => Number(variable))

            let variablesSum = parsedVariables.reduce((acc, current) => acc + current)
            
            await colRef.doc(this.authorName).set({
                escrita_formal: this.def,
                compreensao_tema: this.ct,
                coerencia_redacao: this.cr,
                mecanismos_linguisticos: this.ml,
                direitos_humanos: this.rdh,
                media_final: variablesSum
            })
            this.def = this.ct = this.cr = this.ml = this.rdh = 0, 
            this.authorName = ""
        }
    }
}

exports = {formsComponent}