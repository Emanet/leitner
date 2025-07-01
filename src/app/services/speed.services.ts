import { BehaviorSubject, interval, Observable } from 'rxjs';

export class SpeedService {
  private readonly maxSpeed = 200;
  private readonly minSpeed = 0;
  private readonly maxDelta = 15;
  private readonly updateIntervalMs = 1000;

  private car1SpeedSubject = new BehaviorSubject<number>(0);
  private car2SpeedSubject = new BehaviorSubject<number>(0);

  public car1Speed$: Observable<number> = this.car1SpeedSubject.asObservable();
  public car2Speed$: Observable<number> = this.car2SpeedSubject.asObservable();

  constructor() {
    interval(this.updateIntervalMs).subscribe(() => {
      this.updateSpeed(this.car1SpeedSubject);
      this.updateSpeed(this.car2SpeedSubject);
    });
  }

  private updateSpeed(subject: BehaviorSubject<number>) {
    const currentSpeed = subject.getValue();

    const isAccelerating = Math.random() > 0.5;

    const delta = Math.floor(Math.random() * (this.maxDelta + 1));

    let newSpeed = isAccelerating ? currentSpeed + delta : currentSpeed - delta;

    if (newSpeed > this.maxSpeed) newSpeed = this.maxSpeed;
    if (newSpeed < this.minSpeed) newSpeed = this.minSpeed;

    subject.next(newSpeed);
  }
}
