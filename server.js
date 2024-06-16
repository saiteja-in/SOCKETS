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
    socket.on('message',(msg)=>{
        console.log(msg)
        socket.emit("event",functo() )
        
    })
})
const functo=()=>{
    let sum=0
    for(let i=0;i<6;i++){
        sum+=i;
    }
    return sum;
}

server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})