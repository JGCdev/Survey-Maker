import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  resServer = {
      idEncuesta: 233,
      fCreacion: '23/02/2020',
      votosTotales: 34,
      titulo: 'Encuesta para cena de navidad',
      preguntas: [
        {
          tipo: 0,
          texto: 'Plato principal',
          respuestas: ['Solomillo', 'Rodaballo'],
          votos: [14, 20],
          resTotales: 34,
          porcentajes: [41, 59]
        },
        {
          tipo: 1,
          texto: 'Alérico a alguno de los elementos',
          respuestas: ['Gluten', 'Lactosa', 'Otros'],
          votos: [2, 1, 0],
          resTotales: 3,
          porcentajes: [67, 33, 0]
        },
        {
          tipo: 2,
          texto: 'Si es alérgico especificar a qué',
          respuestas: [
            {
              usuario: 'jgimenez@gmail.com',
              respuesta: 'Mi presupeusta Jesús'
            },
            {
              usuario: 'jorge@gmail.com',
              respuesta: 'Mi presupeusta Jesús'
            },
            {
              usuario: 'pedro@gmail.com',
              respuesta: 'Mi presupeusta Jesús'
            },
            {
              usuario: 'luis@gmail.com',
              respuesta: 'Mi presupeusta Jesús'
            }
          ]
        },
        {
          tipo: 3,
          texto: 'Comentarios adicionales',
          respuestas: [
            {
              usuario: 'jgimenez@gmail.com',
              respuesta: 'Este es un texto de campo largo, textarea. Comprobar como colocar con los demás.'
            },
            {
              usuario: 'jorge@gmail.com',
              respuesta: 'Este es un texto de campo largo, textarea. Comprobar como colocar con los demás.'
            },
            {
              usuario: 'pedro@gmail.com',
              respuesta: 'Este es un texto de campo largo, textarea. Comprobar como colocar con los demás.'
            },
            {
              usuario: 'luis@gmail.com',
              respuesta: 'Este es un texto de campo largo, textarea. Comprobar como colocar con los demás.'
            }
          ]
        }
      ]
  };

  constructor() { }

  ngOnInit() {

  }

}
