const network = require('node:os');

const network2= network.networkInterfaces()

console.log(network2)

module.exports = {network2}

// Plantenamiento para mostras solo Familia, dirección e Interno.

// let network3 = [];
// let object;
// network2.forEach(e => {
//     let object = new Object({
//         Familia: e.family,
//         Dirección: e.address
//         Interno: e.internal
//     });
//     network3.push(object);
// }) 