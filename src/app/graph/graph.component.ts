import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  title = ''
  constructor(
    private appGraphService: GraphDataService, private commonService: CommonService
  ) { }

  ngOnInit() {
    let colors: any;
    this.appGraphService.getGraphData().subscribe(data => {
      let legendColor = [];
      let { chartData, row, table, chart } = this.commonService.prepareChartDom(data);
      this.title = chartData.title
      this.commonService.prepareChartYAxis(chartData, row);
      this.commonService.renderBarChart(chartData, row, legendColor);
      this.commonService.prepareChartLegend(chartData, legendColor, row, table);
      this.commonService.prepareChartXAxis(chartData, table, chart);
      document.getElementById('bar-chart').innerHTML = chart.outerHTML;
    })

  }
}