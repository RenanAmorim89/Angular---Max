import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector:'app-warniung-alert',
  template:`
  <p> This is a warning, you are in danger!</p>
  `,
  styles:[`
  p{
    padding:20px;
    background-color: mistyrose;
    border: 1px solid red;
  }
  `], 
})
export class WarningAlertComponent{

}