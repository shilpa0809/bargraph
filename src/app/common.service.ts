import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * Get the random color for bar
   */
  public getRandomColor(): any {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /**
   * Prepares X axis for bar chart
   * @param chartData 
   * @param table 
   * @param chart 
   */
  public prepareChartXAxis(chartData: any, table: HTMLTableElement, chart: HTMLDivElement) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.setAttribute('colspan', chartData.data.length + 1);
    td.setAttribute('class', 'xHeader');
    var span = document.createElement('span');
    span.innerText = chartData.xHeader;
    td.appendChild(span);
    tr.appendChild(td);
    table.appendChild(tr);
    chart.appendChild(table);
  }

  /**
   * Prepare Y axis for bar chart
   * @param chartData 
   * @param row 
   */
  public prepareChartYAxis(chartData: any, row: HTMLTableRowElement) {
    var td = document.createElement("td");
    td.setAttribute('class', 'yHeader');
    var span = document.createElement('span');
    span.innerText = chartData.yHeader;
    td.appendChild(span);
    row.appendChild(td);
  }

  /**
   * Prepare DOM for chart
   * @param data 
   */
  public prepareChartDom(data: any) {
    let chartData = data;
    let div = document.createElement('div');
    let table = document.createElement('table');
    div.appendChild(table);
    let tr = document.createElement("tr");
    return { chartData, row: tr, table, chart: div };
  }

  /**
   * Prepare basic legend for bar chart
   * @param chartData 
   * @param legendColor 
   * @param row 
   * @param table 
   */
  public prepareChartLegend(chartData: any, legendColor: any[], row: HTMLTableRowElement, table: HTMLTableElement) {
    let td = document.createElement("td");
    td.setAttribute('class', 'legend');
    td.setAttribute('colspan', chartData.data.length + '');
    for (let i = 0; i < chartData.data.length; i++) {
      let icon = document.createElement('span');
      icon.setAttribute('class', 'icon');
      let span = document.createElement('span');
      span.style.background = legendColor[i]
      span.innerText = chartData.data[i];
      icon.appendChild(span);
      icon.appendChild(span);
      td.appendChild(icon);
    }
    row.appendChild(td);
    table.appendChild(row);
  }

  /**
   * Render bar chart with real data
   * @param chartData 
   * @param row 
   * @param legendColor 
   */
  public renderBarChart(chartData: any, row: HTMLTableRowElement, legendColor: any[]) {
    for (let i = 0; i < chartData.data.length; i++) {
      row.setAttribute('class', 'bars');
      let td = document.createElement("td");
      let div = document.createElement('div');
      legendColor[i] = this.getRandomColor();
      div.style.background = legendColor[i];
      div.style.height = chartData.data[i] + '%';
      td.innerText = chartData.data[i] + '%';
      td.appendChild(div);
      row.appendChild(td);
    }
  }
}
