import { Component, OnInit } from '@angular/core';
import { EncuestasService } from '../encuestas.service';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-creada',
  templateUrl: './encuesta-creada.component.html',
  styleUrls: ['./encuesta-creada.component.scss']
})
export class EncuestaCreadaComponent implements OnInit {

  encuesta: Encuesta;
  constructor(private es: EncuestasService, private router: Router) { }

  ngOnInit() {
    if (this.es.getEncuesta() !== undefined) {
      this.encuesta = this.es.getEncuesta();
    } else {
      this.router.navigate(['encuestas']);
    }
  }

}
