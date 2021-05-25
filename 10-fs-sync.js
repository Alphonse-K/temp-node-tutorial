const { readFileSync, writeFileSync } = require('fs');
console.log('start with the task')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/subfolder/sync-result.txt', 
    `Hello this is the result: ${first} and ${second}`,
    { flag: 'a' }
    )
console.log('done with the task')
console.log('starting the next one')

