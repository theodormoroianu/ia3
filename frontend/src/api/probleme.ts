import { ProblemOverview, ProblemStatement } from "../types/problem";

const GetProblemList = async () => {
    // wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create dummy problem.
    const problems: ProblemOverview[] = [{
        id: 1,
        name: "Two Sum",
        description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
        difficulty: "Easy",
        tags: ["Array", "Hash Table"]
    },
    {
        id: 2,
        name: "Add Two Numbers",
        description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit.",
        difficulty: "Medium",
        tags: ["Linked List", "Math"]
    }];
    
    // Copy 10 times the problems to simulate a large list of problems.
    // I need to create new objects, otherwise the reference will be the same.
    for (let i = 0; i < 4; i++) {
        problems.push(...problems.map(problem => {
            return {
                id: problem.id + problems.length,
                name: problem.name,
                description: problem.description,
                difficulty: problem.difficulty,
                tags: problem.tags
            }
        }));
    }

    // Update the ids of the problems.
    problems.forEach((problem, index) => {
        problem.id = index + 1;
    });

    return problems;
}

const GetProblemStatement = async (problemName: string): Promise<ProblemStatement> => {
    // wait for 2 seconds.
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Return a dummy problem statement, where the statement is in markdown.
    return {
        overview: {
            id: 1,
            name: problemName,
            description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
            difficulty: "Easy",
            tags: ["Array", "Hash Table"]
        },
        statement: `# Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Example
\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6

Output: [1,2]
\`\`\`
`
    };
}

export { GetProblemList, GetProblemStatement };