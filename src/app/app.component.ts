import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'motorcons2';


  constructor(private translateService: TranslateService) {
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }
}
