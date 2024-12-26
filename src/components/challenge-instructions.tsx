import { Challenge } from "@/types";
import ReactMarkdown from "react-markdown";
import { Card } from "@/components/ui/card";

interface ChallengeInstructionsProps {
  challenge: Challenge;
}

export function ChallengeInstructions({ challenge }: ChallengeInstructionsProps) {
  return (
    <Card className="p-6 overflow-auto h-full">
      <ReactMarkdown className="prose dark:prose-invert">
        {challenge.description}
      </ReactMarkdown>
    </Card>
  );
}