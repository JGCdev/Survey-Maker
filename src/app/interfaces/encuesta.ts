import { Field } from './field';

export interface Encuesta {
    _id: number;
    title: string;
    buttonText: string;
    autor: string;
    creationDate: Date;
    config: Array<number>;
    fields: Array<Field>;
    votosTotales: number;
}
