import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-none text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}