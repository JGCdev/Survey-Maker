import { Field } from './field';

export interface Encuesta {
    title: string;
    buttonText: string;
    fields: Array<Field>;
    url: string;
    autor: string;
    creationDate: Date;
}
