import { Component, OnInit } from '@angular/core';
import { PersonClass } from '../person-class';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private p:PersonService,private router:Router) {}

  personObj=new PersonClass();
 
  onLoad() {
    console.log(this.personObj);
  }
  ngOnInit() {
    this.onLoad();
  }
  onSubmit() {
    console.log(this.personObj);
    this.p.addPerson(this.personObj).subscribe(data=>{console.log(data);});
    //location.reload(true);
    this.router.navigate(['/Login']);
  }

  greetings = ['yo','hi','hello','namaskar','namastey','satsriyakar','adaab'];
} 
