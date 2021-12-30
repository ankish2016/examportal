import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  regisForm:FormGroup

  constructor(private fb:FormBuilder,private registerSerivice:RegisterService) { 
    this.regisForm=this.fb.group({
      username:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6)]],
      firstname:["",[Validators.required]],
      lastname:["",[Validators.required]],
      email:["",[Validators.required,Validators.email]],
      phone:["",[Validators.required]]
    })

  }

  ngOnInit(): void {
   
  
  }

  RegisterForm()
  {
    if(this.regisForm.valid){
     this.registerSerivice.addUser(this.regisForm.value).subscribe(data=>{
       console.log(data);
     })
    this.regisForm.reset();
    }
    else {
      return;
    }
  }


}
