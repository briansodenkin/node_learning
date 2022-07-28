// const _ = require('lodash')

// const items = [1, [2, [3, 4]]]

// const newItems = _.flattenDeep(items)

// console.log(newItems)

//async

// const { readFile } = require('fs')

// console.log('First')

// readFile('./content/test.txt','utf8', (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log('second')
// })

// console.log('third')

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log('req')
//     res.end('Bye')
// })

// server.listen(5000, ()=>{
//     console.log('Server')
// })

// const { rejects } = require('assert')
// const {readFile} = require('fs')
// const { resolve } = require('path')

// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/test.txt')
// .then(result => console.log(result))

// const EventEmitter = require('events')

// const customEmitter  = new EventEmitter()

// customEmitter.on('response', (name, id)=>{
//     console.log(`${name} ${id}`)
// })
// customEmitter.emit('response')

