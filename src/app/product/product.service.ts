import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from './post';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
data : object;
  public getme()  {
    return this.http.get<any>(`http://localhost:3000/api`);
   
    
   
     
     }
 
   postme()
   {
     return this.http.post(`http://localhost:3000/api`,
 {
  "PrdName": "Mobile",
  "PrdPrice": 9324,
  "Manu":"9",
  "Exp":"2",
   "Barcode":9093
 });
 
   }
   putme()
   {
     return this.http.put(`http://localhost:3000/api`,
     {
      
      
      "_id": "5ea80f3a2585292468abe910",
      "PrdName": "NEw Mobile",
     "PrdPrice": 9324,
     "Manu":"9",
     "Exp":"2",
      "Barcode":9093
       
     });
    
   }
   deleteme()
   {
     return this.http.delete(`http://localhost:3000/api/5ea80f3a2585292468abe910`);
    
   }
 }
 
