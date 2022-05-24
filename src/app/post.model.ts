import { Model } from 'src/app/shared/interfaces'
export class Post implements Model {
    id: string;
    nombre: string;
    apellido: string;
    residencia: string;
}
