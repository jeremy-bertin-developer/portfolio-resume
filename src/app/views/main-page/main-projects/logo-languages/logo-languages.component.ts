import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logo-languages',
  templateUrl: './logo-languages.component.html',
  styleUrls: ['./logo-languages.component.css']
})
export class LogoLanguagesComponent implements OnInit {
  @Input()
  src: string;

  @Input()
  alt: string;

  @Output() emitShowProject = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  showPorject(): void {
    this.emitShowProject.emit();
  }
}
