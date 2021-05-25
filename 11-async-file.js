const { readFile, writeFile} = require('fs')

console.log('starting code execution')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    console.log('First result generation')
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result;
    console.log('Second result generation')    
       writeFile(
           './content/subfolder/async-result.txt', 
           `Here you are: ${first} and ${second}`, 
           (err, result) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log(`I'm done with all callbacks`)
       })
    })
})


console.log('The code execution is over')