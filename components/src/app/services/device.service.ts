import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devices } from '../models/device';
import { Observable} from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

    apiUrl: any;
    device: Devices[] = [];
    categories: string[] = [];
    devicetypes: string[] = [];

    constructor(private http: HttpClient) { }

    getDevices(): Observable<Devices[]> {
        return this.http.get<Devices[]>(`${BASE_URL}/devices`);
    }

    getCategories(): Observable<string[]> {
      return this.http.get<string[]>(`${BASE_URL}/categories`);
  }

  getDeviceTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/devicetypes`);
  }

    updateDevices(device: Devices): Observable<Devices> {
        return this.http.put<Devices>(`${BASE_URL}/devices/${device.id}`, device);
    }

    deleteDevices(deviceId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/devices/${deviceId}`);
    }

    addDevices(newDevices: Devices): Observable<Devices> {
        const { id, ...deviceWithoutId } = newDevices;
        return this.http.post<Devices>(`${BASE_URL}/devices`, deviceWithoutId);
    }

    getDevicesById(deviceId: number): Observable<Devices> {
        return this.http.get<Devices>(`${BASE_URL}/devices/${deviceId}`);
    }
}
