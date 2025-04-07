import Review from "../models/review";

class ReviewRepository {
  async create(data: any) {
    return await Review.create(data);
  }

  async findAll() {
    return await Review.findAll();
  }

  async findById(id: string) {
    return await Review.findByPk(id);
  }

  async update(id: string, data: any) {
    const review = await Review.findByPk(id);
    if (!review) throw new Error("Review not found");
    return await review.update(data);
  }

  async delete(id: string) {
    const review = await Review.findByPk(id);
    if (!review) throw new Error("Review not found");
    return await review.destroy();
  }
}

export default ReviewRepository;
