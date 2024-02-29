import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{
  @Input() public title: string = "Olá Componentes";

  ngOnInit(): void {  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Mudouuuuuu!');
  }

  ngOnDestroy(): void {
      console.log("Componente foi destruído!")
  }
}
