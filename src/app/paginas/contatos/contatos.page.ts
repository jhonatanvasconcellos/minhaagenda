import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ContatoService } from '../../servicos/contato.service';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
      contatos:any;
  constructor(private nav: NavController, 
              private servico: ContatoService) { }

  ngOnInit() {
    console.log("Carregando a página...");
    console.log(this.servico.listar());

    this.servico.listar().subscribe(data => {
      this.contatos = data.map(e => {
        return{
          id: e.payload.doc.id,
          email : e.payload.doc.data()['email'],
          nome: e.payload.doc.data()['nome'],
          telefone: e.payload.doc.data()['telefone']

        }
      })

      console.log(this.contatos);
    });
  }

  excluir(contatos){
    this.servico.excluir(contatos);
  }


  inicioCadastro(){
    this.nav.navigateForward("edita-contato");
  }

}
