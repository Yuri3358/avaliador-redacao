const formsTemplate = `
    <div id="form-box">
        <h1>Registrar Redator</h1>
        
        <label for="name">Autor</label>
        <input id="name" v-model="authorName">

        <label for="DEF">Escrita formal</label>
        <input id="DEF" v-model="def">

        <label for="CT">Compreensão do Tema</label>
        <input type="number" max="200" id="CT" v-model="ct">
        
        <label for="CR">Coerência do Texto</label>
        <input type="number" max="200" id="CR" v-model="CR">

        <label for="ML">Mecanismos Linguísticos</label>
        <input type="number" max="200" id="ML" v-model="ML">

        <label for="RDH">Direitos Humanos</label>
        <input type="number" max="200" id="RDH" v-model="RDH">

        <button class="save btn btn-success" @click="saveEssay">Registrar</button>
    </div>
`

exports = {formsTemplate}