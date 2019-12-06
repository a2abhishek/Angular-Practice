import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPerson } from './person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personUrl:string = "http://localhost:8885/PersonUI/person";

  constructor(private http:HttpClient) {}
  getPersons():Observable<IPerson[]> {
    return this.http.get<IPerson[]>(this.personUrl);
  }

  private deleteUrl:string = "http://localhost:8885/PersonUI/person/";

  deletePersonFrom(id:number):Observable<any>{
    return this.http.delete<any>(this.deleteUrl+id,{responseType: 'text' as 'json' });
  }

  private addUrl:string = "http://localhost:8885/PersonUI/person/";

  addPerson(personObj:any):Observable<any>{
    return this.http.post<any>(this.addUrl,personObj,{responseType: 'text' as 'json' });
  }
  
}
