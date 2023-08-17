import { Component } from '@angular/core';
import { BasicLineChartComponent } from './charts/basic-line-chart/basic-line-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BasicLineChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'd3-replicate-sophia-timeseries';
}
