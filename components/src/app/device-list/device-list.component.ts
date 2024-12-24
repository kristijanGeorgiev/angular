import { Component, OnInit } from '@angular/core';
import { Devices } from '../models/device';
import { DeviceService } from '../services/device.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-device-list',
  standalone: false,
  
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent implements OnInit{
  devices: Devices[] = [];
  combocategories: string[] = [];
  combodevicetypes: string[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  categoryfilter: string = '';
  categoryloaded: boolean = false
  devicetypefilter: string = '';
  devicetypeloaded: boolean = false;
  constructor(private deviceService: DeviceService, private router: Router) { }

  ngOnInit(): void {
    this.getDevices();
    this.getCategories();
    this.getDeviceTypes();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.devices.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByCategory(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.devices.sort((a, b) => {
      const categoryA = a.category.toLowerCase();
      const categoryB = b.category.toLowerCase();

      if (categoryA < categoryB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (categoryA > categoryB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  getDevices(): void {
    this.deviceService.getDevices().subscribe((devices) => {
      this.devices = devices;
      console.log(devices);
    });
  }

  getCategories(): void {
    this.deviceService.getCategories().subscribe((category) => {
      this.combocategories = category;
      this.categoryfilter = '';
      this.categoryloaded = true;
    });
  }

  getDeviceTypes(): void {
    this.deviceService.getDeviceTypes().subscribe((device) => {
      this.combodevicetypes = device;
      this.devicetypefilter = '';
      this.devicetypeloaded = true;
    });
  }

  applyFilters(): void {
    this.deviceService.getDevices().subscribe((devices) => {
      this.devices= this.filterDevices(devices);
    });
  }

  filterDevices(devices: Devices[]): Devices[] {
    return devices.filter(device =>
      this.filterByCategory(device) &&
      this.filterByDeviceType(device)
    )
  }
  // za niza
  filterByCategory(device: Devices): boolean {
    return (
      this.categoryfilter === undefined ||
      this.categoryfilter === '' ||
      device.category.includes(this.categoryfilter)
    );
  }
  filterByDeviceType(device: Devices): boolean {
    return (
      this.devicetypefilter === undefined ||
      this.devicetypefilter === '' ||
      device.devicetype.includes(this.devicetypefilter)
    );
  }
  
  viewDevicesDetails(device: Devices): void {
    this.router.navigate(['/device-detail', device.id]);
  }

  editDevices(device: Devices): void {
    this.router.navigate(['/device-edit', device.id]);
  }

  deleteDevices(device: Devices): void {
    if (confirm('Do you want to delete the device')) {
      this.deviceService.deleteDevices(device.id).subscribe(() => {
        this.getDevices();
      });
    }
  }
}