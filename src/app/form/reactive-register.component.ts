import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private p:PersonService,private router:Router) { }

  personForm = this.fb.group( {
    personName:['',[Validators.required,Validators.minLength(3)]],
    age:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  });

  get personName() {
    return this.personForm.get('personName');
  }
  get age() {
    return this.personForm.get('age');
  }
  get email() {
    return this.personForm.get('email');
  }
  get password() {
    return this.personForm.get('password');
  }
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.personForm.value);
    this.p.addPerson(this.personForm.value).subscribe(data=>{console.log(data);});
    // //location.reload(true);
    this.router.navigate(['/Login']);
  }
}
