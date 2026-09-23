import type { Review } from "@/data/reviews";
import StarRating from "./StarRating";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <StarRating rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-foreground leading-relaxed">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <footer className="mt-4 border-t border-border pt-4">
        <p className="font-medium">{review.author}</p>
        <p className="mt-1 text-sm text-muted">
          {review.menuOrdered && `주문: ${review.menuOrdered}`}
          {review.menuOrdered && review.date && " · "}
          {review.date}
        </p>
      </footer>
    </article>
  );
}
