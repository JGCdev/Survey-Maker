import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { ActivatedRoute } from '@angular/router';
import { EncuestasService } from '../encuestas.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.scss']
})
export class VotarComponent implements OnInit {

  encuesta: Encuesta;
  private id: string;

  constructor(private route: ActivatedRoute, private es: EncuestasService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.encuesta = this.es.getEncuestaById(this.id);
  }

}
