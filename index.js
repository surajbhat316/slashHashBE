import express from 'express';
const PORT = 8000;
const app = express();


class Server{

    constructor(app, port){
        this.app = app;
        this.port = port;
    }


    listen(){
        this.app.listen((err) => {
            if(err){
                console.log("Error in creating server");
                return;
            }
            console.log("Server strated on PORT "+ this.port)

        })


    }



}


const server = new Server(app, PORT);
server.listen();
