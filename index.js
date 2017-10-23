(function() {
    var btStart = document.getElementById('btStart');
    var btStop = document.getElementById('btStop');
    var content = document.getElementById('content');

    var worker = new Worker('web-worker.js');

    worker.onmessage = function(e) {
        const paragraph = document.createElement('P');
        paragraph.appendChild(document.createTextNode(e.data));

        content.appendChild(paragraph);
    };

    
    btStart.addEventListener('click', function() {
        if(!window.Worker) {
            alert('Workers not supported :(');
            return;
        }

        worker.postMessage({command: 'START'});
        btStart.setAttribute('disabled', true);
        btStop.removeAttribute('disabled');
    });

    btStop.addEventListener('click', function() {
        worker.postMessage({command: 'STOP'});
        btStart.removeAttribute('disabled');
        btStop.setAttribute('disabled', true);
    });
})();