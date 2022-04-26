import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
    })

  }

}
