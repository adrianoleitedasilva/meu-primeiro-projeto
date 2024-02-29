import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <button (click)="destruirComponente()">Destruir componente</button>
    <!-- {{ valor }} -->
    <!-- <button (click)="adicionar()" >Adicionar</button> -->
    <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public valor: number = 1;
  public destruir: boolean = true;

  public destruirComponente() {
    this.destruir = false;
  }

  public adicionar(): number {
    return this.valor += 1;
  }


  consstrutor() {}
  
   
  ngOnInit(): void {  }
  ngDoCheck(): void { console.log("ngDoCheck") }
  ngAfterContentInit(): void { console.log("ngAfterContentInit")}
  ngAfterContentChecked(): void { console.log("ngAfterContentChecked") }
  ngAfterViewInit(): void { console.log("ngAfterViewInit") }
  ngAfterViewChecked(): void { console.log("ngAfterViewChecked")}

}


