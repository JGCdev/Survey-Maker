import { Component, OnInit } from '@angular/core';
import { Field } from '../interfaces/field';
import { Router } from '@angular/router';
import { Encuesta } from '../interfaces/encuesta';
import { EncuestasService } from './encuestas.service';
import { LoggedService } from '../login/logged.service';

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

  editField: Field;
  lastIdField = 4;

  encuesta: Encuesta = {
    id: 1,
    config: [1, 1, 0],
    title: 'Mi Encuesta Personalizada',
    buttonText: 'Enviar resultados',
    autor: '',
    creationDate: new Date('2015-03-25'),
    votosTotales: 0,
    fields: []
  };

  constructor(private router: Router, private es: EncuestasService, private ls: LoggedService) { }

  ngOnInit() {
    if (this.es.getPlantilla() !== undefined) {
      console.log(this.ls.user);
      this.encuesta.autor = this.ls.user.email;
      this.encuesta.fields = this.es.getPlantilla();
    } else {
      this.router.navigate(['encuestas']);
    }
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

  openEditFieldMenu(id?: number) {
    if (id !== null) {
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
      tipo: num,
      texto: 'Personaliza tu enunciado',
      respuestas: ['Answer 1', 'Answer 2'],
      votos: [],
      resTotales: 0,
      porcentajes: []
    };
    this.encuesta.fields.push(field);
    this.addFieldsMenu = false;
    this.lastIdField++;
  }

  resetSurvey() {
    this.encuesta.fields = [];
  }

  saveSurvey() {
    this.es.setEncuesta(this.encuesta);
    this.router.navigate(['encuestas/crear-encuesta/ajustes']);
  }

  saveMenuForm() {
    this.editFieldMenu = false;
  }

  addFieldsToEditField() {
    const answer = 'New answer';
    this.editField.respuestas.push(answer);
  }

  deleteFieldFromEditField(indice) {
    this.editField.respuestas = this.editField.respuestas.splice(indice - 1, 1);
  }

  trackByFn(index) {
    return index;
  }

  return() {
    this.router.navigate(['/encuestas/']);
  }
}
