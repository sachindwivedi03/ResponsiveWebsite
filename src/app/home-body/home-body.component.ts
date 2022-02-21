import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  constructor(private translateService: TranslateService) {
  }
  ngOnInit(): void {
  }


}

