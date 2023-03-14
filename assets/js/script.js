'use strict';

document.getElementById('start').addEventListener('click', function () {
    let removePanel = document.getElementById('start-panel');
    let addPanel = document.getElementById('play-area');

    removePanel.style.display = 'none';
    addPanel.style.display = 'block';

})