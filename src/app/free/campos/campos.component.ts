import { Component, OnInit } from '@angular/core';
import { Field} from 'src/app/interfaces/field';
import { Encuesta } from 'src/app/interfaces/encuesta';

@Component({
  selector: 'app-campos',
  templateUrl: './campos.component.html',
  styleUrls: ['./campos.component.scss']
})
export class CamposComponent implements OnInit {
  addFieldsMenu = false;
  editTitleMenu = false;
  editFieldMenu = false;
  editField: Field;
  lastIdField = 4;
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
  encuestaCopy: Encuesta = {
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
        answers: ['Answer 1', 'Answer 2']
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

  ngOnInit() {
  }

  openNewFieldsMenu() {
    this.addFieldsMenu === false ? this.addFieldsMenu = true : this.addFieldsMenu = false;
  }
  openTitleEditMenu(){
    this.editTitleMenu === false ? this.editTitleMenu = true : this.editTitleMenu = false;
  }
  openEditFieldMenu(id?: number) {
    if (id) {
      this.encuesta.fields.forEach(element => {
        if (element.id === id) {
          this.editField = element;
        }
      });
    }

    this.editFieldMenu === false ? this.editFieldMenu = true : this.editFieldMenu = false;
  }
  deleteField(fieldId: number): void {
    const filtered: Array<Field> = this.encuesta.fields.filter((value, index, arr) => {
      return value.id !== fieldId;
    });
    this.encuesta.fields = filtered;
  }
  addField(num) {
    const field =  {
      id: this.lastIdField + 1,
      type: num,
      question: 'Personaliza tu enunciado',
      answers: ['Answer 1', 'Answer 2']
    };
    this.encuesta.fields.push(field);
    this.addFieldsMenu = false;
    this.lastIdField++;
  }
  resetSurvey() {
    this.encuesta = this.encuestaCopy;
  }
  saveSurvey() {
    console.log(this.encuesta);
  }
  editForm() {

    console.log('guardamos field personalizado: ', this.editField);
    this.editFieldMenu = false;
  }
  addFieldsToEditField() {
    const answer = 'New answer';
    this.editField.answers.push(answer);
  }
  deleteFieldFromEditField(indice) {
    this.editField.answers = this.editField.answers.splice(indice - 1, 1);
  }
  trackByFn(index, item) {
    return index; // or item.id
  }
}
