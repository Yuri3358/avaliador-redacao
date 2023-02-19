const formsTemplate = `
    <div id="form-box" @keyup.enter="saveEssay">
        <h1>Registrar Redator</h1>
        
        <label for="name">Autor</label>
        <input class="entries" id="name" v-model="authorName" autocomplete=off>
        
        <label for="DEF">Escrita Formal</label>
        <input class="scores entries" maxlength="3" id="DEF" v-model="def">
        
        <label for="CT">Compreensão do Tema</label>
        <input class="scores entries" maxlength="3" id="CT" v-model="ct">
        
        <label for="CR">Coerência do Texto</label>
        <input class="scores entries" maxlength="3" id="CR" v-model="cr">
        
        <label for="ML">Mecanismos Linguísticos</label>
        <input class="scores entries" maxlength="3" id="ML" v-model="ml">
        
        <label for="RDH">Direitos Humanos</label>
        <input class="scores entries" maxlength="3" id="RDH" v-model="rdh">
        
        <button class="save btn btn-primary" @click="saveEssay">Registrar</button>
    </div>
`

exports = {formsTemplate}