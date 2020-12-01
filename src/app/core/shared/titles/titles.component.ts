import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  private _titleName: string;

  public get titleName(): string {
    return this._titleName;
  }

  @Input()
  public set titleName(titleName: string) {
    this._titleName = titleName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
