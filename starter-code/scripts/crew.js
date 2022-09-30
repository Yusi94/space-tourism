const crewImage = document.querySelector('.crew-members source');
const crewName = document.querySelector('.name');
const crewRole = document.querySelector('.role');
const crewBio = document.querySelector('.crew-bio');

fetch('./data.json')
.then(response => response.json())
.then(data => {
    tabList.addEventListener('click', e => {
        if(e.target.matches('button')) {
            switch(e.target.id) {
                case 'crew-d-hurley':
                    crewImage.srcset = data.crew[0].images.webp;
                    crewName.textContent = data.crew[0].name;
                    crewRole.textContent = data.crew[0].role;
                    crewBio.textContent = data.crew[0].bio;
                    break;
                case 'crew-m-shuttleworth':
                    crewImage.srcset = data.crew[1].images.webp;
                    crewName.textContent = data.crew[1].name;
                    crewRole.textContent = data.crew[1].role;
                    crewBio.textContent = data.crew[1].bio;
                    break;
                case 'crew-v-glover':
                    crewImage.srcset = data.crew[2].images.webp;
                    crewName.textContent = data.crew[2].name;
                    crewRole.textContent = data.crew[2].role;
                    crewBio.textContent = data.crew[2].bio;
                    break;
                case 'crew-a-ansari':
                    crewImage.srcset = data.crew[3].images.webp;
                    crewName.textContent = data.crew[3].name;
                    crewRole.textContent = data.crew[3].role;
                    crewBio.textContent = data.crew[3].bio;
                    break;
            }
        }
    })
});