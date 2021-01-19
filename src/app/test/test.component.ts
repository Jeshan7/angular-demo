import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'Jeshan';

  public isDisabled = false;
  // public name = '';
  // public isSpecial = true;
  // public messageClass = {
  //   "text-success": !this.isDisabled,
  //   "text-info": !this.isDisabled,
  //   "text-danger": this.isSpecial
  // }
  @Input('pData') public name;
  // @Input() public pData;

  public colors = ["red", "green", "blue", "yellow"]
  constructor() { }

  ngOnInit(): void {
  }
  
  randomFunc(value) {
    // this.title = 'welcome to code evalution'
    console.log(value)
  }
}
