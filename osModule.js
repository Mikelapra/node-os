const os = require('node:os');

const memoriaTotal = os.totalmem()/(1204*1024);

const memoriaLibre = os.freemem()/(1204*1024);

const os2 = {"Nombre": `${os.version()}`,
   "Tipo": `${os.type()}`,
   "Version": `${os.version()}`,
   "root": `${os.platform()}`,
   "Arquitectura": `${os.arch()}`,
    "CPUs": `${os.cpus().length}`,
    "MemoriaTotal": `${memoriaTotal.toFixed(2)} MB`,
    "MemoriaLibre": `${memoriaLibre.toFixed(2)} MB`,

};

module.exports = {os2}