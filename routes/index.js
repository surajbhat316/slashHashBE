import express from 'express';
const router = express.Router();
import ControllerV1 from '../controller/index.js';


class RouterV1{

    constructor(router){
        this.router = router;
        this.init();
    }



    init(){
        this.router.get("/", ControllerV1.getUniversities);
        this.router.post("/set-fav", ControllerV1.setFav);
        this.router.get("/get-fav", ControllerV1.getFav);
    }



}

export const newRouter = new RouterV1(router);





