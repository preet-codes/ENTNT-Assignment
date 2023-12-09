import { Component } from '@angular/core';
import { format } from 'date-fns';
import { DataService } from '../data.service';

const USER_DATA = [
  {"FirstName": "Tassos", "LastName": "Tassos", "AppointmentDate": "2023-12-09T15:44", "Location": "New York"},
  {"FirstName": "Robert", "LastName": "Johnson", "AppointmentDate": "1988-08-22", "Location": "Los Angeles"},
  {"FirstName": "Emily", "LastName": "Brown", "AppointmentDate": "1995-04-03", "Location": "Chicago"},
  {"FirstName": "Michael", "LastName": "Miller", "AppointmentDate": "1982-09-10", "Location": "San Francisco"},
];
const COLUMNS_SCHEMA =[
  {
      key: "FirstName",
      type: "text",
      label: "First Name"
  },
  {
      key: "LastName",
      type: "text",
      label: "Last Name"
  },
  {
      key: "AppointmentDate",
      type: "datetime-local",
      label: "Appointment Date"
  },
  {
      key: "Location",
      type: "text",
      label: "Location"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  dataSource: any[] = [];

  constructor(private serv:DataService){}
  ngOnInit(){
    this.dataSource = this.serv.getClients();

  }
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  addAppointment(index: number) {
    // You can customize this method based on your requirements
    // For simplicity, let's add a new appointment with the current date
    this.dataSource[index]['AppointmentDate'] = new Date().toISOString().split('T')[0];
}

deleteAppointment(index: number) {
    // You can customize this method based on your requirements
    // For simplicity, let's remove the appointment date
    delete this.dataSource[index]['AppointmentDate'];
}
  addData() {
    const newClient = { "FirstName": "", "LastName": "", "AppointmentDate": "", "Location": "", "isEdit": true };
    this.dataSource = [...this.dataSource, newClient];
  }

  deleteData(index: number) {
    const confirm :boolean = window.confirm('Are you sure ?')
    if (!confirm){
      return;
    }
    this.dataSource = [...this.dataSource.slice(0, index), ...this.dataSource.slice(index + 1)];
  }
  parseDate(dateString: string): { date: string, time: string } {
    const date = new Date(dateString);
    return {
      date: date.toDateString(),
      time: date.toTimeString().split(' ')[0]
    };
  }
  userAppointments = USER_DATA;
}
