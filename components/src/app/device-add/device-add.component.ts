import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../services/device.service';
import { Devices } from '../models/device';
@Component({
  selector: 'app-device-add',
  standalone: false,
  
  templateUrl: './device-add.component.html',
  styleUrl: './device-add.component.css'
})
export class DeviceAddComponent implements OnInit{
  newDevices: Devices = {
    id: 0, category: '', devicetype: '', price: 0, warranty: 0,
    model: ''
  }
  category: string[] = [];
  constructor(private deviceService: DeviceService, private router: Router) {}
 ngOnInit(): void {
   this.getCategories();
 }
 addDevices(): void {
   this.deviceService.addDevices(this.newDevices).subscribe(() => {
     this.router.navigate(['/devices']);
   });
 }
 goToEpisodeList(): void {
   this.router.navigate(['/devices']);
 }
getCategories(): void {
 this.deviceService.getCategories().subscribe((category) => {
   this.category = category;
 });
}
}
