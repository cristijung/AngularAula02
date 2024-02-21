import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonService } from './servicesJson';

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

  constructor(private JsonService: JsonService) {}

  ngOnInit() {
    this.JsonService.getJsonData().subscribe(data => {
      console.log(data);

    });

  }

}


//Código comentado da continuação do consumo de JSON

// // service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class JsonService {
//   private jsonDataSubject = new BehaviorSubject<any>(null);
//   jsonData$ = this.jsonDataSubject.asObservable();

//   constructor(private http: HttpClient) {
//     this.fetchData();
//   }

//   private fetchData() {
//     this.http.get<any>('path/to/your.json')
//       .subscribe(data => {
//         this.jsonDataSubject.next(data);
//       });
//   }
// }

// // component.ts
// import { JsonService } from './json.service';

// constructor(private jsonService: JsonService) {}

// ngAfterViewInit() { // Or any other lifecycle hook that runs after component initialization
//   this.jsonService.jsonData$.subscribe(data => {
//     // Access and use the data here
//     console.log(data);
//     // ...
//   });
// }

