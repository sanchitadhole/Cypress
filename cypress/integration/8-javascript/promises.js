let cypressA = new Promise((resolve, reject) => {
    let r = 45
    if (r === 12) {
        resolve('fullfiled')


    } else {
        reject(' not fullfiled')
    }

})
cypressA.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})


// let cypressA = new Promise((resolve, reject) => {
//     let r = 12
//     if (r === 12) {
//         resolve('promised is fullfiled')


//     } else {
//         reject('promised is not fullfiled')
//     }

// })
// cypressA.then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })

// function mul(x, y) {
//     console.log(`I am multiply ${x*y}`)
// }
// let cypressA = new Promise((resolve, reject) => {
//     let info = {
//         firstName: 'sanchita',
//         rollNo: 12
//     }
//     let notinfo = {
//         error: 123,
//         message: 'noS'
//     }


//     if (info.hasOwnProperty('firstName')) {
//         resolve(info)
//     } else {

//         reject(notinfo)
//     }
// })

// cypressA.then((info) => {
//     console.log(info)

//     if (info.hasOwnProperty('firstName') && info.hasOwnProperty('rollNo')) {
//         mul(12, 13)
//     }
// }).catch((notinfo) => {
//     console.log(`the error code is ${notinfo.error} and message is ${notinfo.message}`)
// })