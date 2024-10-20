export default class ControllerV1{

    static async getUniversities(req, res,next){
        const { name, country } = req.query;
        
        if(!name || !country){
            return res.status(400).json({
                "message": "Please provide name and country"
            })
        }

        const resp = await fetch(`http://universities.hipolabs.com/search?name=${name}&country=${country}`);
        const data = await resp.json();


        return res.status(200).json({
            "message": "Data fetched successfullu !!!",
            data
        })
    }

}