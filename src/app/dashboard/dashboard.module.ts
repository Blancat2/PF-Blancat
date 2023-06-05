import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CursosModule } from './pages/cursos/cursos.module';
import { InscripcionesModule } from './pages/inscripciones/inscripciones.module';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AlumnoDetalleComponent } from './pages/alumnos/pages/alumno-detalle/alumno-detalle.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursoDetalleComponent } from './pages/cursos/pages/curso-detalle/curso-detalle.component';
import { AdminGuard } from '../auth/guards/admin.guard';

@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,

    
    RouterModule.forChild([
      {
        path: 'estudiantes',
        loadChildren: () => import('./pages/alumnos/alumnos.module').then((m) => m.AlumnosModule)
      },
      {
   
        path: 'inscripciones',
        loadChildren: () => import('./pages/inscripciones/inscripciones.module').then((m)=> m.InscripcionesModule)
      },
      {
        
        path: 'cursos',
        canActivate: [AdminGuard],
        loadChildren: () => import('./pages/cursos/cursos.module').then((m)=> m.CursosModule)
      },
     

    ])


  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
