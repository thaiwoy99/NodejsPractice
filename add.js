const http = require("http")
const fs = require("fs")


 /*const makeRequest= http.createServer((req,res)=>{

    const Obj1 ={
        age : 21,
        level:400
    }
    
    res.writeHead(200,{"content-type": "text/plain"})
    res.write(JSON.stringify(Obj1))
    res.end()  
})


makeRequest.listen(4000,()=>{
    console.log('helo world')
})
// writing html reponse

const makeRequest= http.createServer((req,res)=>{

    const Obj1 ={
        age : 21,
        level:400
    }
    
    res.writeHead(200,{"content-type": "text/html"})
    res.write('<h1>I am writing html </h1>')
    res.end()  
})


makeRequest.listen(4000,()=>{
    console.log('helo world')
}) 
//reading html response from 'index.html' file using fs.readfileSync

const makeRequest= http.createServer((req,res)=>{

    const Obj1 ={
        age : 21,
        level:400
    }
    
    res.writeHead(200,{"content-type": "text/html"})
    const html = fs.readFileSync("./index.html","utf-8")
    res.write(html)
    res.end()  
})


makeRequest.listen(4000,()=>{
    console.log('helo world')
})

//reading html response from 'index.html' file using fs.creatReadStream

const makeRequest= http.createServer((req,res)=>{

    const Obj1 ={
        age : 21,
        level:400
    }
    
    res.writeHead(200,{"content-type": "text/html"})
    
    fs.createReadStream("./index.html").pipe(res)
    
   // res.end()  
})


makeRequest.listen(4000,()=>{
    console.log('helo world')
})

// html template


const makeRequest= http.createServer((req,res)=>{

    const name="Taiwo"
    
    res.writeHead(200,{"content-type": "text/html"})
    let html = fs.readFileSync("./index.html","utf-8")
    html =html.replace("{{name}}",name)
    res.write(html)
    res.end()  
})


makeRequest.listen(4000,()=>{
    console.log('helo world')
}) */
 // Http routing
 
const makeRequest= http.createServer((req,res)=>{

    if(req.url=="/"){
        res.writeHead(200,{"content-type": "text/plain"})
        res.write("hello world")
        
        res.end()
    }
    
    else if(req.url==="/shop"){
        res.writeHead(200,{"content-type": "text/plain"})
        res.write("Our products")
        
        res.end()
    }
    else if (req.url ==="/about"){
     res.writeHead(200,{"content-type": "text/plain"})
        res.write("I am Taiwo")
       
        res.end()
    }
    else{
        res.writeHead(200,{"content-type": "text/plain"})
      res.write("Page is not found")  
      
      res.end()
    }

})


makeRequest.listen(4000,()=>{
    console.log('helo world')
})