import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.scss']
})

export class CursoDetalleComponent {
    curso: Curso | undefined;

  private destroyed$ = new Subject()

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursosService,
  ) {

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}


