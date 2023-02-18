const cardTemplate = `
        <div id="card-box">
            <div id="picture">
                <img id="username-picture" height=100 width="100" src="./assets/creatoricon.jpeg"><img/>        
                <p id="username">Yuri3358</p>
            </div>
            <hr/>
            <div id="informations">
                <label for="aboutme" class="labels">Sobre mim</label>
                <p id="aboutme">Desenvolvedor com habilidades questionáveis, mas persistente.</p>
                
                <label for="contacts" class="labels">Social</label>
                <p id="contacts">
                    <a target="_blank" href="https://github.com/Yuri3358" class="profile-links">
                        <i class="bi bi-github">Github</i>
                    </a>
                </p>
            </div>
        </div>
`

exports = {cardTemplate}