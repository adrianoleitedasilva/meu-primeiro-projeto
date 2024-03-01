import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})

export class DataBindingComponent {
  public nome: string = "Adriano";
  public idade: number = 35;

  public disabledButton: boolean = true;
  public urlImagem: string = "https://images.pexels.com/photos/1774927/pexels-photo-1774927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  public imgTitle = "papagaio"
  public imgAlt = "papagaio"

  public alertaInfo() {
    alert("Deu bom! Evento acionado!")
  }

}


