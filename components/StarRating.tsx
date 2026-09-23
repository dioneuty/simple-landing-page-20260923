type StarRatingProps = {
  rating: number;
  max?: number;
};

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating}점 만점에 ${max}점`}
    >
      {Array.from({ length: max }, (_, index) => {
        const filled = index < rating;
        return (
          <span
            key={index}
            className={filled ? "text-accent" : "text-border"}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
