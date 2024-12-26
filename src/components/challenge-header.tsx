import { Challenge } from "@/types";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { ChevronLeft } from "lucide-react";

interface ChallengeHeaderProps {
  challenge: Challenge;
  onBack: () => void;
}

export function ChallengeHeader({ challenge, onBack }: ChallengeHeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-4 mr-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="font-semibold">Day {challenge.id}</div>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">{challenge.title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <StarRating rating={0} />
        </div>
      </div>
    </header>
  );
}