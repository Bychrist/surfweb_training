import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
