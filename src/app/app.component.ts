import { Component } from '@angular/core';
import { AngularFaviconService } from 'angular-favicon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private ngxFavicon : AngularFaviconService) {}
  
  title = 'dhruv-arora';

  ngOnInit() {
    this.ngxFavicon.setFavicon("../assets/dark.ico","../assets/light.ico");
  }
}
