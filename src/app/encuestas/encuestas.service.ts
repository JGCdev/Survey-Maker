import { Injectable } from '@angular/core';
import { Field } from '../interfaces/field';
import { Encuesta } from '../interfaces/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  plantilla: Array<Field>;
  encuesta: Encuesta;
  encuestaAux: Encuesta = {
    title: 'Mi Encuesta Personalizada',
    buttonText: 'Enviar resultados',
    fields: [
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
    ],
    url: null,
    autor: '',
    creationDate: null
  };

  constructor() { }

  setPlantilla(item) {
    this.plantilla = item;
  }
  getPlantilla() {
    return this.plantilla;
  }
  setEncuesta(item) {
    this.encuesta = item;
  }
  getEncuesta() {
    return this.encuesta;
  }
  generateUrl(encuesta) {
    this.encuesta.url = 'http://localhostblabla.com/';
  }
  getEncuestaById(id) {
    return this.encuestaAux;
  }
}
