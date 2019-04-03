import { Component, OnInit, Inject } from '@angular/core';
import { Atendimento } from '../models/atendimento.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public atendimentos: Atendimento[];
  public capacidadeAtendimento: any[] = [];
  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;

    this.fetchData();
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: this.capacidadeAtendimento,
      label: 'Capacidade x Atendimento Realizado',
      backgroundColor: '#9ad0f5',
      borderColor: '#7ec3f3'
    }
  ];
  ngOnInit() {
  }

  public fetchData() {

    this.http.get<Atendimento[]>(this.baseUrl + 'api/atendimento/dados').subscribe(result => {
      this.atendimentos = result;

      this.atendimentos.map((m) => {

        this.capacidadeAtendimento.push(m.capacidadeAtendimento);
      })

    }, error => console.error(error));
  }

}
