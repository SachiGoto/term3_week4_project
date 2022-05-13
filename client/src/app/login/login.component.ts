import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../services/service.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:ServiceService, private router:Router) { }

  user_name:string='';
  password:string='';
  loginStatus = true;

  login(){
    this.http.loginService(this.user_name, this.password).subscribe(loginData=>{
      this.loginStatus = loginData.login;
      if(loginData.login){
        console.log(loginData);
        localStorage.setItem("adminId", JSON.stringify(loginData.data[0].user_id));

        this.router.navigate(['/admin']);
      }
    })



  }
  ngOnInit(): void {


  }

}
