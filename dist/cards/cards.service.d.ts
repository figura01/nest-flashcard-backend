import { Card } from 'src/interfaces/card.interface';
import { Answer } from 'src/interfaces/answer.interface';
export declare class CardsService {
    answers: Answer[];
    getCards(): Promise<Card[]>;
    saveAnswer(answers: any): Promise<{
        msg: string;
        date: string;
    }>;
}
