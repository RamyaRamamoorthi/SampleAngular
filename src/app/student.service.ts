import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  public getme() {
   return this.http.get<any[]>(`http://localhost:3000`);  
    
    }

  postme()
  {
    return this.http.post<any[]>(`http://localhost:3000`,
{
  "sid" : "4",
     "StudentName" : "NEwAAA",
     "StudentGrade" : "New A",
     "Course" : "NEwZZZ",
     "Address" : "NEw0000",
     "PhoeNumber" : 9093343556
});

  }
  putme()
  {
    return this.http.put<any[]>(`http://localhost:3000/1`,
    {
     
     
      "sid" : "1",
      "StudentName" : "Ramya",
      "StudentGrade" : "A",
      "Course" : "ZZZ",
      "Address" : "0000",
      "PhoeNumber" : 472943556
      
    });
   
  }
  deleteme()
  {
    return this.http.delete<any[]>(`http://localhost:3000/3`);
   
  }
}
