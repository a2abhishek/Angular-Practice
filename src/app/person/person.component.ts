import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { IPerson } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public person:any=[];
  
  public errorMsg:string;
  
  constructor(private personObj:PersonService) { }
  
  ngOnInit() {
    this.personObj.getPersons().subscribe(data => 
      this.person=data
    ); 
  }

  deleteId:any;
  
  deletePerson(inp:any) {

    this.deleteId=inp.personId;console.log(this.deleteId);

    this.personObj.deletePersonFrom(this.deleteId).subscribe(data=>{
      this.person = this.person.filter(u=>u!==inp);
      console.log();
    });
  }


}
