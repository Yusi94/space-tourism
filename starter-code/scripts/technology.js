const technologyImage = document.querySelectorAll('picture source');
const technologyName = document.querySelector('.name');
const technologyDescription = document.querySelector('.description');

fetch('./data.json')
.then(response => response.json())
.then(data => {
    tabList.addEventListener('click', e => {
        if(e.target.matches('button')) {
            switch(e.target.id) {
                case 'launch-vehicle':
                    technologyImage[0].srcset = data.technology[0].images.landscape;
                    technologyImage[1].srcset = data.technology[0].images.portrait;
                    technologyName.textContent = data.technology[0].name;
                    technologyDescription.textContent = data.technology[0].description;
                    break;
                case 'spaceport':
                    technologyImage[0].srcset = data.technology[1].images.landscape;
                    technologyImage[1].srcset = data.technology[1].images.portrait;
                    technologyName.textContent = data.technology[1].name;
                    technologyDescription.textContent = data.technology[1].description;
                    break;
                case 'space-capsule':
                    technologyImage[0].srcset = data.technology[2].images.landscape;
                    technologyImage[1].srcset = data.technology[2].images.portrait;
                    technologyName.textContent = data.technology[2].name;
                    technologyDescription.textContent = data.technology[2].description;
                    break;
            }
        }
    })
});