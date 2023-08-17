import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  axisBottom,
  axisLeft,
  line,
  max,
  min,
  scaleLinear,
  scaleUtc,
  select,
} from 'd3';
import { DolarBlueService } from 'src/app/services/dolar-blue.service';

@Component({
  selector: 'app-basic-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-line-chart.component.html',
  styleUrls: ['./basic-line-chart.component.scss'],
})
export class BasicLineChartComponent implements AfterViewInit {
  padding = { top: 10, right: 30, bottom: 30, left: 60 };
  width = 860 - this.padding.left - this.padding.right;
  height = 400 - this.padding.top - this.padding.bottom;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _dolarBlueService: DolarBlueService,
  ) {}

  async ngAfterViewInit(): Promise<void> {
    const svg = select(this._elementRef.nativeElement)
      .append('svg')
      .attr('width', this.width + this.padding.left + this.padding.right)
      .attr('height', this.height + this.padding.top + this.padding.bottom);

    svg
      .append('text')
      .attr('y', 20)
      .attr('x', (this.width + this.padding.left + this.padding.right) / 2)
      .text('Basic Line Chart');

    const dataset = await this._dolarBlueService.getData();

    const x = scaleUtc(
      [min(dataset, (d) => d.fecha)!, max(dataset, (d) => d.fecha)!],
      [this.padding.left, this.width],
    );

    svg
      .append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(axisBottom(x));

    const y = scaleLinear(
      [min(dataset, (d) => d.blueVenta)!, max(dataset, (d) => d.blueVenta)!],
      [this.height, 0],
    );
    svg
      .append('g')
      .attr('transform', `translate(${this.padding.left}, 0)`)
      .call(axisLeft(y));

    svg
      .append('path')
      .datum(dataset)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        line(
          (d) => x(d.fecha),
          (d) => y(d.blueVenta),
        ),
      );
  }
}
