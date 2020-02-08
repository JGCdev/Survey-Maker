import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { Router } from '@angular/router';
import { EncuestasService } from '../encuestas.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss']
})
export class AjustesComponent implements OnInit {
  saveOverlayMenu = false;
  encuesta: Encuesta;
  configForm: FormGroup;

  constructor(private router: Router, private es: EncuestasService,   private formBuilder: FormBuilder) {
    this.configForm = this.formBuilder.group({
      option1: new FormControl(''),
      option2: new FormControl(''),
      option3: new FormControl('', [Validators.min(0)]),
    });

    // Seteamos valores de configuración por defecto
    this.configForm.controls.option1.setValue('0');
    this.configForm.controls.option2.setValue('0');
    this.configForm.controls.option3.setValue('30');
  }

  ngOnInit() {
    this.encuesta = this.es.getEncuesta();
    if (this.encuesta === undefined) {
      this.router.navigate(['encuestas']);
    }
  }

  openSaveOverlayMenu(): void {
    this.saveOverlayMenu === false ? this.saveOverlayMenu = true : this.saveOverlayMenu = false;
  }

  saveSurvey(): void {

    if (this.configForm.valid) {
      this.encuesta.config[0] = this.configForm.get('option1').value;
      this.encuesta.config[1] = this.configForm.get('option2').value;
      this.encuesta.config[2] = this.configForm.get('option3').value;
      this.encuesta.fields.forEach(elem => {
        const ceros = elem.respuestas.length;
        for (let i = 0; i < ceros; i++) {
          elem.votos.push(0);
        }
      });
      this.es.crearEncuesta(this.encuesta).subscribe(
        (res: any) => {
          this.router.navigate(['encuestas/encuesta-creada/' + res._id]);
        }
      );
    } else {
      console.log('formulario invalido');
    }

  }

  return() {
    this.router.navigate(['/encuestas/crear-encuesta/campos']);
  }

}
