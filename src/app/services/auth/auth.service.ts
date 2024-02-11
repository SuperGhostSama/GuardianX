import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationResponseDTO } from 'src/app/dto/responses/auth-response.dto';
import { RegisterRequestDTO } from 'src/app/dto/requests/register-request.dto';
import { AuthenticationRequestDTO } from 'src/app/dto/requests/auth-request.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient
  ) {}

  register(registerRequest: RegisterRequestDTO): Observable<AuthenticationResponseDTO> {
    return this.http.post<AuthenticationResponseDTO>(`${this.apiUrl}/register`, registerRequest);
  }

  authenticate(authenticationRequest: AuthenticationRequestDTO): Observable<AuthenticationResponseDTO> {
    return this.http.post<AuthenticationResponseDTO>(`${this.apiUrl}/authenticate`, authenticationRequest);
  }
}
