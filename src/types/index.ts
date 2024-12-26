export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Challenge {
  id: number;
  title: string;
  difficulty: Difficulty;
  description: string;
  functionSignature: string;
  testCases: TestCase[];
  hiddenTestCases: TestCase[];
  solution: string;
}

export interface TestCase {
  input: unknown;
  expectedOutput: unknown;
  description: string;
}

export interface TestResult {
  passed: boolean;
  input: unknown;
  expectedOutput: unknown;
  actualOutput: unknown;
  description: string;
  isHidden: boolean;
}

export interface ChallengeResult {
  stars: number;
  testResults: TestResult[];
  cognitiveComplexity: number;
  executionTime: number;
}