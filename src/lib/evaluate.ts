import { Challenge, TestResult, ChallengeResult } from '@/types';

function calculateCognitiveComplexity(code: string): number {
  // Simple implementation - counts nested blocks and conditions
  const nestingLevel = (code.match(/{/g) || []).length;
  const conditions = (code.match(/if|while|for|switch/g) || []).length;
  return nestingLevel + conditions;
}

function measureExecutionTime(fn: Function, args: unknown[]): number {
  const start = performance.now();
  fn(...args);
  return performance.now() - start;
}

export async function evaluateSolution(
  challenge: Challenge,
  code: string
): Promise<ChallengeResult> {
  // Create function from code string
  const fn = new Function(`return ${code}`)();
  
  const allTestCases = [...challenge.testCases, ...challenge.hiddenTestCases];
  const testResults: TestResult[] = [];
  let totalExecutionTime = 0;

  // Run all test cases
  for (const testCase of allTestCases) {
    const executionTime = measureExecutionTime(fn, Array.isArray(testCase.input) ? testCase.input : [testCase.input]);
    totalExecutionTime += executionTime;

    try {
      const actualOutput = fn(...(Array.isArray(testCase.input) ? testCase.input : [testCase.input]));
      testResults.push({
        passed: JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput),
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput,
        description: testCase.description,
        isHidden: challenge.hiddenTestCases.includes(testCase)
      });
    } catch (error) {
      testResults.push({
        passed: false,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput: error.message,
        description: testCase.description,
        isHidden: challenge.hiddenTestCases.includes(testCase)
      });
    }
  }

  const cognitiveComplexity = calculateCognitiveComplexity(code);
  const avgExecutionTime = totalExecutionTime / allTestCases.length;

  // Calculate stars based on:
  // 1. All tests passing
  // 2. Cognitive complexity
  // 3. Execution time
  let stars = 0;
  const allTestsPassed = testResults.every(r => r.passed);

  if (allTestsPassed) {
    stars = 5;
    if (cognitiveComplexity > 5) stars--;
    if (cognitiveComplexity > 8) stars--;
    if (avgExecutionTime > 1) stars--;
    if (avgExecutionTime > 5) stars--;
  }

  return {
    stars,
    testResults,
    cognitiveComplexity,
    executionTime: avgExecutionTime
  };
}