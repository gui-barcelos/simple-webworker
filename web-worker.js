var currNumber = 0;
var idInterval = 0;

onmessage  = message => {
    switch(message.data.command) {
        case 'START':
            start();
            break;
        case 'STOP':
            stop();
            break;
    }
}

const start = () => {
    idInterval = setInterval(() => {
        currNumber++;
        postMessage(currNumber);
    }, 1000);
}

const stop = () => {
    clearInterval(idInterval);
    idInterval = 0;
    postMessage('STOPED');
}