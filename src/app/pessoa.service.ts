import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor(private http: HttpClient) {}

  public getPessoas(): Observable<Pessoa[]> {
    return this.http
      .get('http://localhost:8080/pessoa')
      .pipe(map((d) => d as Pessoa[]));
  }

  public save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http
      .post('http://localhost:8080/pessoa', pessoa)
      .pipe(map((p) => p as Pessoa));
  }
}

export interface Pessoa {
  id: Number | null;
  nome: String | null;
  idade: Number | null;
}
