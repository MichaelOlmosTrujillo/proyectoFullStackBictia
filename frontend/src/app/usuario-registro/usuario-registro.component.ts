import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css'],
})
export class UsuarioRegistroComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  //Datos obtenidos desde el HTML
  registrarUsuario = {
    nombre: '',
    correo: '',
    pass: '',
  };
  ngOnInit(): void {}

  registrar() {
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    
  }
}
