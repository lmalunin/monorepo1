import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lb-lib1',
  template: `
    <p>
      lib1 works!
    </p>
  `,
  styles: [
  ]
})
export class Lib1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
