import { Challenge } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChallengeCardProps {
  challenge: Challenge;
  onClick: () => void;
}

const difficultyColors = {
  easy: "bg-green-100 text-green-800 hover:bg-green-200",
  medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  hard: "bg-red-100 text-red-800 hover:bg-red-200",
};

export function ChallengeCard({ challenge, onClick }: ChallengeCardProps) {
  return (
    <Card
      className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
            <Code2 className="w-6 h-6" />
          </div>
          <Badge
            variant="secondary"
            className={cn(
              "font-medium",
              difficultyColors[challenge.difficulty]
            )}
          >
            {challenge.difficulty}
          </Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Day {challenge.id}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {challenge.title}
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
    </Card>
  );
}