const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);



const trafficLightY = document.querySelector('#trafficLight1');

function makeYellow() {
    trafficLightY.style.background = ('yellow');
    trafficLightY.removeEventListener('click', makeYellow);
    trafficLightY.addEventListener('click', makeRed);
}

trafficLightY.addEventListener('click', makeYellow);



const trafficLightR = document.querySelector('#trafficLight2');

function makeRed() {
    trafficLightR.style.background = ('red');
    trafficLightR.removeEventListener('click', makeRed);
    trafficLightR.addEventListener('click', makeGreen);
}

trafficLightR.addEventListener('click', makeRed);
