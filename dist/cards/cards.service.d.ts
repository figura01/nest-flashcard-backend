import { Card } from 'src/interfaces/card.interface';
import { Answer } from 'src/interfaces/answer.interface';
export declare class CardsService {
    answers: Answer[];
    cards: {
        id: number;
        question: string;
        answer: string;
    }[];
    getCards(): Promise<Card[]>;
    selectCardsUseeFailedToAnswer(): {
        id: number;
        question: string;
        answer: string;
    }[];
    saveAnswer(answers: any): Promise<{
        msg: string;
        date: string;
    }>;
}
