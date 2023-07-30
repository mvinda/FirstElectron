document.getElementById("totalmem").style.background="red";

const os = require('os');

document.getElementById("totalmem").style.background="blue";
function getCpu() {
    const cpus = os.cpus();
    if (cpus.length > 0) {
        return cpus[0].model
    } else {
        return "";
    }
}

function getFreemem() {
    return `${convert(os.getFreemem())}G`
}

function getTotalMem() {
    return `${convert(os.getTotalMem())}G`
}

function convert(bytes) {
    return (bytes / 1024 / 1024 / 1024).toFixed(2);
}

document.querySelector('#cpu-arch span').innerHTML = os.arch();
document.querySelector('#cpu span').innerHTML = getCpu();
document.querySelector('#platform span').innerHTML = os.platform();
document.querySelector('#freemem span').innerHTML = getFreemem();
document.querySelector('#totalmem span').innerHTML = getTotalMem();




