import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestasService } from '../encuestas.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
  plantillas = [
    [ {} ],
    [
      {
        id: 1,
        type: 1,
        question: 'Pregunta número 1',
        answers: ['Answer 1', 'Answer 2']
      }
    ],
    [
      {
        id: 2,
        type: 2,
        question: 'Pregunta número 2',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5', 'Answer 6']
      },
    ],
    [
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
    ],
  ];

  constructor( private router: Router, private es: EncuestasService) { }

  ngOnInit() { }

  elegirPlantilla(num) {
    this.es.setPlantilla(this.plantillas[num]);
    this.router.navigate(['encuestas/crear-encuesta/campos']);
  }
}
