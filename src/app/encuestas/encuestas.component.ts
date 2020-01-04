import { Component, OnInit } from '@angular/core';
import { Field } from '../interfaces/field';
import { Router } from '@angular/router';
import { Encuesta } from '../interfaces/encuesta';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss']
})
export class EncuestasComponent implements OnInit {

  addFieldsMenu = false;
  editTitleMenu = false;
  editFieldMenu = false;
  editButtonMenu = false;
  saveOverlayMenu = false;
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

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  openNewFieldsMenu() {
    this.addFieldsMenu === false ? this.addFieldsMenu = true : this.addFieldsMenu = false;
  }
  openTitleEditMenu() {
    this.editTitleMenu === false ? this.editTitleMenu = true : this.editTitleMenu = false;
  }
  openEditBtnMenu() {
    this.editButtonMenu === false ? this.editButtonMenu = true : this.editButtonMenu = false;
  }
  openSaveOverlayMenu() {
    this.saveOverlayMenu === false ? this.saveOverlayMenu = true : this.saveOverlayMenu = false;
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
    this.encuesta = Object.assign({}, this.encuestaCopy);
  }

  saveSurvey() {
    this.router.navigate(['encuestas/encuesta-creada']);
  }

  saveMenuForm() {
    this.editFieldMenu = false;
  }

  addFieldsToEditField() {
    const answer = 'New answer';
    this.editField.answers.push(answer);
  }

  deleteFieldFromEditField(indice) {
    this.editField.answers = this.editField.answers.splice(indice - 1, 1);
  }

  trackByFn(index) {
    return index;
  }
}
