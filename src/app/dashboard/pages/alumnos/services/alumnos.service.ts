import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Alumno } from '../alumnos.component';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  private estudiantes2$ = new Subject<Alumno[]>();


  private estudiantes$ = new BehaviorSubject<Alumno[]>([
    {
      id: 1,
      nombre: 'Laura',
      apellido: 'Romero',
      pais: 'Ecuador',
      email: 'laura@gmail.com',
      telefono: '11282378740'
    },
    {
      id: 2,
      nombre: 'Lionel',
      apellido: 'Messi',
      pais: 'Argentina',
      email: 'lionel@gmail.com',
      telefono: '41417318'
    },
    {
      id: 3,
      nombre: 'Tony',
      apellido: 'Montana',
      pais: 'Italia',
      email: 'tony@gmail.com',
      telefono: '41731904'
    },
  ])

  constructor(private httpClient: HttpClient) { }


  getStudentsFromDB(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${enviroment.apiBaseUrl}/students`);
  }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}