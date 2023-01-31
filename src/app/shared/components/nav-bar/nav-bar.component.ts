import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public hideTitles = false;

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  public ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall]).subscribe((result) => {
      if (result.matches) {
        this.hideTitles = result.matches;
      } else {
        this.hideTitles = result.matches;
      }
    });
  }
}
