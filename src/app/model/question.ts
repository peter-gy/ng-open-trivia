export enum Type {
    MULTIPLE,
    BOOLEAN
}

export enum Difficulty {
    EASY,
    MEDIUM,
    HARD
}

export interface Question {
    category: string;
    type: Type;
    difficulty: Difficulty;
    question: string;
    correctAnswer: string;
    incorrectAnswers: Array<string>;
}

export interface QuestionDto {
    numberOfQuestions: number;
    category: number;
    difficulty: Difficulty;
    type: Type;
}