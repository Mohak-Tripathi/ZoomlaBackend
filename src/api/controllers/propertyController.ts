import { Request, Response } from "express";
import PropertyService from "../../services/propertyService";

const propertyService = new PropertyService();

export const createProperty = async (req: Request, res: Response) => {
  try {

    //@ts-ignore
    const result = await propertyService.createProperty(req.body, req.user!.id);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProperties = async (req: Request, res: Response) => {
  try {
    const result = await propertyService.getAllProperties();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getPropertyById = async (req: Request, res: Response) => {
  try {
    const result = await propertyService.getPropertyById(req.params.id);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProperty = async (req: Request, res: Response) => {
  try {

    //@ts-ignore
    const result = await propertyService.updateProperty(req.params.id, req.body, req?.user!.id);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const deleteProperty = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    await propertyService.deleteProperty(req.params.id, req?.user!.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
