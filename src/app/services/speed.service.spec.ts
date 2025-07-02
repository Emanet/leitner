import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DriverService } from './driver.services';
import { SpeedService } from './speed.services';

describe('SpeedService', () => {
  let service: SpeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedService, DriverService, provideHttpClientTesting()],
    });

    service = TestBed.inject(SpeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize car speeds to 0', fakeAsync(() => {
    let car1Speed = -1;
    let car2Speed = -1;

    service.car1Speed$.subscribe((speed) => (car1Speed = speed));
    service.car2Speed$.subscribe((speed) => (car2Speed = speed));

    tick();
    expect(car1Speed).toBe(0);
    expect(car2Speed).toBe(0);
  }));
});
