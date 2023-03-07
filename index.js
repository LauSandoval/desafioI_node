const { Registrar,Leer,Borrar } = require("./operaciones")
const operaciones = process.argv.slice(2)
// console.log(operaciones[1])
if (operaciones[0] === "registrar"){
    // console.log("hola")
    Registrar(operaciones[1], operaciones[2], operaciones[3], operaciones[4], operaciones[5])
    // Registrar()
}else if (operaciones[0] === "leer"){
    // console.log("leer")
    console.log(Leer())
}else if (operaciones[0] === "borrar"){
    // console.log("borrar")
    Borrar()
    console.log('archivo borrado')
}
