import { useParams, useNavigate } from "react-router-dom";
import { Editor } from "@monaco-editor/react";
import { challenges } from "@/lib/challenges";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChallengeHeader } from "@/components/challenge-header";
import { ChallengeInstructions } from "@/components/challenge-instructions";
import { SolutionPanel } from "@/components/solution-panel";
import { useState } from "react";

export default function ChallengePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const challenge = challenges.find(c => c.id === Number(id));
  const [code, setCode] = useState(challenge?.functionSignature || "");

  if (!challenge) {
    return <div>Challenge not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ChallengeHeader challenge={challenge} onBack={() => navigate("/")} />
      
      <div className="flex-1 grid grid-cols-2 gap-4 p-4">
        <div className="space-y-4">
          <div className="h-[calc(100vh-12rem)]">
            <Editor
              height="100%"
              defaultLanguage="typescript"
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                automaticLayout: true,
              }}
            />
          </div>
          <SolutionPanel challenge={challenge} code={code} />
        </div>
        <ChallengeInstructions challenge={challenge} />
      </div>
    </div>
  );
}