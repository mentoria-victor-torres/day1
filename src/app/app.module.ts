import { PessoaService } from './pessoa.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FormularioComponent } from './pessoa/formulario/formulario.component';
import { ListaComponent } from './pessoa/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    FormularioComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
