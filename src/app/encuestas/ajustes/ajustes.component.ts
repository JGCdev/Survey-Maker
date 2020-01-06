import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { Router } from '@angular/router';
import { EncuestasService } from '../encuestas.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss']
})
export class AjustesComponent implements OnInit {
  saveOverlayMenu = false;
  encuesta: Encuesta;
  constructor(private router: Router, private es: EncuestasService) { }

  ngOnInit() {
    this.encuesta = this.es.getEncuesta();
    if (this.encuesta === undefined) {
      this.router.navigate(['encuestas']);
    }
  }

  openSaveOverlayMenu() {
    this.saveOverlayMenu === false ? this.saveOverlayMenu = true : this.saveOverlayMenu = false;
  }

  saveSurvey() {
    console.log(this.encuesta);
    this.es.generateUrl(this.encuesta);
    this.router.navigate(['encuestas/encuesta-creada']);
  }

  return() {
    this.router.navigate(['/encuestas/crear-encuesta/campos']);
  }

}
