const dataTemplate = `
    <h1 id="authors-header">Lista de Redatores <span id="authors-counter">{{ authorsCounter }}</span></h1>
    
    <div id="clear-author" @keyup.enter="deleteAuthor(selectedAuthor)">
        <input ref="clearInput" id="author-input" v-model="selectedAuthor" placeholder="Pesquise um Autor">
        <button class="btn btn-danger" @click="deleteAuthor(selectedAuthor)">Excluir Autor</button>    
    </div>

    <div id="table-box">
        <table class="table">
            <thead>
                <th @click="sortByName">Autor</th>
                <th>Escrita Formal</th>
                <th>Comp. Assunto</th>
                <th>Coerência Textual</th>
                <th>Mec. Ling.</th>
                <th>Dir. Humanos</th>
                <th @click="sortByScore">Média Final</th>
            </thead>

            <tbody>
                <tr v-for="author in this.authors.value">
                    <td>{{ author.name }} <i class="bi bi-trash" @click="deleteAuthor(author.name)"></i></td>
                    <td>{{ author.escrita_formal }}</td>
                    <td>{{ author.compreensao_tema }}</td>
                    <td>{{ author.coerencia_redacao }}</td>
                    <td>{{ author.mecanismos_linguisticos }}</td>
                    <td>{{ author.direitos_humanos }}</td>
                    <td>{{ author.media_final }}</td>
                </tr>
            </tbody>
        </table>
    </div>
`

exports = {dataTemplate}