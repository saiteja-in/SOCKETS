const express=require('express')
const app=express();
const http=require('http');
const server=http.createServer(app);
const {Server}=require('socket.io')
const io=new Server(server)
const path=require('path');
//we are wrapping http server inside socket io server
const PORT=3000;

let users=[]

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

io.on('connection',(socket)=>{
    console.log(`a user is connected with id ${socket.id}`)
    socket.on("send user info",userInfo=>{
        users.push(userInfo)
        console.log(userInfo)
    })
    console.log(users)
})


server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})