import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bll-lib',
  template: `
    <p>
      bll-lib works!
    </p>
    <div>
      <ui-lib></ui-lib>
    </div>
  `,
  styles: []
})
export class BllLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
