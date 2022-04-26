import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    })
  }

}
