import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestasService } from '../encuestas.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SocialUser } from 'angularx-social-login';
import { LoggedService } from '../../login/logged.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.scss']
})
export class VotarComponent implements OnInit {

  encuesta: Encuesta;
  private id: string;
  form: FormGroup;
  user: SocialUser;
  voted: boolean;

  constructor(private route: ActivatedRoute,
              private es: EncuestasService,
              private router: Router,
              private formBuilder: FormBuilder,
              private ls: LoggedService
  ) {
    this.form = this.formBuilder.group({});
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.es.getEncuestaById(this.id).subscribe(
      (res: any) => {
        console.log('Encuesta recibida', res);
        if (res.votosUsers.includes(this.user.email)) {
          console.log('ya has votado');
          this.voted = true;
        } else {
          this.encuesta = res;
          this.construirEncuesta();
        }
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  construirEncuesta() {
    this.encuesta.fields.forEach( (elem, index) => {
      if (elem.tipo === 1) {
        const control = this.formBuilder.control('select' + index);
        this.form.addControl('select' + elem.id, control );
      }
      if (elem.tipo === 2) {
        elem.respuestas.forEach( (el, ind) => {
          const control = this.formBuilder.control('checkbox' + ind);
          this.form.addControl('checkbox' + ind, control );
          const valueToPatch = {['checkbox' + ind]: false};
          this.form.patchValue(valueToPatch);
        });
      }
      if (elem.tipo === 3) {
        const control = this.formBuilder.control('text' + index);
        this.form.addControl('text' + elem.id, control );
        const valueToPatch = {['text' + elem.id]: ''};
        this.form.patchValue(valueToPatch);
      }
      if (elem.tipo === 4) {
        const control = this.formBuilder.control('textarea' + index);
        this.form.addControl('textarea' + elem.id, control );
        const valueToPatch = {['textarea' + elem.id]: ''};
        this.form.patchValue(valueToPatch);
      }
    });
  }


  onSubmit() {
    this.user = this.ls.getUser();
    this.encuesta.fields.forEach((element, index) => {

      if (element.tipo === 1) {
        const resp: string = this.form.get('select' + element.id).value;
        console.log('resp', resp);
        // Utilizar si queremos validar campos
        // if (resp !== 'select' + element.id) {
        //   console.log('esta seteado');
        // } else {
        //   console.log('no se ha respondido nada, mandar mensaje de rellenar en caso que sea obligatorio');
        // }
        element.votos[resp] !== undefined ? element.votos[resp]++ : element.votos[resp] = 1;
      }
      if (element.tipo === 2) {
        element.respuestas.forEach( (ele, ind) => {
          const resp: boolean = this.form.get('checkbox' + ind).value;
          console.log('resp' + ind, resp);
          if (resp === true) {
            element.votos[ind]++;
          }
        });
      }
      if (element.tipo === 3) {
        const resp: number = this.form.get('text' + element.id).value;
        const obj = {
          autor: this.user.email,
          respuesta: resp
        };
        element.respuestas.push(obj);
        console.log('resp', resp);
      }
      if (element.tipo === 4) {
        const resp: number = this.form.get('textarea' + element.id).value;
        const obj = {
          autor: this.user.email,
          respuesta: resp
        };
        element.respuestas.push(obj);
        console.log('resp', resp);
      }
    });
    this.encuesta.votosTotales++;
    this.encuesta.votosUsers.push(this.user.email);
    console.log(this.encuesta);
    this.es.updateEncuesta(this.encuesta).subscribe( res => {
      if (res !== null) {
        this.router.navigate(['/encuestas/seguimiento/' + this.id] , { queryParams: { success: '1' } });
      }
    });
  }

}
