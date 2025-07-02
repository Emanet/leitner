import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DriverCardComponent } from './components/driver-card/driver-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Driver } from './models/driver.model';
import { DriverService } from './services/driver.services';
import { SpeedService } from './services/speed.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    FooterComponent,
    DriverCardComponent,
  ],
})
export class AppComponent implements OnInit {
  car1Speed: number = 0;
  car2Speed: number = 0;
  drivers: Driver[] = [];

  constructor(
    private speedService: SpeedService,
    private driverService: DriverService
  ) {}

  ngOnInit(): void {
    this.speedService.car1Speed$.subscribe((speed) => (this.car1Speed = speed));
    this.speedService.car2Speed$.subscribe((speed) => (this.car2Speed = speed));

    this.driverService
      .getDrivers()
      .subscribe((drivers) => (this.drivers = drivers));
  }
}
