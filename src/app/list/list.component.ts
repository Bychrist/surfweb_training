import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
