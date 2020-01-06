import { Component, OnInit } from '@angular/core';
import { EncuestasService } from '../encuestas.service';
import { ActivatedRoute } from '@angular/router';
import { Encuesta } from 'src/app/interfaces/encuesta';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {


  stats: Encuesta;
  id: string;
  constructor(private es: EncuestasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.stats = this.es.getEncuestaById(this.id);
  }

}
