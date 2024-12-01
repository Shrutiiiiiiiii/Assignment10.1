import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  additionResult!: number;
  subtractionResult!: number;

public constructor(private arithmeticService: ArithmeticService) {

  var num1 = 21;
    var num2 = 10;

    this.additionResult = this.arithmeticService.add(num1, num2);
    this.subtractionResult = this.arithmeticService.sub(num1, num2);

}

}
