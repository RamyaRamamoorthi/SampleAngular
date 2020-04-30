import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
  results = ' ';
  constructor(private http: HttpClient) { }
  
  getme(){
    this.http.get(`http://localhost:3000`).toPromise() // for the promise way
    .then((customers) =>{
    
    console.log(customers);
    });
  }

  postme()
  {
    const reqt =this.http.post(`http://localhost:3000`,
{
  "Cid" : "4",
  "CustomerName" : "New",
  "CustomerAddres" : "NewYYY",
  "Location" : "NewZZz",
  "Landmark" : "OPPS",
  "Pincode" : 4497
})
.subscribe(
  customers => {
    console.log(customers);
  },
 
);
  }
  putme()
  {
    const reqt =this.http.put(`http://localhost:3000/2`,
    {
     
     
    "cid" : "2",
    "CustomerName" : "Ramya",
    "CustomerAddres" : "YyYyYy",
    "Location" : "ZzZzZzz",
    "Landmark" : "49734",
    "Pincode" : 2834497
      
    })
    .subscribe(
      customers => {
        console.log(customers);
      },
      
    );
  }
  deleteme()
  {
    const reqt =this.http.delete(`http://localhost:3000/2`)
    .subscribe(
      customers => {
        console.log(customers);
      },
      
    ); 

  }

  ngOnInit(): void {
  
    
      

     
     
    
  }

}
