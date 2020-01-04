import { Injectable } from '@angular/core';
import { Encuesta } from './interfaces/encuesta';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  encuesta: Encuesta = {
    title: 'Mi Encuesta Personalizada',
    buttonText: 'Enviar resultados',
    fields: [
      {
        id: 1,
        type: 1,
        question: 'Pregunta número 1',
        answers: ['Answer 1', 'Answer 2']
      },
      {
        id: 2,
        type: 2,
        question: 'Pregunta número 2',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5', 'Answer 6']
      },
      {
        id: 3,
        type: 3,
        question: 'Pregunta número 3',
        answers: ['Answer 1', 'Answer 2']
      },
      {
        id: 4,
        type: 4,
        question: 'Pregunta número 4',
        answers: ['Answer 1', 'Answer 2']
      }
    ]
  };

  constructor() { }

  getSurveyById(id: string) {
    return this.encuesta;
  }
}
