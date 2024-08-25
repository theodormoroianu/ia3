
interface ProblemOverview {
    id: number;
    name: string;
    description: string;
    difficulty: string;
    tags: string[];
}

interface ProblemStatement {
    overview: ProblemOverview;
    statement: string;
}


export type { ProblemOverview, ProblemStatement };