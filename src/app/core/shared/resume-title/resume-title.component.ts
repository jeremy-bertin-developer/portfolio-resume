import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-title',
  templateUrl: './resume-title.component.html',
  styleUrls: ['./resume-title.component.css']
})
export class ResumeTitleComponent implements OnInit {
  private _title: string;
  private _source: string;

  public get title(): string {
    return this._title;
  }
  @Input()
  public set title(title: string) {
    this._title = title;
  }

  public get source(): string {
    return this._source;
  }
  @Input()
  public set source(source: string) {
    this._source = source;
  }

  constructor() {}

  ngOnInit(): void {}
}
