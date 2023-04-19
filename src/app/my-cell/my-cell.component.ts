import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell',
  template: `

    <div style="color: blue;">
    My name  is "{{value|uppercase}}"
</div>
  `,
  styles: [

  ]
})
export class MyCellComponent implements OnInit,ICellRendererAngularComp {

  constructor() { }
  value:any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value=params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
