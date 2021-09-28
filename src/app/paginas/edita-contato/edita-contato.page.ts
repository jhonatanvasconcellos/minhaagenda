import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../servicos/contato.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-edita-contato',
  templateUrl: './edita-contato.page.html',
  styleUrls: ['./edita-contato.page.scss'],
})
export class EditaContatoPage implements OnInit {
  email: string;
  nome: string;
  telefone: string;

  constructor(private service: ContatoService,
    private nav: NavController) { }

  ngOnInit() {
  }

  
  cadastrar() {
    console.log("Função cadastrar");
    console.log(this.email);
    console.log(this.nome);
    console.log(this.telefone);

    let contato = {}
    contato['email'] = this.email;
    contato['nome'] = this.nome;
    contato['telefone'] = this.telefone;
    console.log(contato);
    this.service.incluir(contato);
    this.nav.navigateForward("contatos");
  }

}
