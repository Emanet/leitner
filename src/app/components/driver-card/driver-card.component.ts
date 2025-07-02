import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Driver } from '../../models/driver.model';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class DriverCardComponent {
  [x: string]: any;
  @Input() carName: string = '';
  @Input() speed: number = 0;
  @Input() driver?: Driver;

  getSpeedClass(speed: number): string {
    if (speed > 100) return 'danger';
    if (speed >= 70) return 'warning';
    return 'safe';
  }
}
