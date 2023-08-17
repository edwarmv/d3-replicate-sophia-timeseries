import { Injectable } from '@angular/core';
import { json } from 'd3';

class ValorDolarBlue {
  constructor(
    public fecha: Date,
    public oficialVenta: number,
    public blueVenta: number,
  ) {}
}

class ValorDolarBlueAdapter {
  toModel(value: any): ValorDolarBlue {
    return new ValorDolarBlue(
      new Date(value['fecha']),
      value['oficial_venta'],
      value['blue_venta'],
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class DolarBlueService {
  private _valorDolarBlueAdapter = new ValorDolarBlueAdapter();

  async getData(): Promise<ValorDolarBlue[]> {
    const data = await json<any>('../../../assets/data/dolar-blue.json');
    return data.map((value: any) => this._valorDolarBlueAdapter.toModel(value));
  }
}
