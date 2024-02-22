import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonService } from './servicesJson';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dadosjson',
  standalone: true,
  imports: [],
  templateUrl: './dadosjson.component.html',
  styleUrl: './dadosjson.component.scss'
})

@Injectable({
  providedIn: 'root'
})

export class DadosjsonComponent {

  dados: any;
  constructor(private dataService: JsonService) {}

  ngOnInit():void {
    this.dataService.getData().subscribe((data) => {
      this.dados = data;
    });

  }
}


