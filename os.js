const os = require('os')

const user = os.userInfo()

console.log(user)

console.log(os.uptime())

const current = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),

}
console.log(current)