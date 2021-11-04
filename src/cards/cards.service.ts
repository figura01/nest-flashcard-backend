import { Injectable } from '@nestjs/common';
import { Card } from 'src/interfaces/card.interface';
import { Answer } from 'src/interfaces/answer.interface';

@Injectable()
export class CardsService {
  answers: Answer[] = [];
  getCards(): Promise<Card[]> {
    const cards = [
      {
        id: 1,
        question: 'What is the language of the web',
        answer: 'javascript',
      },
      {
        id: 2,
        question: 'What is the coolest job',
        answer: 'Programmer',
      },
    ];
    return new Promise((resolve) => {
      resolve(cards);
    });
  }

  saveAnswer(answers: any): Promise<{ msg: string; date: string }> {
    return new Promise((resolve) => {
      this.answers = answers;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      resolve({ msg: 'answers saved', date: new Date().toISOString });
    });
  }
}
