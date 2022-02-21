import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isShown1: boolean = false;
  constructor(private translateService: TranslateService) {
  }


  ngOnInit(): void {
  }

  toggleShow1() {
    this.isShown1 = !this.isShown1;
  }
  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

}
