import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  USER_DATA = [
    {"FirstName": "Marios", "LastName": "Sarrigiannis", "AppointmentDate": "2023-12-09T15:44", "Location": "New York"},
    {"FirstName": "Anthony", "LastName": "Matsis", "AppointmentDate": "2023-08-22", "Location": "Los Angeles"},
    {"FirstName": "Omiros", "LastName": "Papakonstantinou", "AppointmentDate": "2023-04-03", "Location": "Chicago"},
    {"FirstName": "Mitali ", "LastName": "Joshi", "AppointmentDate": "2023-09-10T15:44", "Location": "San Francisco"},
  ];
  getClients() {
    return this.USER_DATA;
  }
}
