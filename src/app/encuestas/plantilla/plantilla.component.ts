import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/survey.service';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { Router } from '@angular/router';
import { Field } from 'src/app/interfaces/field';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {

  encuesta: Encuesta;
  plantilla1: Array<Field> = null;
  plantilla2: Array<Field> = [
    {
      id: 1,
      type: 1,
      question: 'Pregunta número 1',
      answers: ['Answer 1', 'Answer 2']
    }
  ];
  plantilla5: Array<Field> = [
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
  ];

  constructor( private surveyService: SurveyService, private router: Router) {

  }

  ngOnInit() {
    this.encuesta =  this.surveyService.getSurveyById('3');
  }

  elegirPlantilla(num) {
    this.router.navigate(['encuestas/crear-encuesta/campos']);
    console.log(num);
  }
}
