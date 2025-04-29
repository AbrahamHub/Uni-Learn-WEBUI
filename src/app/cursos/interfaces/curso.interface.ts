
export interface ICursoDTO {
	titulo: string;
	author: string;
	temas: Tema[];
	video: string;
	descripcion: string;
}

export interface ICurso {
	id: number;
	titulo: string;
	author: string;
	temas: Tema[];
	descripcion: string;
	video: string;
	vistas: number;
	aprobado: boolean;
}

export interface Tema {
	id: number;
	nombre: string;
}
