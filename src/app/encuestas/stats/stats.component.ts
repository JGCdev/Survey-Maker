import { Component, OnInit } from '@angular/core';
import { EncuestasService } from '../encuestas.service';
import { ActivatedRoute } from '@angular/router';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  user: SocialUser;
  stats: Encuesta;
  id: string;
  text: string;
  privateSurvey: boolean;

  constructor(private es: EncuestasService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params.success) {
        this.text = '¡Has votado correctamente!';
      }
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.route.snapshot.paramMap.get('id');
    this.es.getEncuestaById(this.id).subscribe( (res: Encuesta) => {
      if (parseInt(res.config[0], 10) === 1 && res.autor !== this.user.email) {
        this.privateSurvey = true;
      } else {
        this.stats = res;
        console.log(this.stats);
      }
    });
  }

}
