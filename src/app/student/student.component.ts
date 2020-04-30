import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
public response : any;


  constructor(public studservice : StudentService) {
    
    }
     gets(){
      this.studservice.getme().toPromise() 
      .then((student) =>{
      this.response = student;
      console.log(student);
      });
     
       
      
     }
  
posts(){
  this.studservice.postme().subscribe(
    student => {
      
      console.log(student);
    },
   
  );
}
puts(){
 this.studservice.putme().subscribe(
  student => {
   
    console.log(student);
  },
  
);
}
deletes(){
this.studservice.deleteme().subscribe(
  student => {
   
    console.log(student);
  },
  
); 
}
  ngOnInit(): void {
  }
  
}
