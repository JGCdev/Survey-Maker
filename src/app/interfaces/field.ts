export interface Field {
        id: number;
        tipo: number;
        texto: string;
        respuestas: Array<any>;
        votos: Array<number>;
        resTotales: number;
        porcentajes: Array<number>;
}
