import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductService } from './product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  response : any
  constructor(public service : ProductService) { }
  gets(){
    this.service.getme().subscribe((data) => {
     this.response = data;
    });
    
   
  }

posts(){
this.service.postme().subscribe(
  data => {
    
    console.log(data);
  },
 
);
}
puts(){
this.service.putme().subscribe(
data => {
 
  console.log(data);
},

);
}
deletes(){
this.service.deleteme().subscribe(
data => {
 
  console.log(data);
},

); 
}
  ngOnInit(): void {
  }

}
