import { Favourite } from "../models/Favourite.js";

export default class ControllerV1 {
  static async getUniversities(req, res, next) {
    const { name, country } = req.query;

    if (!name || !country) {
      return res.status(400).json({
        message: "Please provide name and country",
      });
    }

    const resp = await fetch(
      `http://universities.hipolabs.com/search?name=${name}&country=${country}`
    );
    const data = await resp.json();

    return res.status(200).json({
      message: "Data fetched successfullu !!!",
      data,
    });
  }

  static async setFav(req, res, next) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "Please Provide name",
      });
    }

    const newFav = await Favourite.create({
      name,
    });

    await newFav.save();

    return res.status(200).json({
      message: "Added to Favs",
    });
  }

  static async getFav(req, res, next) {
    const data = await Favourite.findAll();

    return res.status(200).json({
      message: "data fetched successfully",
      data,
    });
  }
}
