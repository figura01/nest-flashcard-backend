import { Injectable } from '@nestjs/common';
import { Card } from 'src/interfaces/card.interface';
import { Answer } from 'src/interfaces/answer.interface';

@Injectable()
export class CardsService {
  answers: Answer[] = [];
  cards = [
    {
      id: 1,
      question: 'What is the language of the web ?',
      answer: 'javascript',
    },
    {
      id: 2,
      question: 'What is the coolest job ?',
      answer: 'Programmer',
    },
    {
      id: 3,
      question: 'What is a intarface ?',
      answer: 'A contract',
    },
    {
      id: 4,
      question: 'In push() matating a array ?',
      answer: 'Programmer',
    },
  ];


  getCards(): Promise<Card[]> {
    return new Promise(resolve => {
      resolve(this.selectCardsUseeFailedToAnswer());
    });
  }

  selectCardsUseeFailedToAnswer() {
    //This first time, send all cards as user didn't have a chance to answer right or wrong 
    if(this.answers.length === 0) return this.cards;
    const cardsFailedToAnswer = this.answers.filter(c => c.isRight === false);
    return cardsFailedToAnswer.map(c => c.card);
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
