import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(
    private media: ObservableMedia
  ) {}

  ngOnInit() {}

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }
}
