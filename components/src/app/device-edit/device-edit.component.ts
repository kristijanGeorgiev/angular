import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Devices } from '../models/device';
import { DeviceService } from '../services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-device-edit',
  standalone: false,
  
  templateUrl: './device-edit.component.html',
  styleUrl: './device-edit.component.css'
})
export class DeviceEditComponent implements OnInit{
  device: Devices | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.getDevicesDetails();
    this.getDevices();
  }
  getDevicesDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.deviceService.getDevicesById(+id).subscribe((device) => {
        this.device = device;
      });
    }
  }
  getDevices(): void {
    this.deviceService.getDevices().subscribe((device) => {
      this.device = this.device;
    });
  }
  saveChanges(): void {
    if (this.device) {
      this.deviceService.updateDevices(this.device).subscribe(() => {
        this.router.navigate(['/devices', this.device!.id]);
      });
    }
  }
}