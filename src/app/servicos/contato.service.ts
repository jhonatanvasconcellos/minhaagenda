import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private firestore: AngularFirestore) { }

  incluir(contato){
    console.log(contato);
    this.firestore.collection("contatos").add(contato);
  }

  listar() {
    return this.firestore.collection("contatos").snapshotChanges();
  }

  excluir(contatos){
    this.firestore.doc("contatos/"+contatos.id).delete();
  }
}
