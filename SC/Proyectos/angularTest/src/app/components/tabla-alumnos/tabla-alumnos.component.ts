import { Component, OnInit } from '@angular/core';
import { alumnosDTO } from './mock';
import { Alumno } from 'src/app/models/alumno-to';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit{

  public alumnos?: Alumno[];

  ngOnInit(): void {
    this.alumnos = alumnosDTO;
  }
}
