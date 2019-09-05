import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() color: string = "gray";
  @Input() image: string = "";
  @Input() colorcube: string = "blue";

  constructor() { }

  ngOnInit() {
  }

}