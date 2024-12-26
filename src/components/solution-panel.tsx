import { useState } from 'react';
import { Challenge, ChallengeResult, TestResult } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { StarRating } from '@/components/ui/star-rating';
import { evaluateSolution } from '@/lib/evaluate';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from 'lucide-react';

interface SolutionPanelProps {
  challenge: Challenge;
  code: string;
}

export function SolutionPanel({ challenge, code }: SolutionPanelProps) {
  const [result, setResult] = useState<ChallengeResult | null>(null);

  const handleEvaluate = async () => {
    const evaluationResult = await evaluateSolution(challenge, code);
    setResult(evaluationResult);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button 
          size="lg"
          onClick={handleEvaluate}
          className="w-full"
        >
          Submit Solution
        </Button>
      </div>

      {result && (
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Results</h3>
            <StarRating rating={result.stars} />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Cognitive Complexity</p>
              <p className="text-lg font-medium">{result.cognitiveComplexity}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Execution Time</p>
              <p className="text-lg font-medium">{result.executionTime.toFixed(2)}ms</p>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {result.testResults.map((test, index) => (
              <AccordionItem key={index} value={`test-${index}`}>
                <AccordionTrigger className="flex items-center gap-2">
                  {test.passed ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500" />
                  )}
                  {test.isHidden ? 'Hidden Test Case' : test.description}
                </AccordionTrigger>
                <AccordionContent>
                  {!test.isHidden && (
                    <div className="space-y-2 p-4">
                      <div>
                        <p className="text-sm font-medium">Input:</p>
                        <pre className="text-sm bg-muted p-2 rounded">
                          {JSON.stringify(test.input, null, 2)}
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Expected Output:</p>
                        <pre className="text-sm bg-muted p-2 rounded">
                          {JSON.stringify(test.expectedOutput, null, 2)}
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Your Output:</p>
                        <pre className="text-sm bg-muted p-2 rounded">
                          {JSON.stringify(test.actualOutput, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      )}
    </div>
  );
}