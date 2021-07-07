import { Observable, of } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/pessoa.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  @Input()
  pessoas!: Observable<Pessoa[]>;

  constructor() {}

  ngOnInit(): void {}
}
