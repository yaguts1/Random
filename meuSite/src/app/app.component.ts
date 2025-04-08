import { Component } from '@angular/core';
import { UnitConverterComponent } from './unit-converter/unit-converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UnitConverterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuSite';
}
