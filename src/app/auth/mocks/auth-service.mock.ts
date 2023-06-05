import { BehaviorSubject, Observable, of } from "rxjs";
import { LoginFormValue } from "../services/auth.service";
import { Usuario } from "src/app/core/models";

export const USUARIO_ADMIN_MOCK: Usuario = {
  id: 1,
  apellido: 'prueba apellido',
  email: 'prueba@gmail.com',
  nombre: 'nombre prueba',
  role: 'admin',
  token: 'ijkh312iu3hu8dH)UIAhddhjka',
  password: '123456',
}

export class AuthServiceMock {

  private authUser$ = new BehaviorSubject<Usuario | null>(null);

  login(formValue: LoginFormValue): void {
    this.authUser$.next(USUARIO_ADMIN_MOCK);
  }

  verificarToken(): Observable<boolean> {
    return of(true);
  }
}