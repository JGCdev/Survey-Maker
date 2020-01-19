import { Field } from './field';

export interface Encuesta {
    _id: number;
    title: string;
    buttonText: string;
    autor: string;
    creationDate: Date;
    config: Array<string>;
    fields: Array<Field>;
    votosTotales: number;
    votosUsers: Array<string>;
}
