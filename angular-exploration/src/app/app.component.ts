import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-app';


  submit(form: NgForm){
    console.log(form.value);
    console.log("Form is submitted =====>>>");
  }
}
 