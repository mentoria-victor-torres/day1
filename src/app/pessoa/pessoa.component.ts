import { Observable } from 'rxjs';
import { Pessoa, PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
})
export class PessoaComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService) {
    this.pessoas = this.pessoaService.getPessoas();
  }

  ngOnInit(): void {}

  getPessoas() {
    this.pessoas = this.pessoaService.getPessoas();
  }

  public save(pessoa: any) {
    this.pessoaService
      .save(pessoa as Pessoa)
      .subscribe({
        next: (p) => console.log(p.id),
        error: (e) => console.log(e),
        complete: () => this.getPessoas(),
      });
  }
}
