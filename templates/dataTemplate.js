const dataTemplate = `
    <h1 id="authors-header">Lista de Redatores</h1>
    <table class="table">
        <thead>
            <th>Autor</th>
            <th>Domínio Escrita Formal</th>
            <th>Compreensão do Tema</th>
            <th>Coerência Textual</th>
            <th>Mecanismos Linguísticos</th>
            <th>Respeito Direitos Humanos</th>
            <th>Média Final</th>
        </thead>

        <tbody>
            <tr v-for="author in this.authors">
                <td>{{ author.name }}</td>
                <td>{{ author.escrita_formal }}</td>
                <td>{{ author.compreensao_tema }}</td>
                <td>{{ author.coerencia_redacao }}</td>
                <td>{{ author.mecanismos_linguisticos }}</td>
                <td>{{ author.direitos_humanos }}</td>
                <td>{{ author.media_final }}</td>
            </tr>
        </tbody>
    </table>
`

exports = {dataTemplate}