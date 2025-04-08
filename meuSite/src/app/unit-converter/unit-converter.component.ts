import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Unit {
  name: string;
  symbol: string;
  toKgFactor: number;
}

interface Commodity {
  name: string;
  units: Unit[];
}

@Component({
  selector: 'app-unit-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.css']
})
export class UnitConverterComponent {
  commodities: Commodity[] = [
    {
      name: 'Soja',
      units: [
        { name: 'Saca (60kg)', symbol: 'sc', toKgFactor: 60 },
        { name: 'Bushel', symbol: 'bu', toKgFactor: 27.216 },
        { name: 'Tonelada Métrica', symbol: 'ton', toKgFactor: 1000 },
        { name: 'Quilograma', symbol: 'kg', toKgFactor: 1 }
      ]
    },
    {
      name: 'Milho',
      units: [
        { name: 'Bushel', symbol: 'bu', toKgFactor: 25.4 },
        { name: 'Tonelada Métrica', symbol: 'ton', toKgFactor: 1000 },
        { name: 'Quilograma', symbol: 'kg', toKgFactor: 1 }
      ]
    },
    {
      name: 'Café',
      units: [
        { name: 'Saca (60kg)', symbol: 'sc', toKgFactor: 60 },
        { name: 'Libra', symbol: 'lb', toKgFactor: 0.453592 },
        { name: 'Tonelada Métrica', symbol: 'ton', toKgFactor: 1000 },
        { name: 'Quilograma', symbol: 'kg', toKgFactor: 1 }
      ]
    }
  ];

  selectedCommodity?: Commodity;
  fromUnit?: Unit;
  toUnit?: Unit;
  inputValue = 0;

  convert(value: number, from: number, to: number): number {
    return (value * from) / to;
  }
}
