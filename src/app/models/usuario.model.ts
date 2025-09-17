import { FieldValue } from "firebase/firestore";

export interface Usuario{
    uid: string;
    email: string;
    contraseña: string;
    nombre: string;
    fechaCreacion: FieldValue
}