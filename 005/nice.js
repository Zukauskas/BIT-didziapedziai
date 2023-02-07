const bodyDOM = document.querySelector('body');
const color = document.querySelector('[type=color]');
const fontSize = document.querySelector('[type=range]');

color.addEventListener('change', function (e) {
    bodyDOM.style.backgroundColor = e.target.value;
    settings.color = e.target.value;
    localStorage.setItem('bc', JSON.stringify(settings));
});

fontSize.addEventListener('change', function (e) {
    bodyDOM.style.fontSize = e.target.value + 'px';
    settings.fSize = e.target.value;
    localStorage.setItem('bc', JSON.stringify(settings));
});

// Start

let settings = localStorage.getItem('bc');
if (settings === null) {
    settings = {
        color: '#eee',
        fSize: 12,
    };
    localStorage.setItem('bc', JSON.stringify(settings));
} else {
    settings = JSON.parse(settings);
}

bodyDOM.style.backgroundColor = settings.color;
color.value = settings.color;

bodyDOM.style.fontSize = settings.fSize + 'px';
fontSize.value = settings.fSize;
