import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { inicioSesionDialog } from './inicioSesion.component';
import { AuthService } from '../services/authService.component';
import { RegistroComponent } from '../registro/registro.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  menuType: String = "General";
  constructor(private route: Router, public dialog: MatDialog, private authService: AuthService) {}
//constructor(private authService :AuthService){}

  openDialog(): void {
    const dialogRef = this.dialog.open(inicioSesionDialog, {
    //  data: {name: this.name},
    });

  }

  RegistroDialog(): void{
    const dialogRef = this.dialog.open(RegistroComponent, {
      //  data: {name: this.name},
      });
  }


ngOnInit(): void{
  this.route.events.subscribe((val:any)=>{
    if(val.url.includes('home')){
      this.menuType="General";
    }else if(val.url.includes('Profesor')){
      this.menuType="Profesor";
    }else{
      this.menuType="General_Otro";
    }
  })
}
  
/*
  display(){
    if (this.authService.isLoggedIn()) {
      return "Cerrar sesión";      
    }
    return "Iniciar sesión";
  }
  */
  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
  ]
}