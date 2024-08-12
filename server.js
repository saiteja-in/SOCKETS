const express=require('express')
const app=express();
const http=require('http');
const server=http.createServer(app);
const {Server}=require('socket.io')
const io=new Server(server)
const path=require('path');
//we are wrapping http server inside socket io server
const PORT=3002;

app.use(express.static(path.resolve("./public")))
app.get('/',(req,res)=>{
    res.sendFile("/index.html");
})

io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);
       
    
        socket.on('chat message', (msg) => {
            console.log('Message received: ' + msg);
            // Here you can add the message to your chat UI
            io.emit("message",msg)
            io.emit("teja","hello world")
        });
})


server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})
