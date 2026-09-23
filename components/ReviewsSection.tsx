import { reviews } from "@/data/reviews";
import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section
      id="reviews"
      className="mx-auto max-w-6xl px-4 py-16"
      aria-labelledby="reviews-title"
    >
      <div className="mb-12 text-center">
        <h2 id="reviews-title" className="text-3xl font-bold">고객 리뷰</h2>
        <p className="mt-3 text-muted">
          실제 주문 고객들의 생생한 후기
        </p>
        <p className="mt-2 text-lg font-medium text-primary">
          평균 {averageRating.toFixed(1)}점 · {reviews.length}건의 리뷰
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
