import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-encuesta-creada',
  templateUrl: './encuesta-creada.component.html',
  styleUrls: ['./encuesta-creada.component.scss']
})
export class EncuestaCreadaComponent implements OnInit {

  id: string;
  encuesta: Encuesta;
  urlRedirect: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.urlRedirect = environment.clientUrl;
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
