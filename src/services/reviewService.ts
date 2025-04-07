import ReviewRepository from "../database/reviewRepository";

class ReviewService {
  private repository: ReviewRepository;

  constructor() {
    this.repository = new ReviewRepository();
  }

  async createReview(data: any) {
    return await this.repository.create(data);
  }

  async getAllReviews() {
    return await this.repository.findAll();
  }

  async getReviewById(id: string) {
    return await this.repository.findById(id);
  }

  async updateReview(id: string, data: any) {
    return await this.repository.update(id, data);
  }

  async deleteReview(id: string) {
    return await this.repository.delete(id);
  }
}

export default ReviewService;
