import { Alumno } from "../../alumnos/alumnos.component";
import { Curso } from "../../cursos/models"
import { Subject } from "../../subjects/models";

export interface Inscripcion {
  id: number;
  studentId: number;
  courseId: number;
  subjectId: number;
}

export interface InscripcionWithStudent extends Inscripcion {
  student: Alumno;
}

export interface InscripcionWithSubject extends Inscripcion {
  subject: Subject;
}

export interface InscripcionWithCourse extends Inscripcion {
  course: Curso;
}

export interface CreateInscripcionData {
  studentId: number;
  courseId: number;
  subjectId: number;
}

export type InscripcionWithAll = InscripcionWithStudent & InscripcionWithSubject & InscripcionWithCourse;