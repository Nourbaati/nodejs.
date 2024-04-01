const http= require('http')


const server= http.createServer((req,res)=>{
       res.statusCode=200
       res.setHeader('content-type','text/html')
       res.write("welcomee\n")



       res.end()


})

server.listen(5000,()=>{console.log('server run with port 5000')})