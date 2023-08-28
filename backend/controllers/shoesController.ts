import { Request, Response } from "express";
import Shoe from "../models/shoes";

export const getShoes = async (req: Request, res: Response) => {
  try {
    const shoes = await Shoe.find();
    res.status(200).json(shoes);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export const getShoe = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const shoe = await Shoe.findById(id);
    if (shoe) {
      res.status(200).json(shoe);
    }
    else {
      res.status(404).json({ message: `Shoe with id ${id} not found` });
    }
  }
  catch (err: any) {
    res.status(404).json({ message: err.message });
  }
}

export const postShoe = async (req: Request, res: Response) => {
  const { name, price, image, discount } = req.body;
  const shoe = new Shoe({ name, price, image, discount });
  try {
    const savedShoe = await shoe.save();
    res.status(201).json(savedShoe);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export const patchShoe = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const shoe = await Shoe.findByIdAndUpdate(id, {
      ...req.body,
    });
    if (shoe) {
      res.status(200).json({ message: `Shoe with id ${id} updated` });
    }
    else {
      res.status(404).json({ message: `Shoe with id ${id} not found` });
    }
  }
  catch (err: any) {
    res.status(404).json({ message: err.message });
  }
}



export const deleteShoe = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const shoe = await Shoe.findByIdAndDelete(id);
    if (shoe) {
      res.status(200).json({ message: `Shoe with id ${id} deleted` });
    }
    else {
      res.status(404).json({ message: `Shoe with id ${id} not found` });
    }
  }
  catch (err: any) {
    res.status(404).json({ message: err.message });
  }
}
