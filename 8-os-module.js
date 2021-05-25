const os = require('os');

const user = os.uptime()
console.log(`This computer uptime is: ${user}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)