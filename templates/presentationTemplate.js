const cardTemplate = `
        <div id="card-box">
            <div id="picture">
                <img id="username-picture" height=100 width="100" :src="creatorData.avatar_url"><img/>        
                <p id="username">{{ creatorData.login }}</p>
            </div>
            <hr/>
            <div id="informations">
                <label for="aboutme" class="labels">Sobre mim</label>
                <p id="aboutme">{{ creatorData.bio }}</p>
                
                <label for="contacts" class="labels">Social</label>
                <p id="contacts">
                    <a target="_blank" :href="creatorData.html_url" class="profile-links">
                        <i class="bi bi-github">Github</i>
                    </a>
                </p>
            </div>
        </div>
`

exports = {cardTemplate}