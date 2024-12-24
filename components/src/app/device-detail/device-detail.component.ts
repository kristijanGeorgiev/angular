import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from '../services/device.service';
import { Devices } from '../models/device';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-device-detail',
  standalone: false,
  
  templateUrl: './device-detail.component.html',
  styleUrl: './device-detail.component.css'
})
export class DeviceDetailComponent implements OnInit{
  device: Devices | undefined
  constructor(private route: ActivatedRoute, private router: Router, private deviceService: DeviceService) { }
  ngOnInit(): void {
    this.getDevicesDetails();
  }
  getDevicesDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.deviceService.getDevicesById(+id).subscribe((device: Devices| undefined) => {
        this.device = device;
      });
    }
  }
  goToDeviceList(): void {
    this.router.navigate(['/devices']);
  }
}
