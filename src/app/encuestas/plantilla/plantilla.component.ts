import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestasService } from '../encuestas.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
  plantillas = [
    [ ],
    [
      {
        id: 0,
        tipo: 1,
        texto: 'Selección única',
        respuestas: ['Opción 1', 'Opción 2'],
        votos: [14, 20],
        resTotales: 34,
        porcentajes: [41, 59]
      },
    ],
    [
      {
        id: 0,
        tipo: 2,
        texto: 'Opción de selección múltiple',
        respuestas: ['Opción 1', 'Opción 2', 'Opción 3'],
        votos: [2, 1, 0],
        resTotales: 3,
        porcentajes: [67, 33, 0]
      }
    ],
    [
      {
        id: 0,
        tipo: 1,
        texto: 'Plato principal',
        respuestas: ['Solomillo', 'Rodaballo'],
        votos: [14, 20],
        resTotales: 34,
        porcentajes: [41, 59]
      },
      {
        id: 1,
        tipo: 2,
        texto: 'Alérico a alguno de los elementos',
        respuestas: ['Gluten', 'Lactosa', 'Otros'],
        votos: [2, 1, 0],
        resTotales: 3,
        porcentajes: [67, 33, 0]
      },
      {
        id: 2,
        tipo: 3,
        texto: 'Si es alérgico especificar a qué',
        votos: [],
        resTotales: 4,
        porcentajes: [],
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
        id: 3,
        tipo: 4,
        texto: 'Comentarios adicionales',
        votos: [],
        resTotales: 4,
        porcentajes: [],
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
    ],
  ];

  constructor( private router: Router, private es: EncuestasService) { }

  ngOnInit() { }

  elegirPlantilla(num) {
    this.es.setPlantilla(this.plantillas[num]);
    this.router.navigate(['encuestas/crear-encuesta/campos']);
  }
}
