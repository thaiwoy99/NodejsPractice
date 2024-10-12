const path = require("node:path")
const mysuper = require("./Superhero")

console.log(mysuper.getName())
mysuper.setName(34)
console.log(mysuper.getName())

const Taiwo = require("./Superhero")
console.log(Taiwo.getName())
console.log(__filename)
console.log(path.basename(__filename))
console.log(path.parse(__filename))
console.log(path.format(path.parse(__filename)))
console.log(path.join("/folder1","//folder2" , "index.html"))
console.log(path.join("/folder1","//folder2" , "index.html"))
console.log(path.join("/folder1","//folder2" , "../index.html"))

