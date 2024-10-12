const fs = require("node:fs")

const fileContents = fs.readFileSync("./file.txt", 'utf-8')
console.log(fileContents)
fs.readFile("./file.txt", "utf-8", (error,data)=>{
    if (error){
        console.log(error)
    }
    else(console.log(data))
})
fs.writeFileSync("./taiwo.text", 'hello Taiwo')
fs.writeFile("taiwo.text", " hello kenny", {flag: 'a'} ,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file written")
    }
})