import { Challenge, Difficulty } from '@/types';

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Sum Two Numbers",
    difficulty: "easy",
    description: `# Sum Two Numbers

Given two numbers, return their sum.

## Examples:
\`\`\`typescript
sum(1, 2) // returns 3
sum(-1, 1) // returns 0
sum(0, 0) // returns 0
\`\`\`

## Notes:
- Numbers can be positive, negative, or zero
- Input numbers will always be integers
`,
    functionSignature: `function sum(a: number, b: number): number {
  // Your code here
}`,
    testCases: [
      {
        input: [1, 2],
        expectedOutput: 3,
        description: "Positive numbers"
      },
      {
        input: [-1, 1],
        expectedOutput: 0,
        description: "Positive and negative"
      }
    ],
    hiddenTestCases: [
      {
        input: [0, 0],
        expectedOutput: 0,
        description: "Zero values"
      },
      {
        input: [-5, -3],
        expectedOutput: -8,
        description: "Negative numbers"
      }
    ],
    solution: `function sum(a: number, b: number): number {
  return a + b;
}`
  },
  // Add more challenges here...
];