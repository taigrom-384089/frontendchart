import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atendimento } from '../models/atendimento.model';

@Component({
  selector: 'app-table-data',
  template: `
    <div>
      <ngx-datatable 
        class="material"
        [columnMode]="'flex'"
        [headerHeight]="30"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [limit]="10"
        [rows]="rows">
        <ngx-datatable-column name="Data" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Demanda" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Capacidade" [flexGrow]="1">
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Atendimento Planejado" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Atendimento Realizado" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Desvio" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class TableDataComponent implements OnInit {

  public rows: Atendimento[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Atendimento[]>(baseUrl + 'api/atendimento/dados').subscribe(result => {
      this.rows = result;

    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

