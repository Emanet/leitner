import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Driver } from '../models/driver.model';

interface ApiResponse {
  users: Driver[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private apiUrl = 'https://dummyjson.com/users?limit=2';

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http
      .get<ApiResponse>(this.apiUrl)
      .pipe(map((response) => response.users));
  }
}
