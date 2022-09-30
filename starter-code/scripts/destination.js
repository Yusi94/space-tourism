const destImage = document.querySelector('.destinations source');
const destName = document.querySelector('.name');
const destDescription = document.querySelector('.description');
const destDistance = document.querySelector('.distance');
const destTravel = document.querySelector('.travel');

fetch('./data.json')
.then(response => response.json())
.then(data => {
    tabList.addEventListener('click', e => {
        if(e.target.matches('button')) {
            switch(e.target.id) {
                case 'dest-tab-moon':
                    destImage.srcset = data.destinations[0].images.webp;
                    destName.textContent = data.destinations[0].name;
                    destDescription.textContent = data.destinations[0].description;
                    destDistance.textContent = data.destinations[0].distance;
                    destTravel.textContent = data.destinations[0].travel;
                    break;
                case 'dest-tab-mars':
                    destImage.srcset = data.destinations[1].images.webp;
                    destName.textContent = data.destinations[1].name;
                    destDescription.textContent = data.destinations[1].description;
                    destDistance.textContent = data.destinations[1].distance;
                    destTravel.textContent = data.destinations[1].travel;
                    break;
                case 'dest-tab-europa':
                    destImage.srcset = data.destinations[2].images.webp;
                    destName.textContent = data.destinations[2].name;
                    destDescription.textContent = data.destinations[2].description;
                    destDistance.textContent = data.destinations[2].distance;
                    destTravel.textContent = data.destinations[2].travel;
                    break;
                case 'dest-tab-titan':
                    destImage.srcset = data.destinations[3].images.webp;
                    destName.textContent = data.destinations[3].name;
                    destDescription.textContent = data.destinations[3].description;
                    destDistance.textContent = data.destinations[3].distance;
                    destTravel.textContent = data.destinations[3].travel;
                    break;
            }
        }
    })
});