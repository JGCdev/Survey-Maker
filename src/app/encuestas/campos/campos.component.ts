import { Component, OnInit } from '@angular/core';
import { Field } from '../../interfaces/field';
import { Router } from '@angular/router';
import { Encuesta } from '../../interfaces/encuesta';
import { EncuestasService } from '../encuestas.service';
import { LoggedService } from '../../login/logged.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './campos.component.html',
  styleUrls: ['./campos.component.scss']
})
export class CamposComponent implements OnInit {

  addFieldsMenu = false;
  editTitleMenu = false;
  editFieldMenu = false;
  editButtonMenu = false;

  editField: Field;
  lastIdField = 4;

  error: string;

  encuesta: Encuesta = {
    _id: null,
    config: ['1', '1', '0'],
    title: 'Mi Encuesta Personalizada',
    buttonText: 'Enviar resultados',
    autor: '',
    creationDate: new Date('2015-03-25'),
    votosTotales: 0,
    fields: [],
    votosUsers: []
  };

  constructor(private router: Router, private es: EncuestasService, private ls: LoggedService) { }

  ngOnInit() {
    if (this.es.getPlantilla() !== undefined && this.ls.user !== null ) {
        this.encuesta.autor = this.ls.user.email;
        this.encuesta.fields = this.es.getPlantilla();
    } else {
      this.ls.user === null ? this.router.navigate(['login']) : this.router.navigate(['encuestas']);
    }
  }

  openNewFieldsMenu(): void {
    this.addFieldsMenu === false ? this.addFieldsMenu = true : this.addFieldsMenu = false;
  }
  openTitleEditMenu(): void {
    this.editTitleMenu === false ? this.editTitleMenu = true : this.editTitleMenu = false;
  }
  openEditBtnMenu(): void {
    this.editButtonMenu === false ? this.editButtonMenu = true : this.editButtonMenu = false;
  }

  openEditFieldMenu(id?: number): void {
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

  addField(num): void {
    const field: Field =  {
      id: this.lastIdField + 1,
      tipo: num,
      texto: 'Personaliza tu enunciado',
      respuestas: ['Answer 1', 'Answer 2'],
      votos: [],
      resTotales: 0,
      porcentajes: []
    };
    if (num === 3 || num === 4) {
      field.respuestas = [];
    }
    this.encuesta.fields.push(field);
    this.addFieldsMenu = false;
    this.lastIdField++;
  }

  resetSurvey(): void {
    this.encuesta.fields = [];
  }

  saveSurvey(): void {
    if (this.encuesta.fields.length > 0) {
      this.es.setEncuesta(this.encuesta);
      this.router.navigate(['encuestas/crear-encuesta/ajustes']);
    } else {
      this.error = 'Debes añadir al menos un campo a tu encuesta';
    }
  }

  saveMenuForm(): void {
    this.editFieldMenu = false;
  }

  addFieldsToEditField(): void {
    const answer = 'New answer';
    this.editField.respuestas.push(answer);
  }

  deleteFieldFromEditField(indice): void {
    this.editField.respuestas.splice(indice, 1);
  }

  trackByFn(index): number {
    return index;
  }

  return(): void {
    this.router.navigate(['/encuestas/']);
  }
}
