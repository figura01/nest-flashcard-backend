import { Card } from 'src/interfaces/card.interface';
import { CardsService } from './cards.service';
import { SaveAnswerDto } from './dto/save-answer.dto';
export declare class CardsController {
    private cardsService;
    constructor(cardsService: CardsService);
    getCards(): Promise<Card[]>;
    saveAnswer(saveAnswersDto: SaveAnswerDto): Promise<{
        msg: string;
        date: string;
    }>;
}
