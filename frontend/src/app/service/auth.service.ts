import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Va a decir cuál es la api de nuestro backend para registrar un usuario
  private registroUrl = 'https://irculturapp.herokuapp.com/api/usuario/';
  //Nos va a ayudar a autenticar un usuario
  private loginUrl = 'https://irculturapp.herokuapp.com/api/auth';
  constructor(private http: HttpClient) {}
  registroUsuario(usuario) {
    //retorna un observable
    //"usuario" que llega como parámetro representa los datos recibidos por el formulario del frontend
    //"usuario" es un json con los datos
    //¿Sería hacer lo mismo para los centros culturales?
    return this.http.post<any>(this.registroUrl, usuario);
  }
  loginUsuario(usuario) {
    return this.http.post<any>(this.loginUrl, usuario);
  }
}
