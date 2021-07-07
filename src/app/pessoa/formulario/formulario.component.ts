import { Pessoa } from 'src/app/pessoa.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  nome: string | null = null;
  idade: number | null = null;

  @Output()
  emiterPessoa: EventEmitter<Pessoa> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public save() {
    this.emiterPessoa.emit({ id: null, nome: this.nome, idade: this.idade });
    this.nome = null;
    this.idade = null;
  }

  print(event: any) {
    console.log(event);
  }
}
