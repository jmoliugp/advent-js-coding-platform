import { useNavigate } from "react-router-dom";
import { challenges } from "@/lib/challenges";
import { ChallengeCard } from "@/components/challenge-card";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">25 Days of Coding</h1>
          <p className="text-muted-foreground mt-2">
            Master TypeScript with daily coding challenges
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              onClick={() => navigate(`/challenge/${challenge.id}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}