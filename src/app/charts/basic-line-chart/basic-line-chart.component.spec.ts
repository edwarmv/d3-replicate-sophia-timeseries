import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLineChartComponent } from './basic-line-chart.component';

describe('BasicLineChartComponent', () => {
  let component: BasicLineChartComponent;
  let fixture: ComponentFixture<BasicLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BasicLineChartComponent]
    });
    fixture = TestBed.createComponent(BasicLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
