import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  isShown1: boolean = false;
  isShown2: boolean = false;
  isShown3: boolean = false;
  isShown4: boolean = false;
  isShown5: boolean = false;
  isShown6: boolean = false;
  isShown7: boolean = false;
  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  toggleShow1() {
    this.isShown1 = !this.isShown1;
  }
  toggleShow2() {
    this.isShown2 = !this.isShown2;
  }
  toggleShow3() {
    this.isShown3 = !this.isShown3;
  }
  toggleShow4() {
    this.isShown4 = !this.isShown4;
  }
  toggleShow5() {
    this.isShown5 = !this.isShown5;
  }
  toggleShow6() {
    this.isShown6 = !this.isShown6;
  }
  toggleShow7() {
    this.isShown7 = !this.isShown7;
  }
}
