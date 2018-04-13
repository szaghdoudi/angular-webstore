import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  template: '<div class="aide"><a href="https://angular.io/docs">Aide de Angular !</a></div>',
  styleUrls: []
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
