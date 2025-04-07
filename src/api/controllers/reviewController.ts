import { Request, Response } from "express";
import ReviewService from "../../services/reviewService";

const reviewService = new ReviewService();

export const createReview = async (req: Request, res: Response) => {
  try {
    const result = await reviewService.createReview(req.body);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllReviews = async (_req: Request, res: Response) => {
  try {
    const result = await reviewService.getAllReviews();
    res.status(200).json(result);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const result = await reviewService.getReviewById(req.params.id);
    //@ts-ignore
    if (!result) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(result);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const result = await reviewService.updateReview(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const result = await reviewService.deleteReview(req.params.id);
    res.status(200).json({ message: "Review deleted", result });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
