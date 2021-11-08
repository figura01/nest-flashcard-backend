"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const card_interface_1 = require("../interfaces/card.interface");
const answer_interface_1 = require("../interfaces/answer.interface");
let CardsService = class CardsService {
    constructor() {
        this.answers = [];
        this.cards = [
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
    }
    getCards() {
        return new Promise(resolve => {
            resolve(this.selectCardsUseeFailedToAnswer());
        });
    }
    selectCardsUseeFailedToAnswer() {
        if (this.answers.length === 0)
            return this.cards;
        const cardsFailedToAnswer = this.answers.filter(c => c.isRight === false);
        return cardsFailedToAnswer.map(c => c.card);
    }
    saveAnswer(answers) {
        return new Promise((resolve) => {
            this.answers = answers;
            resolve({ msg: 'answers saved', date: new Date().toISOString });
        });
    }
};
CardsService = __decorate([
    (0, common_1.Injectable)()
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map