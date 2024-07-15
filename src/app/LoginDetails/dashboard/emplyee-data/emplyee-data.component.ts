import { Component } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
export interface person {
  sno:number
  name:string
  email_id :string
  phone_number:number
  city:string
  state:string
  country:string
  pincode:string


}



@Component({
  selector: 'app-emplyee-data',
  templateUrl: './emplyee-data.component.html',
  styleUrls: ['./emplyee-data.component.css']
})
export class EmplyeeDataComponent {
  pepole: person[]=[
    {
      sno:1,name:"sai",email_id :"vettisaikumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:2,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:3,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:4,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:5,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:6,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:7,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:8,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:9,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:10,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:11,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },
    {
      sno:12,name:"kumar",email_id :"kumar@gmail.com",phone_number:1234567890, city:"Tirupati", state:"AP",country:"india", pincode:"567483"
    },

  ]
  dataSource=new MatTableDataSource<person>(this.pepole)
  displayedColumns:string[]=[
    "sno","name","email_id","phone_number","city","state","country","pincode"
  ]
}
