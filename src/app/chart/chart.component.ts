import { Component } from '@angular/core';
import { Edge, Node } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  // Chart data
  data = [
    { name: 'Germany', value: 8940000 },
    { name: 'USA', value: 5000000 },
    { name: 'France', value: 7200000 },
    { name: 'UK', value: 6200000 },
  ];

  // Chart options
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  nodes: Node[] = [
    { id: 'node1', label: 'Node 1' },
    { id: 'node2', label: 'Node 2' },
    { id: 'node3', label: 'Node 3' },
  ];

  links: Edge[] = [
    { source: 'node1', target: 'node2', label: 'Link 1' },
    { source: 'node2', target: 'node3', label: 'Link 2' },
  ];

  layout = 'dagre'; // Layout: 'dagre', 'd3ForceDirected', etc.

  curve: any = shape.curveLinear;
}