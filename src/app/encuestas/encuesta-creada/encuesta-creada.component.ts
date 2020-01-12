import { Component, OnInit } from '@angular/core';
import { EncuestasService } from '../encuestas.service';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encuesta-creada',
  templateUrl: './encuesta-creada.component.html',
  styleUrls: ['./encuesta-creada.component.scss']
})
export class EncuestaCreadaComponent implements OnInit {

  id: string;
  encuesta: Encuesta;

  constructor(private es: EncuestasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
