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
  text: string;

  constructor(private es: EncuestasService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (params.success) {
        this.text = '¡Has votado correctamente!';
      }
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.es.getEncuestaById(this.id).subscribe( (res: Encuesta) => {
      this.stats = res;
      console.log(this.stats);
    });
  }

}
