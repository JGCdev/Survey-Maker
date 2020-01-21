import { Injectable } from '@angular/core';
import { Field } from '../interfaces/field';
import { Encuesta } from '../interfaces/encuesta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { services } from '../../environments/services';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  plantilla: Array<Field>;
  encuesta: Encuesta;

  constructor(private http: HttpClient) { }

  setPlantilla(item): void {
    this.plantilla = item;
  }
  getPlantilla(): Array<Field> {
    return this.plantilla;
  }
  setEncuesta(item): void {
    this.encuesta = item;
    // Seteamos plantilla para poder recuperar formulario
    this.plantilla = item.fields;
  }
  getEncuesta() {
    return this.encuesta;
  }
  getEncuestaById(id): Observable<any> {
    return this.http.get(environment.apiEndpoint + services.ENCUESTAS + id);
  }
  getEncuestasByEmail(email): Observable<any> {
    return this.http.get(environment.apiEndpoint + services.GET_ENCUESTA_BY_EMAIL + email);
  }
  updateEncuesta(encuesta: Encuesta): Observable<any> {
    return this.http.put(environment.apiEndpoint + services.ENCUESTAS + encuesta._id, encuesta);
  }
  deleteEncuesta(id: string): Observable<any> {
    return this.http.delete(environment.apiEndpoint + services.ENCUESTAS + id);
  }
  crearEncuesta(encuesta: Encuesta): Observable<any> {
    return this.http.post(environment.apiEndpoint + services.ENCUESTAS, encuesta, this.httpOptions);
  }


  /* Ejemplo encuesta
    encuestaAux: Encuesta = {
    id: 1,
    config: [],
    title: 'Mi Encuesta Personalizada',
    buttonText: 'Enviar resultados',
    autor: '',
    creationDate: new Date('2015-03-25'),
    votosTotales: 4,
    fields: [
      {
        id: 0,
        tipo: 0,
        texto: 'Plato principal',
        respuestas: ['Solomillo', 'Rodaballo'],
        votos: [],
        resTotales: 34,
        porcentajes: []
      },
      {
        id: 1,
        tipo: 1,
        texto: 'Alérico a alguno de los elementos',
        respuestas: ['Gluten', 'Lactosa', 'Otros'],
        votos: [],
        resTotales: 3,
        porcentajes: []
      },
      {
        id: 2,
        tipo: 2,
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
        tipo: 3,
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
    ]
  };
  */

}
