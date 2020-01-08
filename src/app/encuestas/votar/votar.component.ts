import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestasService } from '../encuestas.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.scss']
})
export class VotarComponent implements OnInit {


  encuesta: Encuesta;
  private id: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private es: EncuestasService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.es.getEncuestaById(this.id).subscribe(
      (res: any) => {
        console.log('Encuesta recibida', res);
        this.encuesta = res;
        this.encuesta.fields.forEach( (elem, index) => { 
          if (elem.tipo === 1) {
            const control = this.formBuilder.control('select' + index);
            this.form.addControl('select' + elem.id, control );
          }
          if (elem.tipo === 2) {
            const control = this.formBuilder.control('radio' + index);
            this.form.addControl('radio' + elem.id, control );
          }

        });
      },
      (err) => {
        console.log('error', err);
      }
    );
  }


  onSubmit() {
    // RETOMAR - OBJETO QUE VIENE DEBE LLEVAR VOTOS SETEADOS A 0 EN CADA POSICIÓN SEGÚN Nº DE PREGUNTAS, IMPLEMENTAR LóGICA DESDE CREACIÓN
    this.encuesta.fields.forEach((element, index) => {

      if (element.tipo === 1) {
        const resp: number = this.form.get('select' + element.id).value;
        console.log('resp', resp);
        element.votos[resp] !== undefined ? element.votos[resp]++ : element.votos[resp] = 1;
        console.log(element.votos[resp]);

        // test
        const myArray = [];
        myArray[5] = 0;
        console.log('miarra', myArray);
      }
      console.log('Valor campo ' + index, this.form.get('select' + element.id).value);
    });
    console.log(this.encuesta);
  }

}
