import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campos',
  templateUrl: './campos.component.html',
  styleUrls: ['./campos.component.scss']
})
export class CamposComponent implements OnInit {

  encuesta: Object = {
    fields: [
      {
        id: 1,
        type: 1,
        question: 'Pregunta número 1',
        answers: ['Answer 1', 'Answer 2']
      },
      {
        id: 2,
        type: 1,
        question: 'Pregunta número 2',
        answers: ['Answer 1', 'Answer 2']
      },
      {
        id: 3,
        type: 1,
        question: 'Pregunta número 3',
        answers: ['Answer 1', 'Answer 2']
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

  openNewFieldsMenu() {
    console.log('abierto');
  }
}
