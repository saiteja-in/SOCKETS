const express=require('express')
const app=express();
const http=require('http');
const server=http.createServer(app);
const {Server}=require('socket.io')
const io=new Server(server)
const path=require('path');
//we are wrapping http server inside socker io server
const PORT=3000;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

io.on('connection',(socket)=>{
    socket.on("good",(msg)=>{
        console.log(msg)
    })
})


server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})