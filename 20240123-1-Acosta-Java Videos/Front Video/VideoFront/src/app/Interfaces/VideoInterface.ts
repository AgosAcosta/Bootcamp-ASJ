export interface VideoInterface {
  id?: number;
  url: string;
  nombre: string;
  categoria: string;
  descripcion?: string;
  cantidadVistas: number;
  cantidadMeGusta: number;
  cantidadNoMeGusta: number;
}
