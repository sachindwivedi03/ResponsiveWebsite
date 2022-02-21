import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  alertSuccessful:boolean=false;
  alertFailed:boolean=false;
  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_8yrgs6l', 'template_xnganth', e.target as HTMLFormElement, 'user_qKknHRWKFRtgMvtc4lhif')
      .then((result: EmailJSResponseStatus) => {
        this.alertSuccessful=true;
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        this.alertFailed=true;
      });
  }
  closeAlert(){
    this.alertSuccessful=false;
    this.alertFailed=false;
    window.location.reload();
  }

}



 
